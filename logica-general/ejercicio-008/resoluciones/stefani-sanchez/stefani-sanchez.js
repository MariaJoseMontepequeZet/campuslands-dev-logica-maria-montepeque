// Logica general 008 - Flujos paso a paso
// Peliculas de ciencia ficcion

// Entradas
const pelicula = {
    titulo: "Interstellar",
    duracion: 169,
    disponible: true,
    edadMinima: 13
};

const edadUsuario = 18;

// Funcion que muestra el flujo para ver una pelicula
function verPelicula(pelicula, edad) {

    if (!pelicula) {
        return "No se encontro la pelicula.";
    }

    if (!pelicula.disponible) {
        return "La pelicula no esta disponible.";
    }

    if (edad < pelicula.edadMinima) {
        return "El usuario no cumple con la edad minima.";
    }

    return [
        "Paso 1: Buscar la pelicula.",
        "Paso 2: Verificar disponibilidad.",
        "Paso 3: Validar edad del usuario.",
        "Paso 4: Reproducir la pelicula."
    ];
}

// Prueba normal
console.log("Prueba 1:");
console.log(verPelicula(pelicula, edadUsuario));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(verPelicula(pelicula, 10));