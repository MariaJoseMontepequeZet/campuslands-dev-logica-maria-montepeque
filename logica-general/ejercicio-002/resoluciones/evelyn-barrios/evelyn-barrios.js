// Ejercicio 02: Calcular y Clasificar Rango de Jugador

// Se definen los rangos y sus puntajes mínimos requeridos, ordenados de mayor a menor.
const RANGOS = [
  { nombre: "Gran Maestro", puntajeMinimo: 200 },
  { nombre: "Maestro", puntajeMinimo: 150 },
  { nombre: "Diamante", puntajeMinimo: 100 },
  { nombre: "Platino", puntajeMinimo: 50 },
];

const RANGO_POR_DEFECTO = "Oro";

/**
 * --- ENTRADAS ---
 * La función recibe un objeto 'estadisticas' con el rendimiento de un jugador.
 * @param {object} estadisticas - Contiene { muertes, asistencias, daño, partidasGanadas }.
 */
function determinarRangoJugador(estadisticas) {
  // --- PROCESO ---
  // 1. Calcular un Puntaje de Rendimiento (PR) basado en las estadísticas.
  // Cada estadística tiene un peso diferente en el cálculo del puntaje.
  const puntaje =
    estadisticas.muertes * 3 +
    estadisticas.asistencias * 2 +
    estadisticas.daño / 1000 +
    estadisticas.partidasGanadas * 10;

  // 2. Clasificar al jugador buscando el primer rango cuyo puntaje mínimo sea alcanzado.
  const rangoAlcanzado = RANGOS.find(rango => puntaje >= rango.puntajeMinimo);

  const nombreRango = rangoAlcanzado ? rangoAlcanzado.nombre : RANGO_POR_DEFECTO;

  // --- SALIDA ---
  return `El jugador tiene un puntaje de ${puntaje.toFixed(2)} y ha alcanzado el rango: ${nombreRango}.`;
}

// Casos de prueba para verificar la lógica.
console.log("--- PRUEBA 1: Jugador con rendimiento alto ---");
console.log(determinarRangoJugador({ muertes: 20, asistencias: 30, daño: 8500, partidasGanadas: 5 }));

console.log("\n--- PRUEBA 2: Jugador con rendimiento promedio ---");
console.log(determinarRangoJugador({ muertes: 5, asistencias: 10, daño: 3000, partidasGanadas: 2 }));

console.log("\n--- PRUEBA 3: Jugador con rendimiento bajo (caso borde) ---");
console.log(determinarRangoJugador({ muertes: 2, asistencias: 5, daño: 1500, partidasGanadas: 0 }));
