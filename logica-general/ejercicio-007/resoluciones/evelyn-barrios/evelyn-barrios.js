// Ejercicio 07: Fusión de Múltiples Fuentes de Datos

/**
 * Enriquece los datos de rendimiento de los jugadores con su información de perfil.
 * @param {Array<object>} jugadoresRendimiento - Lista de jugadores con sus estadísticas de juego.
 * @param {Array<object>} jugadoresPerfil - Lista de jugadores con sus datos de perfil.
 * @returns {Array<object>} Una nueva lista con los datos de los jugadores fusionados.
 */
function fusionarDatosJugadores(jugadoresRendimiento, jugadoresPerfil) {
  // 1. Mapeo y Fusión: Se itera sobre la lista de rendimiento.
  const datosFusionados = jugadoresRendimiento.map(jugadorRendimiento => {
    // 2. Búsqueda: Por cada jugador, se busca su perfil correspondiente en la otra lista.
    const perfil = jugadoresPerfil.find(
      p => p.nombre === jugadorRendimiento.nombre
    );

    // 3. Fusión: Se combinan los datos de ambos objetos.
    // Si se encuentra un perfil, se fusiona; de lo contrario, se usan datos por defecto.
    return {
      nombre: jugadorRendimiento.nombre,
      equipo: jugadorRendimiento.equipo,
      stats: jugadorRendimiento.stats,
      pais: perfil ? perfil.pais : "Desconocido",
      edad: perfil ? perfil.edad : "N/A",
    };
  });

  return datosFusionados;
}

// --- ENTRADA 1: Lista de jugadores con su rendimiento en el torneo ---
const listaRendimiento = [
  { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
  { nombre: "Ana", equipo: "Beta", stats: { muertes: 18, asistencias: 10, daño: 4000 } },
  { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
];

// --- ENTRADA 2: Lista con los perfiles de los jugadores ---
const listaPerfiles = [
  { nombre: "Evelyn", pais: "Colombia", edad: 22 },
  { nombre: "Ana", pais: "México", edad: 25 },
  { nombre: "Carlos", pais: "Colombia", edad: 21 },
];

// --- SALIDA: Se fusionan ambas listas y se muestra el resultado ---
const reporteCompleto = fusionarDatosJugadores(listaRendimiento, listaPerfiles);
console.log("--- Reporte Completo de Jugadores ---");
console.table(reporteCompleto);