function decidirParticipacion(nivelJugador, tieneSuscripcion, region) {
    if (region !== "LATAM") {
        return { accion: "Denegar", motivo: "Solo se aceptan jugadores de la región LATAM." };
    }
    if (nivelJugador < 10) {
        return { accion: "Denegar", motivo: "Nivel insuficiente. Se requiere mínimo nivel 10." };
    }
    if (tieneSuscripcion) {
        return { accion: "Aceptar", motivo: "Jugador de nivel alto con suscripción activa (Prioridad)." };
    }
    return { accion: "Aceptar", motivo: "Jugador cumple los requisitos básicos." };
}

console.log(decidirParticipacion(15, true, "LATAM")); 
console.log(decidirParticipacion(5, false, "EU")); 