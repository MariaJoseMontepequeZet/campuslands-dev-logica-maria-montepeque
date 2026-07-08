// busqueda de elementos combinada para autos hiperdeportivos
const CRITERIO_POR_PRIORIDAD = { alta: "bloqueado", media: "pendiente", baja: "aprobado" };
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];

function extraerEstadoDeRegla(regla) {
  if (typeof regla !== "string") return null;
  const reglaMinuscula = regla.toLowerCase();
  if (!reglaMinuscula.includes("buscar")) return null;
  return ESTADOS_VALIDOS.find((estado) => reglaMinuscula.includes(estado)) ?? null;
}

function resolverCriterioFinal(prioridad, regla) {
  const estadoDeRegla = extraerEstadoDeRegla(regla);
  if (estadoDeRegla) {
    return { criterio: estadoDeRegla, origen: "regla" };
  }
  const criterioPorPrioridad = CRITERIO_POR_PRIORIDAD[prioridad];
  return { criterio: criterioPorPrioridad ?? null, origen: "prioridad" };
}

function buscarIndicesPorCriterio(items, criterio) {
  const indices = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] === criterio) indices.push(i);
  }
  return indices;
}

function buscarElementosCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { encontrados: [], primero: -1, motivo: "no hay items para buscar." };
  }

  const { criterio, origen } = resolverCriterioFinal(prioridad, regla);

  if (!criterio) {
    return { encontrados: [], primero: -1, motivo: `prioridad "${prioridad}" no reconocida y la regla no especifica un estado valido.` };
  }

  const indices = buscarIndicesPorCriterio(items, criterio);

  if (indices.length === 0) {
    return { encontrados: [], primero: -1, motivo: `ningun item coincide con el estado "${criterio}".` };
  }

  const motivo = origen === "regla"
    ? `la regla especifico explicitamente buscar "${criterio}", se ignoro el criterio por defecto de la prioridad.`
    : `la prioridad "${prioridad}" define buscar items en estado "${criterio}".`;

  return {
    encontrados: indices,
    primero: indices[0],
    motivo: indices.length > 1 ? `${motivo} se encontraron ${indices.length} coincidencias.` : motivo,
  };
}

// pruebas
console.log(buscarElementosCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: criterio por prioridad "bloqueado" -> encontrados [2], primero 2

console.log(buscarElementosCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { encontrados: [], primero: -1, motivo: 'no hay items para buscar.' }

console.log(buscarElementosCombinado(["bloqueado", "aprobado", "bloqueado", "pendiente"], "media", "buscar bloqueado en el lote"));
// caso especial: la regla menciona "buscar bloqueado", sobreescribe el criterio de prioridad "media" -> encontrados [0, 2], primero 0