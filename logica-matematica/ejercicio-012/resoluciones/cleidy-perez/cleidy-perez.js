const jugadoresPingPong=[
    {
        id:1, 
        jugador: "Juan",
        punteo: [12, 45, 60]
     },
     {
        id:2,
        jugador: "Ester",
        punteo:[56, 45, 34]
     },
     {
        id: 3,
        jugador: "Esteban",
        punteo: [45,67,98]
     }
]

function probabilidadDePingPong(jugadores){
    if (!jugadores || jugadores.length ===0){
        console.log("No hay jugadores para saber quién va al torneo final.");
        return;
    }
    let mejorPromedio= 0
    let irAlTorneo =jugadores[0];

    for (let i= 0; i<jugadores.length; i++){
        let punteoTotal=0;

        for (let j =0; j< jugadores[i].punteo.length; j++){
            punteoTotal +=jugadores[i].punteo[j];
        }
        let promedio = punteoTotal / jugadores[i].punteo.length;

        if(promedio > mejorPromedio){
            mejorPromedio = promedio;
            irAlTorneo =jugadores[i];
        }
    }
    console.log("El tiene más probabilidad de ir al torneo:", irAlTorneo.jugador);
    console.log("Promedio;", mejorPromedio.toFixed(2));
}

probabilidadDePingPong(jugadoresPingPong);