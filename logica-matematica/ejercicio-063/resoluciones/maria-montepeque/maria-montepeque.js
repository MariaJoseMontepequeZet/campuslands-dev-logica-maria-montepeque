// Ejercicio 063 - Logica matematica: promedios y medianas

const UMBRALES_CLASIFICACION = [
  { minimo: 30, etiqueta: 'elite' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'intermedio' },
  { minimo: -Infinity, etiqueta: 'principiante' },
];

const calcularPromedio = (participantes) => {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
};

const calcularMediana = (participantes) => {
  if (participantes.length === 0) return 0;
  const ordenados = [...participantes].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
};

const clasificarPuntaje = (puntaje) =>
  UMBRALES_CLASIFICACION.find((rango) => puntaje >= rango.minimo).etiqueta;

const calcularPuntajeTorneo = ({ participantes, bono, penalizacion }) => {
  const promedio = calcularPromedio(participantes);
  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
    promedio,
    mediana,
  };
};

module.exports = { calcularPuntajeTorneo, calcularPromedio, calcularMediana, clasificarPuntaje };

if (require.main === module) {
  const casoNormal = { participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 };
  console.log('Caso normal:', calcularPuntajeTorneo(casoNormal));

  const casoBorde = { participantes: [], bono: 5, penalizacion: 2 };
  console.log('Caso borde:', calcularPuntajeTorneo(casoBorde));
}