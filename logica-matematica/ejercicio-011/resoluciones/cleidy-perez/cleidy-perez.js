const jugadores = [
    { id: 1, jugador: "Juan", puntajeDePelea: 50 },
    { id: 2, jugador: "Maria", puntajeDePelea: 60 },
    { id: 3, jugador: "Ana", puntajeDePelea: 60 }
];

let sumaPuntajes = 0;
let puntajesAltos = 0;
let mayorPuntaje = jugadores[0].puntajeDePelea;
let mejorJugador = jugadores[0].jugador;

for (const jugador of jugadores) {
    console.log(`Jugador: ${jugador.jugador}`);
    console.log(`Puntaje: ${jugador.puntajeDePelea}`);

    sumaPuntajes += jugador.puntajeDePelea;
    if (jugador.puntajeDePelea >= 60) {
        console.log("Puntaje alto");
        puntajesAltos++;
    } else {
        console.log("Debe mejorar");
    }
    if (jugador.puntajeDePelea > mayorPuntaje) {
        mayorPuntaje = jugador.puntajeDePelea;
        mejorJugador = jugador.jugador;
    }

    console.log("---------------------");
}

const promedio = sumaPuntajes / jugadores.length;
console.log("Total de puntajes:", sumaPuntajes);
console.log("Promedio:", promedio.toFixed(2));
console.log("Jugadores con puntaje alto:", puntajesAltos);
console.log("Mejor jugador:", mejorJugador);
console.log("Mayor puntaje:", mayorPuntaje);