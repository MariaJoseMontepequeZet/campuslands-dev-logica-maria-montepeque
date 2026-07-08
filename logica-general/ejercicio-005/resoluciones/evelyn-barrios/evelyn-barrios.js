// Ejercicio 05: Análisis Comparativo entre Grupos

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Encuentra al MVP (Jugador Más Valioso) de todo el torneo.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @returns {object} El jugador que es el MVP del torneo.
 */
function encontrarMvpDelTorneo(jugadores) {
  // 1. Agrupación: Se identifican todos los equipos únicos en la lista.
  const equipos = [...new Set(jugadores.map(jugador => jugador.equipo))];

  // 2. Búsqueda de MVP por equipo: Se encuentra al mejor jugador de cada equipo.
  const mvpsPorEquipo = equipos.map(nombreEquipo => {
    const miembrosDelEquipo = jugadores.filter(jugador => jugador.equipo === nombreEquipo);

    // Se calcula el puntaje de cada miembro para poder compararlos.
    const miembrosConPuntaje = miembrosDelEquipo.map(miembro => ({
      ...miembro,
      puntaje: calcularPuntaje(miembro.stats),
    }));

    // Se ordenan para encontrar al mejor (el primero de la lista).
    miembrosConPuntaje.sort((a, b) => b.puntaje - a.puntaje);
    return miembrosConPuntaje[0];
  });

  // 3. Búsqueda del MVP del Torneo: Se ordena la lista de MVPs para encontrar al mejor de todos.
  mvpsPorEquipo.sort((a, b) => b.puntaje - a.puntaje);
  const mvpDelTorneo = mvpsPorEquipo[0];

  return mvpDelTorneo;
}

// --- ENTRADA: Lista de jugadores con sus equipos ---
const listaJugadores = [
  { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
  { nombre: "Ana", equipo: "Beta", stats: { muertes: 18, asistencias: 10, daño: 4000 } },
  { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
  { nombre: "David", equipo: "Beta", stats: { muertes: 12, asistencias: 8, daño: 4200 } },
  { nombre: "Sofia", equipo: "Alpha", stats: { muertes: 13, asistencias: 5, daño: 4100 } },
  { nombre: "Luis", equipo: "Gamma", stats: { muertes: 20, asistencias: 5, daño: 5000 } },
];

// --- SALIDA: Se encuentra y muestra al MVP del torneo ---
const mvpFinal = encontrarMvpDelTorneo(listaJugadores);
console.log("--- MVP del Torneo ---");
console.log(`El Jugador Más Valioso del torneo es: ${mvpFinal.nombre}`);
console.log("Estadísticas del MVP:");
console.log({
  nombre: mvpFinal.nombre,
  equipo: mvpFinal.equipo,
  puntaje: mvpFinal.puntaje.toFixed(2),
});