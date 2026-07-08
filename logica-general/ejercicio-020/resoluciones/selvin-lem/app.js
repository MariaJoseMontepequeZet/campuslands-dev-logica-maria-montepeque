// estrategias de seleccion para comida urbana
const ORDEN_RIESGO = ["bloqueado", "pendiente", "aprobado"];

function estrategiaPrimeroCritico(items) {
  for (const estado of ["bloqueado", "pendiente"]) {
    const indice = items.indexOf(estado);
    if (indice !== -1) {
      return { seleccionado: estado, indice };
    }
  }
  return { seleccionado: null, indice: -1 };
}

function estrategiaMasFrecuente(items) {
  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (conteos[item] !== undefined) {
      conteos[item]++;
    }
  }

  let seleccionado = null;
  let maxConteo = 0;

  for (const estado of ORDEN_RIESGO) {
    if (conteos[estado] > maxConteo) {
      maxConteo = conteos[estado];
      seleccionado = estado;
    }
  }

  return { seleccionado, indice: seleccionado ? items.indexOf(seleccionado) : -1 };
}

function seleccionarItem(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { seleccionado: null, estrategiaUsada: "ninguna", motivo: "no hay items para aplicar una estrategia de seleccion." };
  }

  const estrategiaUsada = prioridad === "alta" ? "primero_critico" : "mas_frecuente";
  const resultado = estrategiaUsada === "primero_critico"
    ? estrategiaPrimeroCritico(items)
    : estrategiaMasFrecuente(items);

  if (!resultado.seleccionado) {
    return { seleccionado: null, estrategiaUsada, motivo: "ningun item coincide con estados conocidos para la estrategia aplicada." };
  }

  return {
    seleccionado: resultado.seleccionado,
    estrategiaUsada,
    motivo: estrategiaUsada === "primero_critico"
      ? "prioridad alta activa la estrategia de tomar el primer item critico encontrado."
      : "prioridad no alta activa la estrategia de tomar el estado mas frecuente en la lista.",
  };
}

// pruebas
console.log(seleccionarItem(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: estrategia primero_critico -> seleccionado "bloqueado"

console.log(seleccionarItem([], "alta", "revisar bloqueados primero"));
// caso borde: { seleccionado: null, estrategiaUsada: 'ninguna', motivo: 'no hay items para aplicar una estrategia de seleccion.' }

console.log(seleccionarItem(["aprobado", "aprobado", "pendiente"], "media", "elegir mas comun"));
// caso borde: estrategia mas_frecuente -> seleccionado "aprobado" (2 contra 1)