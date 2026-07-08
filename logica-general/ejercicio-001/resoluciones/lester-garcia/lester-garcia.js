function procesarReportes(jugadores, regla) {
    if (regla === "banear hackers primero") {
        if (jugadores.includes("hacker")) {
            return {
                accion: "banear jugador y cerrar partida",
                motivo: "la regla prioriza la integridad competitiva ante reportes menores."
            };
        } else {
            return {
                accion: "revisar reportes de comportamiento",
                motivo: "no hay hackers en la partida, se procede con la lista normal."
            };
        }
    }
    return {
        accion: "omitir",
        motivo: "regla no reconocida."
    };
}

const partidaNormal = ["toxico", "afk", "hacker"];
const reglaNormal = "banear hackers primero";
const resultadoNormal = procesarReportes(partidaNormal, reglaNormal);
console.log(resultadoNormal);

const partidaBorde = ["toxico", "afk", "toxico"];
const reglaBorde = "banear hackers primero";
const resultadoBorde = procesarReportes(partidaBorde, reglaBorde);
console.log(resultadoBorde);