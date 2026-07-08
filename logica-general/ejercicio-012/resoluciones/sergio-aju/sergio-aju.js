function determinarGanador(jugador1, jugador2) {
    // Regla: Para ganar, un jugador debe tener al menos 11 puntos y 
    // llevar una diferencia de 2 puntos sobre el oponente.
    const puntosJ1 = jugador1.puntos;
    const puntosJ2 = jugador2.puntos;

    if (puntosJ1 >= 11 && (puntosJ1 - puntosJ2) >= 2) {
        return `Ganador: ${jugador1.nombre}`;
    } else if (puntosJ2 >= 11 && (puntosJ2 - puntosJ1) >= 2) {
        return `Ganador: ${jugador2.nombre}`;
    } else if (Math.abs(puntosJ1 - puntosJ2) < 2 && (puntosJ1 >= 10 && puntosJ2 >= 10)) {
        return "Estado: Deuce (Empate técnico, se requiere diferencia de 2)";
    } else {
        return "Estado: El set continúa";
    }
}

// Pruebas
console.log(determinarGanador({nombre: "Alex", puntos: 11}, {nombre: "Bruno", puntos: 9}));  // Normal
console.log(determinarGanador({nombre: "Alex", puntos: 10}, {nombre: "Bruno", puntos: 10})); // Borde (Deuce)