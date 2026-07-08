
function validarCancion(cancion) {
    // Regla 1: Duración negativa
    if (cancion.duracion <= 0) {
        return { estado: "inconsistente", motivo: "La duración debe ser un número positivo." };
    }
    // Regla 2: Artista o título vacío
    if (!cancion.artista || !cancion.titulo) {
        return { estado: "inconsistente", motivo: "El artista y título son obligatorios." };
    }
    // Regla 3: Formato de audio inválido
    const formatosValidos = ["mp3", "wav", "flac"];
    if (!formatosValidos.includes(cancion.formato.toLowerCase())) {
        return { estado: "inconsistente", motivo: "Formato de audio no soportado." };
    }

    return { estado: "valido", motivo: "La canción cumple con todos los requisitos." };
}

// Pruebas
console.log(validarCancion({titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354, formato: "mp3"}));
console.log(validarCancion({titulo: "", artista: "Queen", duracion: 300, formato: "mp3"}));