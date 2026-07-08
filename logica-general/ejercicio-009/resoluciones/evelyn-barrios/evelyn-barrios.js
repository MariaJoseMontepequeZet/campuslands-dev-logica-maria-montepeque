// Ejercicio 09: Manejo de Asincronía con Promesas

// --- Simulación de API ---
// Estas funciones simulan llamadas a una API que tardan un tiempo en responder.
// Devuelven una "Promesa" que se resolverá con los datos después de un retraso.

function fetchRendimiento() {
  console.log("Iniciando descarga de datos de rendimiento...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Datos de rendimiento descargados.");
      resolve([
        { nombre: "Evelyn", equipo: "Alpha", stats: { muertes: 10, asistencias: 15, daño: 3500 } },
        { nombre: "Ana", equipo: "Beta", stats: { muertes: 18, asistencias: 10, daño: 4000 } },
        { nombre: "Carlos", equipo: "Alpha", stats: { muertes: 5, asistencias: 20, daño: 2500 } },
      ]);
    }, 1500); // Simula un retraso de 1.5 segundos
  });
}

function fetchPerfiles() {
  console.log("Iniciando descarga de perfiles de jugadores...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Perfiles descargados.");
      resolve([
        { nombre: "Evelyn", pais: "Colombia", edad: 22 },
        { nombre: "Ana", pais: "México", edad: 25 },
        { nombre: "Carlos", pais: "Colombia", edad: 21 },
      ]);
    }, 1000); // Simula un retraso de 1 segundo
  });
}

/**
 * Genera un reporte completo esperando y fusionando datos de fuentes asíncronas.
 */
async function generarReporteAsincrono() {
  console.log("Solicitando información a las fuentes de datos...");

  // 1. Petición en Paralelo: Se solicitan ambos conjuntos de datos al mismo tiempo.
  //    'Promise.all' espera a que todas las promesas se completen.
  const [listaRendimiento, listaPerfiles] = await Promise.all([
    fetchRendimiento(),
    fetchPerfiles(),
  ]);

  console.log("\nTodas las descargas completadas. Fusionando datos...");

  // 2. Fusión de Datos: Se reutiliza la lógica del ejercicio 07.
  const datosFusionados = listaRendimiento.map(jugadorRendimiento => {
    const perfil = listaPerfiles.find(p => p.nombre === jugadorRendimiento.nombre);
    return {
      nombre: jugadorRendimiento.nombre,
      equipo: jugadorRendimiento.equipo,
      stats: jugadorRendimiento.stats,
      pais: perfil ? perfil.pais : "Desconocido",
      edad: perfil ? perfil.edad : "N/A",
    };
  });

  // 3. Salida: Se muestra el reporte final.
  console.log("\n--- Reporte Completo de Jugadores (Datos Fusionados) ---");
  console.table(datosFusionados);
}

// Se inicia el proceso asíncrono.
generarReporteAsincrono();