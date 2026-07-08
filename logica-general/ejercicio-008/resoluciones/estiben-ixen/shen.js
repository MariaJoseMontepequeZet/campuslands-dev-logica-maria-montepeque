/**
 * Procesa el flujo de clasificación para una película.
 */
function clasificarPelicula(pelicula) {
    // Paso 1: Filtro de Calidad
    if (pelicula.rating < 7.5) {
        return { titulo: pelicula.titulo, estado: "RECHAZADA", razon: "Rating insuficiente" };
    }

    // Paso 2: Filtro de Subgénero
    const generosValidos = ["Cyberpunk", "Space Opera", "Distopía"];
    if (!generosValidos.includes(pelicula.subgenero)) {
        return { titulo: pelicula.titulo, estado: "RECHAZADA", razon: "Subgénero no apto para el culto" };
    }

    // Paso 3: Filtro de Lanzamiento (Año)
    if (pelicula.anio < 2000) {
        return { titulo: pelicula.titulo, estado: "RECHAZADA", razon: "Clásica antigua (fuera de rango)" };
    }

    // Si supera todos los pasos
    return { titulo: pelicula.titulo, estado: "APROBADA", razon: "Selección de culto moderna" };
}

// --- Dataset ---
const biblioteca = [
    { titulo: "Blade Runner 2049", rating: 8.0, subgenero: "Cyberpunk", anio: 2017 },
    { titulo: "The Matrix", rating: 8.7, subgenero: "Cyberpunk", anio: 1999 }, // Caso borde
    { titulo: "Sharknado Sci-Fi", rating: 3.0, subgenero: "Distopía", anio: 2013 } // Caso borde
];

// --- Ejecución ---
console.log("--- Procesando flujo de Sci-Fi ---");
biblioteca.forEach(p => console.log(clasificarPelicula(p)));