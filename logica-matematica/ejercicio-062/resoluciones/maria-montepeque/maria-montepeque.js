// Ejercicio 062 - Logica matematica: porcentajes y proporciones

const RANGOS_CLASIFICACION = [
  { limite: 15, clasificacion: 'bajo rendimiento' },
  { limite: 25, clasificacion: 'en desarrollo' },
  { limite: 35, clasificacion: 'competitivo' },
  { limite: Infinity, clasificacion: 'elite' },
];

function obtenerClasificacion(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntajeFinal < r.limite);
  return rango.clasificacion;
}

function calcularPuntaje(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular un promedio.',
    };
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;
  const puntajeBase = promedio + bono - penalizacion;
  const puntajeFinal = Math.ceil(puntajeBase);
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se promediaron los participantes, se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

module.exports = { calcularPuntaje };

const casoNormal = calcularPuntaje([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntaje([], 5, 2);
console.log('Caso borde (sin participantes):', casoBorde);