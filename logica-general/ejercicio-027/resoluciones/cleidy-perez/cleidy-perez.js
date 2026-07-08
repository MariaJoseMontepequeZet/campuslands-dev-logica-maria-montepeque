const playlistMusical = [
    { titulo: "Imagine", artista: "John Lennon", duracion: 183 },
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
    { titulo: "", artista: "Adele", duracion: 240 },
    { titulo: "Shape of You", artista: "", duracion: 233 },
    { titulo: "Song Unknown", artista: "Artista X", duracion: 0 }
];


function detectarInconsistencias(playlist) {

    if (!playlist || playlist.length === 0) {
        console.log("No hay canciones registradas.");
        return;
    }

    let cantidadErrores = 0;
    let cancionesConError = [];

    for (let i = 0; i < playlist.length; i++) {

        let cancion = playlist[i];
        let error = false;

        if (cancion.titulo === "") {
            error = true;
        }

        if (cancion.artista === "") {
            error = true;
        }

        if (cancion.duracion <= 0) {
            error = true;
        }

        if (error) {
            cantidadErrores++;
            cancionesConError.push(cancion);
        }
    }


    console.log("----- Detección de inconsistencias -----");

    console.log("Cantidad de errores encontrados:", cantidadErrores);

    console.log("Canciones con inconsistencias:");
    console.log(cancionesConError);

}


detectarInconsistencias(playlistMusical);