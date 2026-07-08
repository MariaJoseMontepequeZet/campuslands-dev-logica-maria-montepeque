const jugadores = [
    {
        nombre: "Carlos",
        puntos: 21,
        setsGanados: 2
    },
    {
        nombre: "Andrés",
        puntos: 18,
        setsGanados: 1
    },
    {
        nombre: "María",
        puntos: 25,
        setsGanados: 3
    },
    {
        nombre: "Laura",
        puntos: 19,
        setsGanados: 2
    },
    {
        nombre: "José",
        puntos: 16,
        setsGanados: 1
    }
];

function compararJugadores(jugadores) {

    let mejorJugador = jugadores[0];

    jugadores.forEach(jugador => {

        if (jugador.puntos > mejorJugador.puntos) {
            mejorJugador = jugador;
        }

    });

    console.log("=== MEJOR JUGADOR DEL TORNEO ===");
    console.log(`Nombre: ${mejorJugador.nombre}`);
    console.log(`Puntos: ${mejorJugador.puntos}`);
    console.log(`Sets ganados: ${mejorJugador.setsGanados}`);

}

compararJugadores(jugadores);