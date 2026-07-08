// Función para clasificar la prioridad de un vehículo en el taller
function tallerMecanico(placa, diasEspera) {

    if (diasEspera < 0) {
        return {
            placa: placa,
            prioridad: "Dato inválido",
            mensaje: "Los días de espera no pueden ser negativos."
        };
    }

    let prioridad = "";

    if (diasEspera >= 10) {
        prioridad = "Urgente";
    } else if (diasEspera >= 5) {
        prioridad = "Alta";
    } else if (diasEspera >= 1) {
        prioridad = "Normal";
    } else {
        prioridad = "Recién ingresado";
    }

    return {
        placa: placa,
        diasEspera: diasEspera,
        prioridad: prioridad
    };
}

// --------------------
// Prueba normal
// --------------------
const prueba1 = tallerMecanico("P123ABC", 6);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = tallerMecanico("P456XYZ", 0);

console.log("\nCaso Borde");

