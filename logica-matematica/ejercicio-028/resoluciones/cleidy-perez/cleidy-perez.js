const peliculasCienciaFiccion = [
    { titulo: "Interstellar", puntuacion: 9.0 },
    { titulo: "The Matrix", puntuacion: 8.7 },
    { titulo: "Avatar", puntuacion: 7.9 },
    { titulo: "Gravity", puntuacion: 7.5 },
    { titulo: "Dune", puntuacion: 8.4 }
];

function patronesDePuntuacion(peliculas) {

    if (!peliculas || peliculas.length === 0) {
        console.log("No hay películas registradas.");
        return;
    }

    let cantidadAlta = 0;

    console.log("----- Patrones de puntuación -----");

    for (let i = 0; i < peliculas.length; i++) {

        if (peliculas[i].puntuacion >= 8.5) {
            console.log(peliculas[i].titulo + ": Puntuación alta");
            cantidadAlta++;
        } else if (peliculas[i].puntuacion >= 7.5) {
            console.log(peliculas[i].titulo + ": Puntuación media");
        } else {
            console.log(peliculas[i].titulo + ": Puntuación baja");
        }
    }

    console.log("Películas con puntuación alta:", cantidadAlta);
}

patronesDePuntuacion(peliculasCienciaFiccion);