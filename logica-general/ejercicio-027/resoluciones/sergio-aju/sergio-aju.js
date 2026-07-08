const miPlaylist = [
    { titulo: "Bohemian Rhapsody", duracion: 354 },
    { titulo: "Stairway to Heaven", duracion: 482 },
    { titulo: "Bohemian Rhapsody", duracion: 354 }, // Inconsistencia: Duplicado
    { titulo: "Short Song", duracion: 10 }           // Inconsistencia: Demasiado corta
];

function detectarInconsistencias(lista) {
    let errores = [];
    let vistos = new Set();

    lista.forEach((cancion, index) => {
        // Regla 1: Detectar duplicados
        if (vistos.has(cancion.titulo)) {
            errores.push(`Posición ${index}: La canción '${cancion.titulo}' está duplicada.`);
        }
        vistos.add(cancion.titulo);

        // Regla 2: Detectar duración ilógica (menos de 30 segundos)
        if (cancion.duracion < 30) {
            errores.push(`Posición ${index}: La canción '${cancion.titulo}' es demasiado corta.`);
        }
    });

    return errores.length === 0 
        ? { estado: "OK", mensaje: "Playlist válida." } 
        : { estado: "Error", detalles: errores };
}

// Pruebas
console.log("Resultado Validación:", detectarInconsistencias(miPlaylist));