// Ejercicio 13: Paginación de Datos

/**
 * Pagina una lista de jugadores, permitiendo ordenar los resultados.
 * @param {Array<object>} jugadores - La lista completa de jugadores.
 * @param {object} opciones - Opciones de paginación y ordenamiento.
 * @param {number} opciones.pagina - El número de página a devolver (empezando en 1).
 * @param {number} opciones.itemsPorPagina - El número de jugadores por página.
 * @param {string} [opciones.ordenarPor] - La clave por la que se deben ordenar los datos (ej: 'nombre').
 * @returns {object} Un objeto con los datos de la página y metadatos de paginación.
 */
function paginarResultados(jugadores, opciones) {
  const { pagina, itemsPorPagina, ordenarPor } = opciones;
  let datosOrdenados = [...jugadores];

  // 1. Ordenamiento (Opcional): Si se especifica una clave, se ordena la lista.
  if (ordenarPor) {
    datosOrdenados.sort((a, b) => {
      if (a[ordenarPor] < b[ordenarPor]) return -1;
      if (a[ordenarPor] > b[ordenarPor]) return 1;
      return 0;
    });
  }

  // 2. Cálculo de Paginación: Se determinan los índices para "cortar" la lista.
  const inicio = (pagina - 1) * itemsPorPagina;
  const fin = inicio + itemsPorPagina;

  // 3. "Corte" de la Página: Se usa 'slice' para obtener solo los jugadores de la página actual.
  const jugadoresEnPagina = datosOrdenados.slice(inicio, fin);

  return {
    paginaActual: pagina,
    itemsPorPagina: itemsPorPagina,
    totalJugadores: jugadores.length,
    totalPaginas: Math.ceil(jugadores.length / itemsPorPagina),
    datos: jugadoresEnPagina,
  };
}

// --- ENTRADA: Una lista más grande de jugadores ---
const listaLargaJugadores = [
  { nombre: "Evelyn", equipo: "Alpha" }, { nombre: "Ana", equipo: "Beta" },
  { nombre: "Carlos", equipo: "Alpha" }, { nombre: "David", equipo: "Beta" },
  { nombre: "Sofia", equipo: "Alpha" }, { nombre: "Luis", equipo: "Gamma" },
  { nombre: "Maria", equipo: "Beta" }, { nombre: "Juan", equipo: "Gamma" },
  { nombre: "Laura", equipo: "Alpha" }, { nombre: "Pedro", equipo: "Beta" },
];

// --- EJEMPLO 1: Obtener la primera página, 4 jugadores por página, ordenados por nombre ---
const pagina1 = paginarResultados(listaLargaJugadores, {
  pagina: 1,
  itemsPorPagina: 4,
  ordenarPor: 'nombre'
});
console.log("--- Página 1 (4 items, ordenados por nombre) ---");
console.log(pagina1);

// --- EJEMPLO 2: Obtener la tercera página ---
const pagina3 = paginarResultados(listaLargaJugadores, { pagina: 3, itemsPorPagina: 4, ordenarPor: 'nombre' });
console.log("\n--- Página 3 (4 items, ordenados por nombre) ---");
console.log(pagina3);