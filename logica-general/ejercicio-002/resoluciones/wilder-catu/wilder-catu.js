// Función para clasificar un equipo de fútbol sala
function rankingFutbolSala(nombre, puntos) {

    if (puntos < 0) {
        return {
            equipo: nombre,
            ranking: "Dato inválido",
            mensaje: "Los puntos no pueden ser negativos."
        };
    }

    let ranking = "";

    if (puntos >= 30) {
        ranking = "Campeón";
    } else if (puntos >= 20) {
        ranking = "Clasificado";
    } else if (puntos >= 10) {
        ranking = "En competencia";
    } else {
        ranking = "Eliminado";
    }

    return {
        equipo: nombre,
        puntos: puntos,
        ranking: ranking
    };
}

// --------------------
// Prueba normal
// --------------------
const prueba1 = rankingFutbolSala("Leones FC", 24);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = rankingFutbolSala("Águilas FC", 0);

console.log("\nCaso Borde");
console.log(prueba2);