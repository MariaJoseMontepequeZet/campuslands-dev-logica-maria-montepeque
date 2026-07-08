const peliculasDeMiedo = [
    { titulo: "El Conjuro", disponible: true },
    { titulo: "IT", disponible: false },
    { titulo: "Insidious", disponible: true },
    { titulo: "Scream", disponible: true },
    { titulo: "Hereditary", disponible: false }
];

function simulacionDeEstado(peliculas) {

    if (!peliculas || peliculas.length === 0) {
        console.log("No hay películas registradas.");
        return;
    }

    let disponibles = 0;

    console.log("----- Estado de las películas -----");

    for (let i = 0; i < peliculas.length; i++) {

        if (peliculas[i].disponible) {
            console.log(peliculas[i].titulo + ": Disponible");
            disponibles++;
        } else {
            console.log(peliculas[i].titulo + ": No disponible");
        }

    }

    console.log("Películas disponibles:", disponibles);
}

simulacionDeEstado(peliculasDeMiedo);