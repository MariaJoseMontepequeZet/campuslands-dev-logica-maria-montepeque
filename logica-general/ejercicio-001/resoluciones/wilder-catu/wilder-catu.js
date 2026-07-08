// Función que clasifica a un jugador
function clasificarJugador(nombre, puntos) {

    if (puntos < 0) {
        return {
            jugador: nombre,
            rango: "Dato inválido",
            mensaje: "Los puntos no pueden ser negativos."
        };
    }

    let rango = "";

    if (puntos >= 3000) {
        rango = "Diamante";
    } else if (puntos >= 2000) {
        rango = "Oro";
    } else if (puntos >= 1000) {
        rango = "Plata";
    } else {
        rango = "Bronce";
    }

    return {
        jugador: nombre,
        puntos: puntos,
        rango: rango
    };
}

// ======================
// Prueba normal
// ======================
const prueba1 = clasificarJugador("Fernando", 2350);

console.log("=== Prueba Normal ===");
console.log(prueba1);

// ======================
// Caso borde
// ======================
const prueba2 = clasificarJugador("Ana", 0);

console.log("\n=== Caso Borde ===");
console.log(prueba2);

// ======================
// Caso inválido
// ======================
const prueba3 = clasificarJugador("Luis", -50);

console.log("\n=== Caso Inválido ===");
console.log(prueba3);