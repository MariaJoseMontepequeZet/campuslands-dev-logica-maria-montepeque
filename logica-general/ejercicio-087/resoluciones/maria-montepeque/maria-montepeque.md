// Logica general 087 - deteccion de inconsistencias

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'revisar aprobado',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'la tarea sigue en proceso y requiere seguimiento.',
  aprobado: 'la tarea ya fue validada y no representa riesgo.',
};

function detectarInconsistencia(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin datos',
      motivo: 'no se recibieron items para analizar.',
    };
  }

  const itemMasUrgente = items.reduce((masUrgente, itemActual) => {
    const prioridadActual = PRIORIDADES[itemActual] ?? 0;
    const prioridadMasUrgente = PRIORIDADES[masUrgente] ?? 0;
    return prioridadActual > prioridadMasUrgente ? itemActual : masUrgente;
  }, items[0]);

  if (!(itemMasUrgente in PRIORIDADES)) {
    return {
      accion: 'estado no reconocido',
      motivo: `el valor "${itemMasUrgente}" no forma parte de las reglas definidas.`,
    };
  }

  return {
    accion: ACCIONES[itemMasUrgente],
    motivo: MOTIVOS[itemMasUrgente],
  };
}

const casoNormal = detectarInconsistencia(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = detectarInconsistencia([]);
console.log('Caso borde (arreglo vacio):', casoBorde);

const casoValorInvalido = detectarInconsistencia(['aprobado', 'desconocido']);
console.log('Caso valor no reconocido:', casoValorInvalido);

module.exports = { detectarInconsistencia };