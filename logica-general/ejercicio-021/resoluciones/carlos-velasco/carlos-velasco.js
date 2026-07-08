const clasificarJugador = (jugador) => {
    if (jugador.reportes > 5) {
        return { rango: "Suspendido", motivo: "Exceso de reportes por conducta antideportiva." };
    }

    let nivel = "";
    if (jugador.mmr >= 3000) {
        nivel = "Nivel Élite";
    } else if (jugador.mmr >= 1500) {
        nivel = "Nivel Avanzado";
    } else {
        nivel = "Nivel Principiante";
    }

    if (jugador.esVeterano && nivel === "Nivel Avanzado") {
        nivel = "Nivel Élite (Veterano Promovido)";
    }

    return { 
        rango: nivel, 
        motivo: `Clasificado por MMR ${jugador.mmr} ${jugador.esVeterano ? 'con estatus de veterano.' : '.'}` 
    };
};

console.log(clasificarJugador({ mmr: 2000, reportes: 2, esVeterano: true }));  
console.log(clasificarJugador({ mmr: 1000, reportes: 10, esVeterano: false })); 