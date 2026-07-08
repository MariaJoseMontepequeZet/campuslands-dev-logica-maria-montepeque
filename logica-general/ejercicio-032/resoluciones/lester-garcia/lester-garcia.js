const jugadores = [
    { nombre: "Laura", puntos: 18, faltas: 1 },
    { nombre: "Diego", puntos: 18, faltas: 3 }
];

let ganador = "";
let motivo = "";

if (jugadores[0].puntos > jugadores[1].puntos) {
    ganador = jugadores[0].nombre;
    motivo = "Obtuvo una mayor cantidad de puntos.";
} else if (jugadores[1].puntos > jugadores[0].puntos) {
    ganador = jugadores[1].nombre;
    motivo = "Obtuvo una mayor cantidad de puntos.";
} else {
    if (jugadores[0].faltas < jugadores[1].faltas) {
        ganador = jugadores[0].nombre;
        motivo = "Empataron en puntos, pero cometió menos faltas.";
    } else if (jugadores[1].faltas < jugadores[0].faltas) {
        ganador = jugadores[1].nombre;
        motivo = "Empataron en puntos, pero cometió menos faltas.";
    } else {
        ganador = "Empate";
        motivo = "Ambos jugadores tienen los mismos puntos y la misma cantidad de faltas.";
    }
}

console.log("ganador:", ganador);
console.log("motivo:", motivo);