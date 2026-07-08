// Ejercicio 16: Simulación de Eventos

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Simula una partida entre dos equipos y determina un ganador.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @param {string} nombreEquipoA - El nombre del primer equipo.
 * @param {string} nombreEquipoB - El nombre del segundo equipo.
 * @returns {object} Un reporte detallado de la partida.
 */
function simularPartida(jugadores, nombreEquipoA, nombreEquipoB) {
  // 1. Selección de Equipos: Se filtran los jugadores para cada equipo.
  const equipoA = jugadores.filter(j => j.equipo === nombreEquipoA);
  const equipoB = jugadores.filter(j => j.equipo === nombreEquipoB);

  if (equipoA.length === 0 || equipoB.length === 0) {
    return { error: "Uno o ambos equipos no tienen jugadores." };
  }

  // 2. Cálculo de Poder de Equipo: Se suma el puntaje de cada miembro.
  const poderEquipoA = equipoA.reduce((total, j) => total + calcularPuntaje(j.stats), 0);
  const poderEquipoB = equipoB.reduce((total, j) => total + calcularPuntaje(j.stats), 0);

  // 3. Simulación con Factor Suerte: Se añade un pequeño factor aleatorio.
  const suerteA = Math.random() * 10; // Un valor aleatorio entre 0 y 10
  const suerteB = Math.random() * 10;

  const puntajeFinalA = poderEquipoA + suerteA;
  const puntajeFinalB = poderEquipoB + suerteB;

  // 4. Determinación del Ganador
  let ganador;
  if (puntajeFinalA > puntajeFinalB) {
    ganador = nombreEquipoA;
  } else if (puntajeFinalB > puntajeFinalA) {
    ganador = nombreEquipoB;
  } else {
    ganador = "Empate";
  }

  return {
    resumen: `Partida: ${nombreEquipoA} vs ${nombreEquipoB}`,
    ganador,
    puntajes: {
      [nombreEquipoA]: puntajeFinalA.toFixed(2),
      [nombreEquipoB]: puntajeFinalB.toFixed(2),
    },
  };
}

// --- ENTRADA: Lista de jugadores y los equipos a enfrentar ---
const listaJugadores = [
  { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
  { nombre: "Ana", equipo: "Beta", stats: { muertes: 18, asistencias: 10, daño: 4000 } },
  { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
  { nombre: "David", equipo: "Beta", stats: { muertes: 12, asistencias: 8, daño: 4200 } },
];

// --- SALIDA: Se simula la partida y se muestra el resultado ---
const resultadoPartida = simularPartida(listaJugadores, "Alpha", "Beta");
console.log("--- Resultado de la Simulación de Partida ---");
console.log(resultadoPartida);