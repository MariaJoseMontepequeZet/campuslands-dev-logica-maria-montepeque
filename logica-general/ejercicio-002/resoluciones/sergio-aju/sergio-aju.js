function validarJugador(nombre, partidos, goles) {
    if (partidos <= 0) {
        return {
            estado: "No apto",
            motivo: "El jugador debe haber disputado al menos un partido."
        };
    }
    
    if (goles < 0) {
        return {
            estado: "No apto",
            motivo: "La cantidad de goles no puede ser negativa."
        };
    }

    return {
        estado: "Apto",
        motivo: "Cumple con los requisitos mínimos para el ranking."
    };
}

// --- Pruebas ---
console.log("Caso Normal:", validarJugador("Juan", 10, 5));
console.log("Caso Borde (0 partidos):", validarJugador("Pedro", 0, 0));