// Ejercicio 03: Procesamiento y Ranking de una Lista de Jugadores

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * Esta función encapsula la lógica de cálculo del ejercicio anterior.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Procesa una lista de jugadores para generar un leaderboard ordenado.
 * @param {Array<object>} jugadores - Una lista de objetos, donde cada objeto representa a un jugador.
 * @returns {Array<object>} La lista de jugadores ordenada con su puntaje y rango.
 */
function generarLeaderboard(jugadores) {
  // 1. Mapeo y Cálculo: Se calcula el puntaje para cada jugador.
  const jugadoresConPuntaje = jugadores.map(jugador => ({
    ...jugador,
    puntaje: calcularPuntaje(jugador.stats),
  }));

  // 2. Ordenamiento: Se ordena la lista de jugadores por puntaje en orden descendente.
  jugadoresConPuntaje.sort((a, b) => b.puntaje - a.puntaje);

  // 3. Asignación de Rango: Se asigna el rango final basado en la posición en la lista ordenada.
  const leaderboard = jugadoresConPuntaje.map((jugador, index) => ({
    ...jugador,
    rango: index + 1,
  }));

  return leaderboard;
}

// --- ENTRADA: Lista de jugadores del torneo ---
const listaJugadores = [
  { nombre: "Evelyn", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
  { nombre: "Ana", stats: { muertes: 15, asistencias: 10, daño: 4000 } },
  { nombre: "Carlos", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
  { nombre: "David", stats: { muertes: 12, asistencias: 8, daño: 4200 } },
];

// --- SALIDA: Se genera y muestra el leaderboard final ---
const leaderboardFinal = generarLeaderboard(listaJugadores);
console.log("--- Leaderboard Final del Torneo ---");
console.table(leaderboardFinal);