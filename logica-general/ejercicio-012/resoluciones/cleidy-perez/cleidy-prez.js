const jugadorDePinpong=[
    {id:1, jugador: "Juan", punteo: 34 },
    {id:2, jugador: "Maria", punteo: 55},
    {id:3, jugador: "Marvin", punteo: 60},
    {id:4, jugador: "Carla", punteo: 23}
];

function comparacionDeOpciones(jugadores){
    if (!jugadores || jugadores.lenght === 0){
        console.log("no hay jugadores para comparar")
        return;
    }

    let ganador= jugadores[0];
    for (let i=1; i< jugadores.length; i++ ){
        if (jugadores[i].punteo > ganador.punteo){
            ganador=jugadores[i];
        }
    }
    console.log("Ganador: ", ganador.jugador);
    console.log("Punteo: ", ganador.punteo)
 }  
 comparacionDeOpciones(jugadorDePinpong);