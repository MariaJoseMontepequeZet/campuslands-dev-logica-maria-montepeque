function decidirAvance(puntos, penalizaciones, tieneFaltasGraves) {
    // Regla 1: Faltas graves descalifican inmediatamente
    if (tieneFaltasGraves) {
        return { accion: "Eliminado", motivo: "Faltas graves detectadas durante el torneo." };
    }

    // Regla 2: Puntuación mínima para avanzar
    if (puntos < 50) {
        return { accion: "Eliminado", motivo: "Puntaje insuficiente para avanzar a la siguiente fase." };
    }

    // Regla 3: Si tiene muchas penalizaciones pero pasa por puntos, advertencia
    if (penalizaciones > 5) {
        return { accion: "Avanza con advertencia", motivo: "Avanza por puntos, pero bajo revisión disciplinaria." };
    }

    // Regla 4: Caso estándar
    return { accion: "Avanza", motivo: "Cumple con todos los requisitos deportivos." };
}

// Pruebas
console.log("Caso Normal:", decidirAvance(70, 2, false));
console.log("Caso Borde:", decidirAvance(55, 6, false));