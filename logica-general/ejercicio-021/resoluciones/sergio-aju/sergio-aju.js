function clasificarJugador(victorias, kda) {
    let rango = "";
    let motivo = "";

    if (victorias >= 4 && kda >= 3.0) {
        rango = "Oro";
        motivo = "Desempeño sobresaliente: alta tasa de victorias y KDA superior a 3.0.";
    } else if (victorias >= 2 && kda >= 1.5) {
        rango = "Plata";
        motivo = "Desempeño estándar: cumple con el mínimo de victorias y KDA aceptable.";
    } else {
        rango = "Bronce";
        motivo = "Desempeño inicial: requiere mayor práctica en partidas competitivas.";
    }
    return { rango, motivo };
}

// Pruebas
console.log("Caso Normal:", clasificarJugador(3, 2.0));
console.log("Caso Borde:", clasificarJugador(0, 0.5));