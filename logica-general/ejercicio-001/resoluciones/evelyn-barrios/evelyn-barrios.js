// Las reglas de recompensa se definen como una lista ordenada por prioridad.
// Cada regla tiene un nombre y una condición que debe cumplir el jugador.
const REGLAS_RECOMPENSA = [
  {
    nombre: "Caja Mítica",
    condicion: (stats) => stats.muertes > 10 && stats.danoInfligido > 4000,
  },
  {
    nombre: "Caja Épica",
    condicion: (stats) => stats.muertes > 5 || stats.asistencias > 15,
  },
  {
    nombre: "Caja Rara",
    condicion: (stats) => stats.danoInfligido > 2000,
  },
];

const RECOMPENSA_POR_DEFECTO = "Caja Común";

/**
 * Determina la recompensa de un jugador iterando a través de un conjunto de reglas
 * predefinidas hasta encontrar la primera que se cumpla.
 * @param {object} rendimiento - Objeto con las estadísticas: { muertes, asistencias, danoInfligido }.
 * @returns {string} Un mensaje indicando la recompensa ganada.
 */
function determinarRecompensa(rendimiento) {
  // Busca la primera regla que coincida con el rendimiento del jugador.
  const reglaCumplida = REGLAS_RECOMPENSA.find(regla => regla.condicion(rendimiento));

  const nombreRecompensa = reglaCumplida ? reglaCumplida.nombre : RECOMPENSA_POR_DEFECTO;

  return `El jugador ha ganado una ${nombreRecompensa}.`;
}

// Casos de prueba para verificar la lógica.
console.log("--- PRUEBA 1: Jugador con rendimiento excepcional ---");
console.log(determinarRecompensa({ muertes: 12, asistencias: 5, danoInfligido: 5500 }));

console.log("\n--- PRUEBA 2: Jugador con rendimiento básico ---");
console.log(determinarRecompensa({ muertes: 2, asistencias: 3, danoInfligido: 1500 }));