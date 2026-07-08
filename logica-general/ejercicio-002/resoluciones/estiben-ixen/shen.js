function suspencion_de_jugadores(jugadores) {
    if(jugadores.tarjetas_amarillas >= 3) {
        return {
            accion: "jugador sancionado del juego",
            motivo: "El jugador ha acumulado el límite máximo de tarjetas amarillas permitidas por el reglamento."
        };              
    }else if(jugadores.tarjetas_rojas >= 1) {
        return {
            accion: "jugador sancionado del juego",
            motivo: "El jugador ha recibido una tarjeta roja, lo que implica una sanción inmediata."
        };
    }else{
        return {
            accion: "jugador no sancionado",
            motivo: "El jugador no ha acumulado suficientes tarjetas para ser sancionado."
        };
    }
}

let jugador1 = {
    nombre: "Juan Pérez",
    tarjetas_amarillas: 2,
    tarjetas_rojas: 0
};

let jugador2 = {
    nombre: "Carlos López",
    tarjetas_amarillas: 3,
    tarjetas_rojas: 0
};

let jugador3 = {
    nombre: "Luis Martínez",
    tarjetas_amarillas: 1,
    tarjetas_rojas: 1
};

console.log(suspencion_de_jugadores(jugador1));
console.log(suspencion_de_jugadores(jugador2));
console.log(suspencion_de_jugadores(jugador3)); 
    