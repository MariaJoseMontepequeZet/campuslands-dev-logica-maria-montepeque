// Ejercicio 06: Reestructuración y Agrupación de Datos

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Reestructura una lista de jugadores en un objeto agrupado por equipo y calcula estadísticas.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @returns {object} Un objeto con los equipos como claves y sus datos como valores.
 */
function analizarYAgruparTorneo(jugadores) {
  // 1. Agrupación y Cálculo: Se usa 'reduce' para transformar la lista en un objeto de equipos.
  const equiposAgrupados = jugadores.reduce((acumulador, jugador) => {
    const equipo = jugador.equipo;

    // Si el equipo no existe en el acumulador, se inicializa.
    if (!acumulador[equipo]) {
      acumulador[equipo] = {
        miembros: [],
        puntajeTotal: 0,
      };
    }

    // Se calcula el puntaje del jugador y se añade a la estructura.
    const puntajeJugador = calcularPuntaje(jugador.stats);
    acumulador[equipo].miembros.push({ ...jugador, puntaje: puntajeJugador.toFixed(2) });
    acumulador[equipo].puntajeTotal += puntajeJugador;

    return acumulador;
  }, {});

  return equiposAgrupados;
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

// --- SALIDA: Se genera y muestra el resumen del torneo agrupado por equipos ---
const resumenDelTorneo = analizarYAgruparTorneo(listaJugadores);
console.log("--- Resumen del Torneo por Equipos ---");
console.log(JSON.stringify(resumenDelTorneo, null, 2));