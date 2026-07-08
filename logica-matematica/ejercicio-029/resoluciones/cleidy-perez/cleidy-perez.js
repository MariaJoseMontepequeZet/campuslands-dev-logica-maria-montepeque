const peliculasDeMiedo = [
    { titulo: "El Conjuro", duracion: 112 },
    { titulo: "IT", duracion: 135 },
    { titulo: "Insidious", duracion: 100 },
    { titulo: "Scream", duracion: 120 },
    { titulo: "Hereditary", duracion: 127 }
];

function modulosYDivisibilidad(peliculas) {

    if (!peliculas || peliculas.length === 0) {
        console.log("No hay películas registradas.");
        return;
    }

    let cantidadDivisibles = 0;

    console.log("----- Módulos y divisibilidad -----");

    for (let i = 0; i < peliculas.length; i++) {

        if (peliculas[i].duracion % 10 === 0) {
            console.log(
                peliculas[i].titulo +
                " tiene una duración divisible entre 10."
            );
            cantidadDivisibles++;
        } else {
            console.log(
                peliculas[i].titulo +
                " no es divisible entre 10."
            );
        }

    }

    console.log(
        "Cantidad de películas con duración divisible entre 10:",
        cantidadDivisibles
    );

}

modulosYDivisibilidad(peliculasDeMiedo);