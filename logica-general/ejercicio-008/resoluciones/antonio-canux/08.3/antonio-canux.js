// Ejercicio 08 - Películas de Ciencia Ficción

function procesarPeliculaExplorer(pelicula) {
    let estadoProceso = "";
    let datosRender = null;

    if (pelicula.idGenero !== 878) {
        estadoProceso = "Rechazada en Paso 1: La película no pertenece al género de ciencia ficción.";
        return { estado: estadoProceso, datos: datosRender };
    }

    if (!pelicula.rutaPoster || pelicula.rutaPoster === "") {
        estadoProceso = "Rechazada en Paso 2: El registro no cuenta con un póster válido para la interfaz.";
        return { estado: estadoProceso, datos: datosRender };
    }

    estadoProceso = "Aprobada: Flujo completado. Película lista para renderizar.";
    datosRender = {
        tituloMostrado: pelicula.titulo.toUpperCase(),
        imagenUrl: "https://image.tmdb.org/t/p/w500" + pelicula.rutaPoster,
        lanzamiento: pelicula.anio
    };

    return { estado: estadoProceso, datos: datosRender };
}

//Pruebas

console.log("--- Prueba: Caso Normal (Flujo completo exitoso) ---");
console.log(procesarPeliculaExplorer({ 
    titulo: "Interstellar", 
    idGenero: 878, 
    rutaPoster: "/gEU2QlsUUHXjNpevd8AsuZeC8M.jpg",
    anio: 2014
}));

console.log("\n--- Prueba: Caso Borde (Fallo en Paso 1 - Género incorrecto) ---");
console.log(procesarPeliculaExplorer({ 
    titulo: "Gladiator", 
    idGenero: 28, // Acción
    rutaPoster: "/ty8TGRuvJLPUmAR1H1nRIsgwvq0.jpg",
    anio: 2000
}));

console.log("\n--- Prueba: Caso Borde (Fallo en Paso 2 - Sin póster) ---");
console.log(procesarPeliculaExplorer({ 
    titulo: "Proyecto Sci-Fi Desconocido", 
    idGenero: 878, 
    rutaPoster: "",
    anio: 2026
}));