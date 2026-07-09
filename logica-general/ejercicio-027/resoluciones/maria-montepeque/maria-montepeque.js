//Analizador de Playlist Musical

const analizarPlaylist = (playlist) => {
    // 1. Validación de entrada
    if (!Array.isArray(playlist) || playlist.length === 0) {
        return { error: "La playlist está vacía o no es válida." };
    }

    const inconsistencias = [];

    // 2. Proceso de validación
    playlist.forEach((cancion, index) => {
        if (!cancion.titulo || cancion.titulo.trim() === "") {
            inconsistencias.push(`Índice ${index}: Título vacío.`);
        }
        if (typeof cancion.duracion !== 'number' || cancion.duracion <= 0) {
            inconsistencias.push(`Índice ${index}: Duración inválida (${cancion.titulo || 'Sin nombre'}).`);
        }
    });

    // 3. Salida
    return {
        totalAnalizado: playlist.length,
        inconsistenciasEncontradas: inconsistencias.length,
        reporte: inconsistencias.length > 0 ? inconsistencias : "Sin inconsistencias."
    };
};

const miPlaylist = [
    { titulo: "Bohemian Rhapsody", duracion: 354 },
    { titulo: "", duracion: 200 },
    { titulo: "Invalid Song", duracion: -10 }
];

console.log(analizarPlaylist(miPlaylist));