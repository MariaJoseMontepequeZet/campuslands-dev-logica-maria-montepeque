// Ejercicio 06 - Autos Hiperdeportivos

function buscarAutoPorVelocidad(inventario, velocidadMinimaRequerida) {
    let autoEncontrado = null;
    let mensaje = "";

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].velocidadMaxima >= velocidadMinimaRequerida) {
            autoEncontrado = inventario[i];
            break;
        }
    }

    if (autoEncontrado !== null) {
        mensaje = "Vehículo apto encontrado: " + autoEncontrado.modelo + " equipado con motor " + autoEncontrado.motor + ".";
    } else {
        mensaje = "Ningún vehículo en el garaje alcanza el requerimiento de " + velocidadMinimaRequerida + " km/h.";
    }

    return { resultado: autoEncontrado, reporte: mensaje };
}

// Pruebas

// Base de datos simulada del garaje
const inventarioGarage = [
    { modelo: "Subaru Impreza WRX STI (Tuned JDM)", velocidadMaxima: 320, motor: "Boxer 2.5L Turbo" },
    { modelo: "Pagani Huayra BC", velocidadMaxima: 383, motor: "V12 Bi-Turbo" },
    { modelo: "Bugatti Chiron Super Sport", velocidadMaxima: 490, motor: "W16 Quad-Turbo" },
    { modelo: "Koenigsegg Jesko Absolut", velocidadMaxima: 530, motor: "V8 Twin-Turbo" }
];

console.log("--- Prueba: Caso Normal (Búsqueda de más de 400 km/h) ---");
console.log(buscarAutoPorVelocidad(inventarioGarage, 400));

console.log("\n--- Prueba: Caso Borde (Búsqueda de más de 600 km/h) ---");
console.log(buscarAutoPorVelocidad(inventarioGarage, 600));

console.log("\n--- Prueba: Caso Estándar (Búsqueda de más de 300 km/h) ---");
console.log(buscarAutoPorVelocidad(inventarioGarage, 300));