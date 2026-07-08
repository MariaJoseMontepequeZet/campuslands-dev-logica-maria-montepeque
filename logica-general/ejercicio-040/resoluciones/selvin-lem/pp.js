// estrategias de seleccion combinadas para comida urbana
const ORDEN_RIESGO = ["bloqueado", "pendiente", "aprobado"];

function excluirEstado(items, estadoExcluido) {
  return estadoExcluido ? items.filter((i) => i !== estadoExcluido) : items;
}

function extraerEstadoExcluido(regla) {
  if (typeof regla !== "string") return null;
  const reglaMinuscula = regla.toLowerCase();
  if (!reglaMinuscula.includes("excluir")) return null;
  return ORDEN_RIESGO.find((estado) => reglaMinuscula.includes(estado)) ?? null;
}

function estrategiaPrimeroCritico(items) {
  for (const estado of ["bloqueado", "pendiente"]) {
    if (items.includes(estado)) return estado;
  }
  return null;
}

function contarPorCategoria(items) {
  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (const item of items) {
    if (conteos[item] !== undefined) conteos[item]++;
  }
  return conteos;
}

function estrategiaMasFrecuente(items) {
  const conteos = contarPorCategoria(items);
  const max = Math.max(conteos.bloqueado, conteos.pendiente, conteos.aprobado);
  if (max === 0) return { seleccionado: null, empatados: [] };
  const empatados = ORDEN_RIESGO.filter((e) => conteos[e] === max);
  return { seleccionado: empatados.length === 1 ? empatados[0] : null, empatados };
}

function estrategiaMasReciente(items, empatados) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (empatados.includes(items[i])) return items[i];
  }
  return null;
}

function seleccionarItemCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { seleccionado: null, estrategiaUsada: "ninguna", alternativasConsideradas: [], motivo: "no hay items para aplicar una estrategia de seleccion." };
  }

  const estadoExcluido = extraerEstadoExcluido(regla);
  const itemsFiltrados = excluirEstado(items, estadoExcluido);

  if (itemsFiltrados.length === 0) {
    return { seleccionado: null, estrategiaUsada: "ninguna", alternativasConsideradas: [], motivo: `todos los items fueron excluidos por la regla (estado "${estadoExcluido}").` };
  }

  const alternativasConsideradas = [];

  if (prioridad === "alta") {
    alternativasConsideradas.push("primero_critico");
    const resultado = estrategiaPrimeroCritico(itemsFiltrados);
    if (resultado) {
      return { seleccionado: resultado, estrategiaUsada: "primero_critico", alternativasConsideradas, motivo: "prioridad alta activa la estrategia de tomar el primer item critico encontrado." };
    }
  }

  alternativasConsideradas.push("mas_frecuente");
  const { seleccionado, empatados } = estrategiaMasFrecuente(itemsFiltrados);

  if (seleccionado) {
    return { seleccionado, estrategiaUsada: "mas_frecuente", alternativasConsideradas, motivo: "se selecciono el estado mas frecuente sin empate." };
  }

  if (empatados.length >= 2) {
    alternativasConsideradas.push("mas_reciente (desempate)");
    const reciente = estrategiaMasReciente(itemsFiltrados, empatados);
    return {
      seleccionado: reciente,
      estrategiaUsada: "mas_reciente (desempate)",
      alternativasConsideradas,
      motivo: `empate entre [${empatados.join(", ")}] en frecuencia, se resolvio tomando el ultimo item de esos estados en aparecer.`,
    };
  }

  return { seleccionado: null, estrategiaUsada: "ninguna", alternativasConsideradas, motivo: "ningun item coincide con estados conocidos tras aplicar las estrategias." };
}

// pruebas
console.log(seleccionarItemCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: primero_critico -> seleccionado "bloqueado"

console.log(seleccionarItemCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { seleccionado: null, estrategiaUsada: 'ninguna', alternativasConsideradas: [], motivo: '...' }

console.log(seleccionarItemCombinado(["aprobado", "pendiente", "aprobado", "pendiente"], "media", "elegir con criterio de empate"));
// caso especial: empate 2-2 entre aprobado y pendiente -> fallback a mas_reciente, selecciona "pendiente" (ultimo en la lista)

console.log(seleccionarItemCombinado(["bloqueado", "aprobado"], "alta", "excluir bloqueado del analisis"));
// caso especial: bloqueado excluido -> primero_critico no encuentra nada, cae a mas_frecuente con solo aprobado