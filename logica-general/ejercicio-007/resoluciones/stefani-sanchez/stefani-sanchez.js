// Logica general 007 - Deteccion de inconsistencias
// Playlist musical

// Entradas
const playlist = [
    {
        titulo: "Believer",
        artista: "Imagine Dragons",
        duracion: 204
    },
    {
        titulo: "",
        artista: "Adele",
        duracion: 230
    },
    {
        titulo: "Blinding Lights",
        artista: "",
        duracion: 200
    },
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        duracion: -5
    }
];

// Funcion para detectar inconsistencias
function detectarInconsistencias(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "La playlist esta vacia.";
    }

    const errores = [];

    lista.forEach((cancion, indice) => {

        if (!cancion.titulo) {
            errores.push(`Cancion ${indice + 1}: titulo vacio.`);
        }

        if (!cancion.artista) {
            errores.push(`Cancion ${indice + 1}: artista vacio.`);
        }

        if (cancion.duracion <= 0) {
            errores.push(`Cancion ${indice + 1}: duracion invalida.`);
        }

    });

    if (errores.length === 0) {
        return "No se encontraron inconsistencias.";
    }

    return errores;
}

// Prueba normal
console.log("Prueba 1:");
console.log(detectarInconsistencias(playlist));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(detectarInconsistencias([]));