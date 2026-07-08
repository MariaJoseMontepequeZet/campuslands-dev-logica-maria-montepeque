// toma de decisiones para torneo de esports
const ORDEN_RIESGO = ["bloqueado", "pendiente", "aprobado"];

function tomarDecision(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { decision: "sin datos", motivo: "no hay items para evaluar." };
  }

  const estadoCritico = ORDEN_RIESGO.find((estado) => items.includes(estado));

  if (!estadoCritico) {
    return { decision: "sin accion", motivo: "ningun item coincide con estados conocidos." };
  }

  if (estadoCritico === "aprobado") {
    return { decision: "sin accion", motivo: "no hay riesgos, solo items aprobados." };
  }

  const esAlta = prioridad === "alta";

  if (estadoCritico === "bloqueado") {
    return esAlta
      ? { decision: "accion inmediata", motivo: "bloqueado con prioridad alta exige respuesta inmediata." }
      : { decision: "revisar bloqueado", motivo: "bloqueado sin prioridad alta se revisa antes de lo normal." };
  }

  // estadoCritico === "pendiente"
  return esAlta
    ? { decision: "revisar pendiente", motivo: "pendiente con prioridad alta requiere revision prioritaria." }
    : { decision: "monitorear pendiente", motivo: "pendiente sin prioridad alta solo se monitorea." };
}

// pruebas
console.log(tomarDecision(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { decision: 'accion inmediata', motivo: 'bloqueado con prioridad alta exige respuesta inmediata.' }

console.log(tomarDecision([], "media", "regla x"));
// caso borde: { decision: 'sin datos', motivo: 'no hay items para evaluar.' }

console.log(tomarDecision(["pendiente"], "baja", "monitorear")); 
// caso borde: { decision: 'monitorear pendiente', motivo: 'pendiente sin prioridad alta solo se monitorea.' }