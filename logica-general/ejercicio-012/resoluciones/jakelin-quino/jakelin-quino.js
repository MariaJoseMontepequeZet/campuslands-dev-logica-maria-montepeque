function determinarGanador(jugadorA, jugadorB) {
    if (jugadorA.puntos >= 11 && jugadorA.puntos >= jugadorB.puntos + 2) {
        return { ganador: jugadorA.nombre, razon: "Victoria por diferencia de puntos." };
    }
    if (jugadorB.puntos >= 11 && jugadorB.puntos >= jugadorA.puntos + 2) {
        return { ganador: jugadorB.nombre, razon: "Victoria por diferencia de puntos." };
    }
    return { ganador: null, razon: "El partido continúa." };
}

const j1 = { nombre: "Ana", puntos: 11 };
const j2 = { nombre: "Luis", puntos: 9 };

console.log(determinarGanador(j1, j2));
console.log(determinarGanador({nombre: "Ana", puntos: 10}, {nombre: "Luis", puntos: 10}));