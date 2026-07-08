const peliculasCienciaFiccion = [
    { titulo: "Interstellar", duracion: 169 },
    { titulo: "The Matrix", duracion: 136 },
    { titulo: "Avatar", duracion: 162 },
    { titulo: "Gravity", duracion: 91 },
    { titulo: "Dune", duracion: 155 }
];

function flujoPasoAPaso(peliculas) {

    if (!peliculas || peliculas.length === 0) {
        console.log("No hay películas registradas.");
        return;
    }

    let cantidadLargas = 0;

    console.log("----- Flujo de películas -----");

    for (let i = 0; i < peliculas.length; i++) {

        console.log(
            "Paso " + (i + 1) + ":",
            peliculas[i].titulo,
            "-",
            peliculas[i].duracion + " minutos"
        );

        if (peliculas[i].duracion > 120) {
            cantidadLargas++;
        }
    }

    console.log(
        "\nPelículas con duración mayor a 120 minutos:",
        cantidadLargas
    );
}

flujoPasoAPaso(peliculasCienciaFiccion);