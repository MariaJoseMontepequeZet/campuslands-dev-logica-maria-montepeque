// Ejercicio 08: Validación de Datos y Manejo de Errores

/**
 * Calcula un puntaje de rendimiento para un solo jugador.
 * @param {object} stats - Estadísticas del jugador { muertes, asistencias, daño }.
 * @returns {number} El puntaje de rendimiento calculado.
 */
function calcularPuntaje(stats) {
  return stats.muertes * 3 + stats.asistencias * 2 + stats.daño / 1000;
}

/**
 * Procesa una lista de jugadores, validando los datos y manejando errores.
 * @param {Array<object>} jugadores - La lista de jugadores a procesar.
 * @returns {object} Un reporte con los jugadores válidos procesados y los errores encontrados.
 */
function procesarListaConValidacion(jugadores) {
  const jugadoresProcesados = [];
  const errores = [];

  // 1. Iteración y Validación: Se recorre la lista de jugadores.
  for (const jugador of jugadores) {
    // 2. Verificación: Se comprueba que el jugador tenga nombre y estadísticas válidas.
    if (!jugador.nombre || !jugador.stats || typeof jugador.stats.muertes !== 'number') {
      errores.push({
        mensaje: "Datos inválidos o incompletos",
        datos: jugador,
      });
      continue; // Se salta al siguiente jugador.
    }

    // 3. Procesamiento: Si el jugador es válido, se calcula su puntaje.
    const puntaje = calcularPuntaje(jugador.stats);
    jugadoresProcesados.push({ ...jugador, puntaje: puntaje.toFixed(2) });
  }

  return {
    reporte: jugadoresProcesados,
    erroresEncontrados: errores,
  };
}

// --- ENTRADA: Una lista de jugadores con datos correctos e incorrectos ---
const listaJugadoresMixta = [
  { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
  { nombre: "Ana", equipo: "Beta" }, // Error: sin 'stats'
  { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
  { equipo: "Gamma", stats: { muertes: 12, asistencias: 8, daño: 4200 } }, // Error: sin 'nombre'
  { nombre: "Sofia", equipo: "Alpha", stats: { muertes: "trece", asistencias: 5, daño: 4100 } }, // Error: 'muertes' no es un número
];

// --- SALIDA: Se procesa la lista y se muestra el reporte final ---
const resultadoProcesamiento = procesarListaConValidacion(listaJugadoresMixta);
console.log("--- Reporte de Jugadores Válidos ---");
console.table(resultadoProcesamiento.reporte);

console.log("\n--- Errores Encontrados durante el Procesamiento ---");
console.log(resultadoProcesamiento.erroresEncontrados);