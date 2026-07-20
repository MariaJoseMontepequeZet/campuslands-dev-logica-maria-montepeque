// Logica matematica 068 - patrones de puntuacion

const RANGOS_CLASIFICACION = [
  { limite: 25, etiqueta: 'competitivo' },
  { limite: 15, etiqueta: 'intermedio' },
  { limite: -Infinity, etiqueta: 'principiante' },
];

function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

function clasificarPuntaje(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find(({ limite }) => puntajeFinal >= limite);
  return rango.etiqueta;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular la mediana.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.ceil(mediana + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se calculo la mediana de los participantes, se sumo el bono y se resto la penalizacion, redondeando hacia arriba.',
  };
}

module.exports = { calcularPuntajeFinal, calcularMediana, clasificarPuntaje };

const casoNormal = calcularPuntajeFinal([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntajeFinal([], 8, 3);
console.log('Caso borde (sin participantes):', casoBorde);