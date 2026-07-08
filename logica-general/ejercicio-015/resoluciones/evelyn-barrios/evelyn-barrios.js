// Ejercicio 15: Análisis de Tendencias y Rachas

/**
 * Calcula un puntaje de rendimiento para una sola partida.
 * @param {object} stats - Estadísticas de la partida { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Analiza el historial de partidas de los jugadores para encontrar a los que están en racha.
 * @param {Array<object>} historial - Una lista de partidas, cada una con un jugador y sus stats.
 * @returns {Array<object>} Una lista de jugadores que muestran una tendencia de mejora.
 */
function encontrarJugadoresEnRacha(historial) {
  const jugadores = {};

  // 1. Agrupación: Se agrupan todas las partidas por jugador.
  historial.forEach(partida => {
    if (!jugadores[partida.nombre]) {
      jugadores[partida.nombre] = { nombre: partida.nombre, partidas: [] };
    }
    jugadores[partida.nombre].partidas.push(partida);
  });

  // 2. Análisis de Tendencia: Se analiza la tendencia de cada jugador.
  const jugadoresEnRacha = Object.values(jugadores).filter(jugador => {
    if (jugador.partidas.length < 2) return false; // Se necesitan al menos 2 partidas para ver una tendencia.

    const puntajes = jugador.partidas.map(p => calcularPuntaje(p.stats));
    
    // Una forma simple de ver la tendencia: el último puntaje es mayor que el primero.
    const primerPuntaje = puntajes[0];
    const ultimoPuntaje = puntajes[puntajes.length - 1];

    return ultimoPuntaje > primerPuntaje;
  });

  return jugadoresEnRacha;
}

// --- ENTRADA: Un historial de partidas de varios jugadores ---
const historialDePartidas = [
  { nombre: "Evelyn", stats: { muertes: 10, asistencias: 15, daño: 3500 } }, // Partida 1
  { nombre: "Ana", stats: { muertes: 18, asistencias: 10, daño: 4000 } },    // Partida 1
  { nombre: "Carlos", stats: { muertes: 5, asistencias: 20, daño: 2500 } },  // Partida 1
  { nombre: "Evelyn", stats: { muertes: 12, asistencias: 18, daño: 4000 } }, // Partida 2 (Mejora)
  { nombre: "Ana", stats: { muertes: 15, asistencias: 8, daño: 3500 } },     // Partida 2 (Empeora)
  { nombre: "Carlos", stats: { muertes: 8, asistencias: 22, daño: 2800 } },  // Partida 2 (Mejora)
];

// --- SALIDA: Se encuentran los jugadores con tendencia positiva ---
const jugadoresConRacha = encontrarJugadoresEnRacha(historialDePartidas);
console.log("--- Jugadores en Racha (Rendimiento en Mejora) ---");

jugadoresConRacha.forEach(jugador => {
    console.log(`- ${jugador.nombre}`);
});