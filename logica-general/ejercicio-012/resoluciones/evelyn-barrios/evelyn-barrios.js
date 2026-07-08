// Ejercicio 12: Búsqueda y Consulta Dinámica de Datos

/**
 * Busca jugadores en una lista que coincidan con un conjunto de criterios dinámicos.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @param {object} criterios - Un objeto donde las claves son las propiedades a buscar.
 * @returns {Array<object>} Una lista de jugadores que cumplen con todos los criterios.
 */
function buscarJugadores(jugadores, criterios) {
  // 1. Filtrado Dinámico: Se usa 'filter' para recorrer la lista de jugadores.
  return jugadores.filter(jugador => {
    // 2. Verificación de Criterios: Por cada jugador, se comprueba si cumple con TODOS los criterios.
    //    'Object.keys(criterios)' obtiene una lista de las claves a buscar (ej: ['equipo', 'pais']).
    //    '.every()' devuelve true solo si el jugador cumple con todas y cada una de las condiciones.
    return Object.keys(criterios).every(clave => {
      // Si el criterio es sobre las estadísticas (un objeto anidado).
      if (clave === 'stats') {
        return Object.keys(criterios.stats).every(statClave => {
          // Comprueba si la estadística del jugador es mayor o igual al criterio.
          return jugador.stats[statClave] >= criterios.stats[statClave];
        });
      }
      // Si es un criterio normal (ej: equipo, pais).
      return jugador[clave] === criterios[clave];
    });
  });
}

// --- ENTRADA: Lista de jugadores con datos completos ---
const listaJugadores = [
  { nombre: "Evelyn", equipo: "Alpha", pais: "Colombia", stats: { muertes: 10, asistencias: 15 } },
  { nombre: "Ana", equipo: "Beta", pais: "México", stats: { muertes: 18, asistencias: 10 } },
  { nombre: "Carlos", equipo: "Alpha", pais: "Colombia", stats: { muertes: 5, asistencias: 20 } },
  { nombre: "David", equipo: "Beta", pais: "Colombia", stats: { muertes: 12, asistencias: 8 } },
];

// --- BÚSQUEDA 1: Encontrar todos los jugadores de Colombia ---
const jugadoresDeColombia = buscarJugadores(listaJugadores, { pais: "Colombia" });
console.log("--- Búsqueda 1: Jugadores de Colombia ---");
console.table(jugadoresDeColombia);

// --- BÚSQUEDA 2: Encontrar jugadores del equipo "Alpha" que sean de Colombia ---
const jugadoresAlphaDeColombia = buscarJugadores(listaJugadores, {
  equipo: "Alpha",
  pais: "Colombia",
});
console.log("\n--- Búsqueda 2: Jugadores del equipo Alpha de Colombia ---");
console.table(jugadoresAlphaDeColombia);

// --- BÚSQUEDA 3: Encontrar jugadores con más de 15 asistencias ---
const jugadoresTopAsistencias = buscarJugadores(listaJugadores, { stats: { asistencias: 15 } });
console.log("\n--- Búsqueda 3: Jugadores con 15 o más asistencias ---");
console.table(jugadoresTopAsistencias);