const playlistMusical = [
    { titulo: "Imagine", artista: "John Lennon", duracion: 183 },
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
    { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 233 },
    { titulo: "Yesterday", artista: "The Beatles", duracion: 183 },
    { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 }
];


function analizarSecuenciaPlaylist(playlist) {

    if (!playlist || playlist.length === 0) {
        console.log("No hay canciones registradas.");
        return;
    }

    let sumaDuraciones = 0;
    let duracionesRepetidas = [];

    // Acumulador y análisis de secuencia
    for (let i = 0; i < playlist.length; i++) {

        sumaDuraciones += playlist[i].duracion;

        for (let j = i + 1; j < playlist.length; j++) {

            if (
                playlist[i].duracion === playlist[j].duracion &&
                !duracionesRepetidas.includes(playlist[i].duracion)
            ) {
                duracionesRepetidas.push(playlist[i].duracion);
            }

        }
    }


    let promedioDuracion = sumaDuraciones / playlist.length;


    console.log("----- Análisis de playlist musical -----");

    console.log("Duración total de la playlist:", sumaDuraciones, "segundos");

    console.log(
        "Promedio de duración:",
        promedioDuracion.toFixed(2),
        "segundos"
    );

    console.log(
        "Duraciones repetidas:",
        duracionesRepetidas
    );

}


analizarSecuenciaPlaylist(playlistMusical);