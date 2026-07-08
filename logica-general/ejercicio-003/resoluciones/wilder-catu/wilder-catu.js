// Función para clasificar un equipo de esports
function torneoEsports(nombre, victorias) {

    if (victorias < 0) {
        return {
            equipo: nombre,
            clasificacion: "Dato inválido",
            mensaje: "Las victorias no pueden ser negativas."
        };
    }

    let clasificacion = "";

    if (victorias >= 15) {
        clasificacion = "Campeón";
    } else if (victorias >= 10) {
        clasificacion = "Finalista";
    } else if (victorias >= 5) {
        clasificacion = "Clasificado";
    } else {
        clasificacion = "Eliminado";
    }

    return {
        equipo: nombre,
        victorias: victorias,
        clasificacion: clasificacion
    };
}

// --------------------
// Prueba normal
// --------------------
const prueba1 = torneoEsports("Team Phoenix", 12);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = torneoEsports("Shadow Wolves", 0);

console.log("\nCaso Borde");
console.log(prueba2);