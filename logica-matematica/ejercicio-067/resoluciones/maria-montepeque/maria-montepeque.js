// Ejercicio 067 - Logica matematica: secuencias numericas

const RANGOS_CLASIFICACION = [
  { minimo: 30, clasificacion: 'elite' },
  { minimo: 20, clasificacion: 'competitivo' },
  { minimo: 10, clasificacion: 'amateur' },
  { minimo: -Infinity, clasificacion: 'principiante' },
];

function obtenerClasificacion(puntaje) {
  return RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.minimo).clasificacion;
}

function calcularPuntaje(participantes, bono, penalizacion) {
  const promedio = participantes.length === 0
    ? 0
    : participantes.reduce((acumulado, valor) => acumulado + valor, 0) / participantes.length;

  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

module.exports = { calcularPuntaje };

const casoNormal = calcularPuntaje([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntaje([], 5, 2);
console.log('Caso borde:', casoBorde);