// Ejercicio 068 - Flujos paso a paso

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'ninguna accion requerida',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'las tareas pendientes requieren seguimiento antes que las aprobadas.',
  aprobado: 'no hay riesgos ni tareas pendientes por resolver.',
};

function evaluarFlujo(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para evaluar.',
    };
  }

  const estadoPrioritario = items.reduce((masUrgente, estadoActual) => {
    const prioridadActual = PRIORIDADES[estadoActual] ?? 0;
    const prioridadUrgente = PRIORIDADES[masUrgente] ?? 0;
    return prioridadActual > prioridadUrgente ? estadoActual : masUrgente;
  }, items[0]);

  if (!(estadoPrioritario in ACCIONES)) {
    return {
      accion: 'sin accion',
      motivo: 'el estado detectado no esta reconocido.',
    };
  }

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { evaluarFlujo };