// Ejercicio 054 - Diagnostico de errores

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueados, se revisa lo pendiente antes de lo aprobado.',
  aprobado: 'todos los items estan aprobados, no hay riesgos pendientes.',
};

function diagnosticarErrores(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no se recibieron items para evaluar.',
    };
  }

  const itemPrioritario = items.reduce((masPrioritario, actual) => {
    const prioridadActual = PRIORIDAD[actual] ?? Number.MAX_SAFE_INTEGER;
    const prioridadAcumulada = PRIORIDAD[masPrioritario] ?? Number.MAX_SAFE_INTEGER;
    return prioridadActual < prioridadAcumulada ? actual : masPrioritario;
  });

  return {
    accion: `revisar ${itemPrioritario}`,
    motivo: MOTIVOS[itemPrioritario] ?? `estado "${itemPrioritario}" no reconocido, se revisa por seguridad.`,
  };
}

// Caso normal (ejemplo del README)
console.log(diagnosticarErrores(['aprobado', 'pendiente', 'bloqueado']));

// Caso borde: lista vacia
console.log(diagnosticarErrores([]));

// Caso adicional: todos aprobados
console.log(diagnosticarErrores(['aprobado', 'aprobado']));

module.exports = { diagnosticarErrores };