// Ejercicio 10: Asincronía con Manejo de Errores

// --- Simulación de API que puede devolver datos con errores ---

function fetchRendimientoConErrores() {
  console.log("Iniciando descarga de datos de rendimiento...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Datos de rendimiento descargados.");
      resolve([
        { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
        { nombre: "Ana", equipo: "Beta" }, // Error: sin 'stats'
        { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
      ]);
    }, 1500);
  });
}

function fetchPerfilesConErrores() {
  console.log("Iniciando descarga de perfiles de jugadores...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Perfiles descargados.");
      resolve([
        { nombre: "Evelyn", pais: "Colombia", edad: 22 },
        { pais: "México", edad: 25 }, // Error: sin 'nombre'
        { nombre: "Carlos", pais: "Colombia", edad: 21 },
      ]);
    }, 1000);
  });
}

/**
 * Genera un reporte completo, manejando asincronía y validando los datos recibidos.
 */
async function generarReporteAsincronoConValidacion() {
  console.log("Solicitando información a las fuentes de datos...");
  const errores = [];

  // 1. Petición en Paralelo: Se solicitan ambos conjuntos de datos.
  const [listaRendimiento, listaPerfiles] = await Promise.all([
    fetchRendimientoConErrores(),
    fetchPerfilesConErrores(),
  ]);

  console.log("\nDescargas completadas. Validando y fusionando datos...");

  // 2. Validación y Fusión de Datos.
  const datosFusionados = listaRendimiento
    .map(jugadorRendimiento => {
      // Se valida el dato de rendimiento.
      if (!jugadorRendimiento.nombre || !jugadorRendimiento.stats) {
        errores.push({ mensaje: "Dato de rendimiento inválido", datos: jugadorRendimiento });
        return null;
      }

      const perfil = listaPerfiles.find(p => p.nombre === jugadorRendimiento.nombre);
      // Se valida que el perfil exista.
      if (!perfil) {
        errores.push({ mensaje: `No se encontró perfil para ${jugadorRendimiento.nombre}`, datos: jugadorRendimiento });
        return null;
      }

      return { ...jugadorRendimiento, ...perfil };
    })
    .filter(jugador => jugador !== null); // Se eliminan los nulos (errores).

  // 3. Salida: Se muestra el reporte final y los errores.
  console.log("\n--- Reporte de Jugadores Válidos ---");
  console.table(datosFusionados);

  console.log("\n--- Errores Encontrados ---");
  console.log(errores);
}

// Se inicia el proceso asíncrono.
generarReporteAsincronoConValidacion();