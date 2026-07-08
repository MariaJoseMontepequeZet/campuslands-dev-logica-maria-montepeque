// toma de decisiones combinada para torneo de esports
function tomarDecisionCombinada(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { decision: "sin datos", accion: "sin accion", motivo: "no hay items para evaluar." };
  }

  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (conteos[item] !== undefined) conteos[item]++;
  }

  const { bloqueado: totalBloqueados, pendiente: totalPendientes, aprobado: totalAprobados } = conteos;
  const empateRiesgo = totalBloqueados === totalPendientes && totalBloqueados > 0;
  const prioridadAlta = prioridad === "alta";
  const saturado = totalBloqueados + totalPendientes >= totalAprobados && (totalBloqueados + totalPendientes) > 0;
  const reglaPideEscalar = typeof regla === "string" && regla.toLowerCase().includes("escalar");

  // condicion 1: empate de riesgo con prioridad alta
  if (empateRiesgo && prioridadAlta) {
    return {
      decision: "revision doble urgente",
      accion: "atender bloqueado y pendiente por igual",
      motivo: `hay ${totalBloqueados} bloqueados y ${totalPendientes} pendientes en empate, con prioridad alta.`,
    };
  }

  // condicion 2: lote saturado de riesgo con prioridad alta
  if (saturado && prioridadAlta) {
    return {
      decision: "escalamiento total",
      accion: "detener operacion y escalar",
      motivo: "el lote esta saturado de riesgo (bloqueados + pendientes) y la prioridad es alta.",
    };
  }

  // condicion 3: lote saturado sin prioridad alta
  if (saturado) {
    return {
      decision: "revision extendida",
      accion: "revisar todo el lote antes de continuar",
      motivo: "el lote esta saturado de riesgo, pero la prioridad no es alta.",
    };
  }

  // condicion 4: instruccion explicita de escalar en la regla
  if (reglaPideEscalar && totalBloqueados > 0) {
    return {
      decision: "escalamiento manual",
      accion: "escalar segun instruccion explicita",
      motivo: 'la regla menciona "escalar" y hay al menos un bloqueado.',
    };
  }

  // condicion 5: caso normal con bloqueado presente
  if (totalBloqueados > 0) {
    return { decision: "riesgo controlado", accion: "revisar bloqueado", motivo: "hay bloqueados sin combinaciones especiales." };
  }

  // condicion 6: solo pendientes
  if (totalPendientes > 0) {
    return { decision: "en espera", accion: "monitorear pendiente", motivo: "no hay bloqueados, solo pendientes." };
  }

  // condicion 7: solo aprobados
  return { decision: "sin riesgo", accion: "sin accion", motivo: "todos los items estan aprobados." };
}

// pruebas
console.log(tomarDecisionCombinada(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: 1 bloqueado, 1 pendiente, 1 aprobado -> empateRiesgo true + prioridadAlta -> "revision doble urgente"

console.log(tomarDecisionCombinada([], "alta", "revisar bloqueados primero"));
// caso borde: { decision: 'sin datos', accion: 'sin accion', motivo: 'no hay items para evaluar.' }

console.log(tomarDecisionCombinada(["bloqueado", "pendiente", "bloqueado", "aprobado"], "media", "escalar si es necesario"));
// caso especial: 2 bloqueados + 1 pendiente = 3, contra 1 aprobado -> saturado true, prioridad no alta -> "revision extendida"