// Logica general 012 - Comparacion de opciones
// Pingpong

// Entradas
const jugadores = [
    { nombre: "Carlos", puntos: 18 },
    { nombre: "Ana", puntos: 25 },
    { nombre: "Luis", puntos: 21 },
    { nombre: "Maria", puntos: 19 }
];

// Funcion para encontrar al jugador con mayor puntaje
function mejorJugador(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay jugadores registrados.";
    }

    let mejor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].puntos > mejor.puntos) {
            mejor = lista[i];
        }
    }

    return mejor;
}

// Prueba normal
console.log("Prueba 1:");
console.log(mejorJugador(jugadores));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(mejorJugador([]));