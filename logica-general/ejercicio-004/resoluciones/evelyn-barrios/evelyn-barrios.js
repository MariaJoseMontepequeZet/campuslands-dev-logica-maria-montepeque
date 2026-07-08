// Ejercicio 04: Filtrado y Análisis de Datos de un Equipo

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Analiza el rendimiento de un equipo específico dentro de una lista de jugadores.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @param {string} nombreEquipo - El nombre del equipo a analizar.
 * @returns {object} Un objeto con el reporte del equipo.
 */
function analizarRendimientoEquipo(jugadores, nombreEquipo) {
  // 1. Filtrado: Se seleccionan solo los jugadores que pertenecen al equipo especificado.
  const miembrosDelEquipo = jugadores.filter(jugador => jugador.equipo === nombreEquipo);

  if (miembrosDelEquipo.length === 0) {
    return { error: `No se encontraron jugadores del equipo "${nombreEquipo}".` };
  }

  // 2. Cálculo y Agregación: Se calcula el puntaje de cada miembro y el total del equipo.
  let puntajeTotalEquipo = 0;
  const miembrosConPuntaje = miembrosDelEquipo.map(miembro => {
    const puntaje = calcularPuntaje(miembro.stats);
    puntajeTotalEquipo += puntaje;
    return { ...miembro, puntaje };
  });

  // 3. Búsqueda del MVP: Se ordena la lista de miembros para encontrar al de mayor puntaje.
  miembrosConPuntaje.sort((a, b) => b.puntaje - a.puntaje);
  const mvp = miembrosConPuntaje[0];

  return {
    nombreEquipo,
    puntajeTotal: puntajeTotalEquipo.toFixed(2),
    numeroDeMiembros: miembrosDelEquipo.length,
    mvp: mvp.nombre,
  };
}

// --- ENTRADA: Lista de jugadores con sus equipos ---
const listaJugadores = [
  { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
  { nombre: "Ana", equipo: "Beta", stats: { muertes: 15, asistencias: 10, daño: 4000 } },
  { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
  { nombre: "David", equipo: "Beta", stats: { muertes: 12, asistencias: 8, daño: 4200 } },
  { nombre: "Sofia", equipo: "Alpha", stats: { muertes: 13, asistencias: 5, daño: 4100 } },
];

// --- SALIDA: Se genera y muestra el reporte del equipo "Alpha" ---
const reporteEquipoAlpha = analizarRendimientoEquipo(listaJugadores, "Alpha");
console.log("--- Reporte de Rendimiento del Equipo ---");
console.log(reporteEquipoAlpha);