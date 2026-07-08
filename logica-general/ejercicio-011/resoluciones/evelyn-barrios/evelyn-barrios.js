// Ejercicio 11: Análisis Estadístico Agregado

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Genera un reporte con estadísticas agregadas de todo el torneo.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @returns {object} Un objeto con las estadísticas del torneo.
 */
function generarEstadisticasDelTorneo(jugadores) {
  // 1. Agregación con 'reduce': Se calcula todo en una sola pasada.
  const estadisticasIniciales = {
    puntajeTotal: 0,
    topKills: { nombre: null, cantidad: 0 },
    topAsistencias: { nombre: null, cantidad: 0 },
    danoTotal: 0,
  };

  const resumen = jugadores.reduce((acc, jugador) => {
    const puntaje = calcularPuntaje(jugador.stats);

    // Suma de totales
    acc.puntajeTotal += puntaje;
    acc.danoTotal += jugador.stats.daño;

    // Búsqueda de máximos (Top Kills)
    if (jugador.stats.muertes > acc.topKills.cantidad) {
      acc.topKills = { nombre: jugador.nombre, cantidad: jugador.stats.muertes };
    }

    // Búsqueda de máximos (Top Asistencias)
    if (jugador.stats.asistencias > acc.topAsistencias.cantidad) {
      acc.topAsistencias = { nombre: jugador.nombre, cantidad: jugador.stats.asistencias };
    }

    return acc;
  }, estadisticasIniciales);

  // 2. Cálculo de promedios y formato final.
  return {
    numeroJugadores: jugadores.length,
    puntajePromedio: (resumen.puntajeTotal / jugadores.length).toFixed(2),
    jugadorConMasMuertes: resumen.topKills,
    jugadorConMasAsistencias: resumen.topAsistencias,
    danoTotalDelTorneo: resumen.danoTotal,
  };
}

// --- ENTRADA: Lista de jugadores del torneo ---
const listaJugadores = [
  { nombre: "Evelyn", stats: { muertes: 10, asistencias: 25, daño: 3500 } },
  { nombre: "Ana", stats: { muertes: 18, asistencias: 10, daño: 4000 } },
  { nombre: "Carlos", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
  { nombre: "David", stats: { muertes: 22, asistencias: 8, daño: 4200 } },
];

// --- SALIDA: Se generan y muestran las estadísticas del torneo ---
const estadisticasFinales = generarEstadisticasDelTorneo(listaJugadores);
console.log("--- Estadísticas Generales del Torneo ---");
console.log(estadisticasFinales);