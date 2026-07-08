// Ejercicio 27 - Playlist Musical

function detectarInconsistencia(cancion) {
    let estado = "";
    let detalle = "";

    if (!cancion.titulo || !cancion.artista) {
        estado = "inconsistente";
        detalle = "Faltan metadatos esenciales (título o artista vacíos).";
    }
    else if (cancion.duracionSegundos <= 0 || typeof cancion.duracionSegundos !== "number") {
        estado = "inconsistente";
        detalle = "La duración de la pista es inválida o el archivo de audio está corrupto.";
    }
    else {
        estado = "valida";
        detalle = "La canción pasó las validaciones y puede añadirse a la playlist.";
    }

    return { estado, detalle };
}

// Pruebas

console.log("--- Prueba: Caso Normal (Canción válida) ---");
console.log(detectarInconsistencia({ 
    titulo: "Wicked Game", 
    artista: "Chris Isaak", 
    duracionSegundos: 286 
}));

console.log("\n--- Prueba: Caso Borde (Archivo corrupto / duración 0) ---");
console.log(detectarInconsistencia({ 
    titulo: "Las piedras rodantes", 
    artista: "El Tri", 
    duracionSegundos: 0 
}));

console.log("\n--- Prueba: Caso Borde (Metadato faltante) ---");
console.log(detectarInconsistencia({ 
    titulo: "", 
    artista: "Artista Desconocido", 
    duracionSegundos: 180 
}));