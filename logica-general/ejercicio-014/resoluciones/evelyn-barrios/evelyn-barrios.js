// Ejercicio 14: Combinación de Búsqueda y Paginación

/**
 * Filtra y pagina una lista de jugadores.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @param {object} opciones - Opciones de búsqueda y paginación.
 * @param {object} [opciones.criterios] - Criterios de búsqueda (como en el ejercicio 12).
 * @param {number} opciones.pagina - El número de página a devolver.
 * @param {number} opciones.itemsPorPagina - El número de jugadores por página.
 * @returns {object} Un objeto con los datos paginados de la búsqueda.
 */
function buscarYPAGinar(jugadores, opciones) {
  const { criterios, pagina, itemsPorPagina } = opciones;

  // 1. Filtrado: Se aplica la búsqueda primero.
  let resultadosFiltrados = jugadores;
  if (criterios && Object.keys(criterios).length > 0) {
    resultadosFiltrados = jugadores.filter(jugador => {
      return Object.keys(criterios).every(clave => {
        return jugador[clave] === criterios[clave];
      });
    });
  }

  // 2. Paginación: Se pagina sobre los resultados ya filtrados.
  const inicio = (pagina - 1) * itemsPorPagina;
  const fin = inicio + itemsPorPagina;
  const jugadoresEnPagina = resultadosFiltrados.slice(inicio, fin);

  return {
    paginaActual: pagina,
    itemsPorPagina: itemsPorPagina,
    totalResultados: resultadosFiltrados.length,
    totalPaginas: Math.ceil(resultadosFiltrados.length / itemsPorPagina),
    datos: jugadoresEnPagina,
  };
}

// --- ENTRADA: Una lista grande de jugadores ---
const listaLargaJugadores = [
  { nombre: "Evelyn", equipo: "Alpha", pais: "Colombia" },
  { nombre: "Ana", equipo: "Beta", pais: "México" },
  { nombre: "Carlos", equipo: "Alpha", pais: "Colombia" },
  { nombre: "David", equipo: "Beta", pais: "Colombia" },
  { nombre: "Sofia", equipo: "Alpha", pais: "Argentina" },
  { nombre: "Luis", equipo: "Gamma", pais: "Colombia" },
  { nombre: "Maria", equipo: "Beta", pais: "México" },
  { nombre: "Juan", equipo: "Gamma", pais: "Argentina" },
  { nombre: "Laura", equipo: "Alpha", pais: "Colombia" },
  { nombre: "Pedro", equipo: "Beta", pais: "México" },
];

// --- EJEMPLO: Buscar todos los jugadores de Colombia y mostrar la página 1 (3 por página) ---
const busquedaPaginada = buscarYPAGinar(listaLargaJugadores, {
  criterios: { pais: "Colombia" },
  pagina: 1,
  itemsPorPagina: 3,
});
console.log("--- Búsqueda: Jugadores de Colombia (Página 1) ---");
console.log(busquedaPaginada);

// --- EJEMPLO 2: Misma búsqueda, pero la página 2 ---
const busquedaPaginada2 = buscarYPAGinar(listaLargaJugadores, {
  criterios: { pais: "Colombia" },
  pagina: 2,
  itemsPorPagina: 3,
});
console.log("\n--- Búsqueda: Jugadores de Colombia (Página 2) ---");
console.log(busquedaPaginada2);