function validarPlaylist(cancion, duracion, esRepetida) {
    if (duracion <= 0) {
        return { estado: "Error", motivo: "La duración de la canción no puede ser 0 o negativa." };
    }    
    if (esRepetida) {
        return { estado: "Inconsistente", motivo: `La canción ${cancion} ya existe en la lista.` };
    }
    return { estado: "OK", motivo: "Canción validada correctamente." };
}

console.log(validarPlaylist("Bohemian Rhapsody", 354, false));
console.log(validarPlaylist("Stairway to Heaven", -10, false));