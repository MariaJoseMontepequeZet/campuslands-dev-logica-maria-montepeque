// Logica general 009 - Simulacion de estados
// Peliculas de miedo

// Entradas
const pelicula = {
    titulo: "El Conjuro",
    estado: "Disponible"
};

// Funcion para simular el cambio de estados
function simularEstado(pelicula, accion) {

    if (!pelicula) {
        return "La pelicula no existe.";
    }

    if (accion === "reservar" && pelicula.estado === "Disponible") {
        pelicula.estado = "Reservada";
    } else if (accion === "reproducir" && pelicula.estado === "Reservada") {
        pelicula.estado = "En reproduccion";
    } else if (accion === "finalizar" && pelicula.estado === "En reproduccion") {
        pelicula.estado = "Vista";
    } else {
        return "No se puede realizar la accion.";
    }

    return pelicula;
}

// Prueba normal
console.log("Prueba 1:");
console.log(simularEstado(pelicula, "reservar"));
console.log(simularEstado(pelicula, "reproducir"));
console.log(simularEstado(pelicula, "finalizar"));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(simularEstado(null, "reservar"));