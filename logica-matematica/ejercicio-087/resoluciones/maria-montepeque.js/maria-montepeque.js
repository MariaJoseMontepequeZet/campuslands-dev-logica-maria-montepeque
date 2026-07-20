// Logica matematica 087 - secuencias numericas

const CLASIFICACIONES = [
  { limite: 15, nombre: 'bajo' },
  { limite: 25, nombre: 'regular' },
  { limite: 35, nombre: 'competitivo' },
  { limite: Infinity, nombre: 'elite' },
];

const calcularPromedio = (participantes) =>
  participantes.reduce((acumulado, valor) => acumulado + valor, 0) / participantes.length;

const clasificarPuntaje = (puntaje) =>
  CLASIFICACIONES.find(({ limite }) => puntaje <= limite).nombre;

const calcularPuntajeFinal = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
};

const casoNormal = {
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
};

const casoBorde = {
  participantes: [],
  bono: 5,
  penalizacion: 2,
};

console.log('Caso normal:', calcularPuntajeFinal(casoNormal));
console.log('Caso borde:', calcularPuntajeFinal(casoBorde));

module.exports = { calcularPuntajeFinal };