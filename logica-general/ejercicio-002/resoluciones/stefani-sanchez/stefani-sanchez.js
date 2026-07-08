// Logica general 002 - Validacion de datos
// Ranking de futbol sala

// Entradas del problema
const jugador = {
    nombre: "Carlos",
    partidosJugados: 8,
    goles: 12,
    tarjetasRojas: 0,
    activo: true
};

// Funcion que valida los datos del jugador
function validarJugador(jugador) {

    // Validar datos obligatorios
    if (!jugador.nombre || jugador.nombre.trim() === "") {
        return {
            estado: "rechazado",
            motivo: "El jugador debe tener un nombre valido."
        };
    }

    // Validar partidos jugados
    if (jugador.partidosJugados < 0) {
        return {
            estado: "rechazado",
            motivo: "Los partidos jugados no pueden ser negativos."
        };
    }

    // Validar goles
    if (jugador.goles < 0) {
        return {
            estado: "rechazado",
            motivo: "Los goles no pueden ser negativos."
        };
    }

    // Validar tarjetas rojas
    if (jugador.tarjetasRojas > 3) {
        return {
            estado: "rechazado",
            motivo: "El jugador tiene demasiadas tarjetas rojas."
        };
    }

    // Validar si esta activo
    if (!jugador.activo) {
        return {
            estado: "rechazado",
            motivo: "El jugador no esta activo en el ranking."
        };
    }

    // Si pasa todas las reglas
    return {
        estado: "aprobado",
        motivo: "El jugador cumple las reglas del ranking."
    };
}


// Prueba normal
console.log("Prueba 1:");
console.log(validarJugador(jugador));


// Caso borde
const jugadorCasoBorde = {
    nombre: "",
    partidosJugados: 5,
    goles: 4,
    tarjetasRojas: 1,
    activo: true
};

console.log("\nPrueba 2 - Caso borde:");
console.log(validarJugador(jugadorCasoBorde));