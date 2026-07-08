// tabla de decision combinada para arquitectura 3D
const TABLA_DECISION = [
  { id: 1, estado: "bloqueado", prioridad: "alta", volumenMinimo: 3, accion: "escalar a comite" },
  { id: 2, estado: "bloqueado", prioridad: "alta", volumenMinimo: 0, accion: "accion inmediata" },
  { id: 3, estado: "bloqueado", prioridad: "media", volumenMinimo: 0, accion: "revisar bloqueado" },
  { id: 4, estado: "bloqueado", prioridad: "baja", volumenMinimo: 0, accion: "revisar bloqueado" },
  { id: 5, estado: "pendiente", prioridad: "alta", volumenMinimo: 0, accion: "revisar pendiente" },
  { id: 6, estado: "pendiente", prioridad: "media", volumenMinimo: 0, accion: "monitorear pendiente" },
  { id: 7, estado: "pendiente", prioridad: "baja", volumenMinimo: 0, accion: "monitorear pendiente" },
];

const ORDEN_RIESGO = ["bloqueado", "pendiente", "aprobado"];
const UMBRAL_ESCALAMIENTO = 3;

function identificarEstadoCritico(items) {
  return ORDEN_RIESGO.find((estado) => items.includes(estado)) ?? null;
}

function contarEstadoCritico(items, estado) {
  return items.filter((i) => i === estado).length;
}

function extraerFilaForzada(regla) {
  if (typeof regla !== "string") return null;
  const match = regla.toLowerCase().match(/forzar fila (\d+)/);
  if (!match) return null;
  return Number(match[1]);
}

function consultarTablaDecisionCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin datos", filaAplicada: null, motivo: "no hay items para consultar en la tabla." };
  }

  const idForzado = extraerFilaForzada(regla);
  if (idForzado) {
    const filaForzada = TABLA_DECISION.find((f) => f.id === idForzado);
    if (filaForzada) {
      return { accion: filaForzada.accion, filaAplicada: filaForzada.id, motivo: `la regla forzo explicitamente la fila ${idForzado}, sin evaluar condiciones.` };
    }
    return { accion: "fila forzada no existe", filaAplicada: null, motivo: `la regla pidio forzar la fila ${idForzado}, pero no existe en la tabla.` };
  }

  const estadoCritico = identificarEstadoCritico(items);

  if (!estadoCritico) {
    return { accion: "sin accion", filaAplicada: null, motivo: "ningun item coincide con estados conocidos." };
  }

  if (estadoCritico === "aprobado") {
    return { accion: "sin accion", filaAplicada: null, motivo: "no hay riesgos, solo items aprobados." };
  }

  const cantidadCritica = contarEstadoCritico(items, estadoCritico);

  const filasCandidatas = TABLA_DECISION.filter(
    (f) => f.estado === estadoCritico && f.prioridad === prioridad && cantidadCritica >= f.volumenMinimo
  );

  if (filasCandidatas.length === 0) {
    return { accion: "prioridad no reconocida", filaAplicada: null, motivo: `no existe fila en la tabla para estado="${estadoCritico}" y prioridad="${prioridad}".` };
  }

  // se elige la fila con mayor volumenMinimo que igual se cumpla (la mas exigente y especifica)
  const filaElegida = filasCandidatas.reduce((mejor, actual) => (actual.volumenMinimo > mejor.volumenMinimo ? actual : mejor));

  return {
    accion: filaElegida.accion,
    filaAplicada: filaElegida.id,
    motivo: cantidadCritica >= UMBRAL_ESCALAMIENTO
      ? `hay ${cantidadCritica} items en estado "${estadoCritico}" (umbral de escalamiento superado), se aplico la fila mas severa.`
      : `combinacion estado="${estadoCritico}" y prioridad="${prioridad}" coincide con la fila ${filaElegida.id}.`,
  };
}

// pruebas
console.log(consultarTablaDecisionCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: 1 bloqueado (bajo umbral) -> fila 2, "accion inmediata"

console.log(consultarTablaDecisionCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { accion: 'sin datos', filaAplicada: null, motivo: 'no hay items para consultar en la tabla.' }

console.log(consultarTablaDecisionCombinado(
  ["bloqueado", "bloqueado", "bloqueado", "aprobado"], "alta", "revisar volumen critico"
));
// caso especial: 3 bloqueados (cumple volumenMinimo 3) -> fila 1, "escalar a comite"

console.log(consultarTablaDecisionCombinado(["pendiente"], "media", "forzar fila 4"));
// caso especial: la regla fuerza directamente la fila 4 ("revisar bloqueado"), sin evaluar la tabla normalmente