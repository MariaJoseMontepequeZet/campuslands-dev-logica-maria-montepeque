// tabla de decision para arquitectura 3D
const TABLA_DECISION = [
  { estado: "bloqueado", prioridad: "alta", accion: "accion inmediata" },
  { estado: "bloqueado", prioridad: "media", accion: "revisar bloqueado" },
  { estado: "bloqueado", prioridad: "baja", accion: "revisar bloqueado" },
  { estado: "pendiente", prioridad: "alta", accion: "revisar pendiente" },
  { estado: "pendiente", prioridad: "media", accion: "monitorear pendiente" },
  { estado: "pendiente", prioridad: "baja", accion: "monitorear pendiente" },
];

const ORDEN_RIESGO = ["bloqueado", "pendiente", "aprobado"];

function consultarTablaDecision(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin datos", motivo: "no hay items para consultar en la tabla." };
  }

  const estadoCritico = ORDEN_RIESGO.find((estado) => items.includes(estado));

  if (!estadoCritico) {
    return { accion: "sin accion", motivo: "ningun item coincide con estados conocidos." };
  }

  if (estadoCritico === "aprobado") {
    return { accion: "sin accion", motivo: "no hay riesgos, solo items aprobados." };
  }

  for (let i = 0; i < TABLA_DECISION.length; i++) {
    const fila = TABLA_DECISION[i];
    if (fila.estado === estadoCritico && fila.prioridad === prioridad) {
      return { accion: fila.accion, motivo: `combinacion estado="${estadoCritico}" y prioridad="${prioridad}" coincide con la tabla de decision.` };
    }
  }

  return { accion: "prioridad no reconocida", motivo: `no existe fila en la tabla para estado="${estadoCritico}" y prioridad="${prioridad}".` };
}

// pruebas
console.log(consultarTablaDecision(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { accion: 'accion inmediata', motivo: 'combinacion estado="bloqueado" y prioridad="alta" coincide con la tabla de decision.' }

console.log(consultarTablaDecision([], "alta", "revisar bloqueados primero"));
// caso borde: { accion: 'sin datos', motivo: 'no hay items para consultar en la tabla.' }

console.log(consultarTablaDecision(["pendiente"], "urgente", "revisar pendientes"));
// caso borde: prioridad no existe en la tabla -> { accion: 'prioridad no reconocida', motivo: '...' }