// Función para clasificar el inventario de una moto
function inventarioMotos(modelo, stock) {

    if (stock < 0) {
        return {
            modelo: modelo,
            estado: "Dato inválido",
            mensaje: "El stock no puede ser negativo."
        };
    }

    let estado = "";

    if (stock >= 10) {
        estado = "Stock Alto";
    } else if (stock >= 5) {
        estado = "Stock Medio";
    } else if (stock >= 1) {
        estado = "Stock Bajo";
    } else {
        estado = "Sin Stock";
    }

    return {
        modelo: modelo,
        stock: stock,
        estado: estado
    };
}

// --------------------
// Prueba normal
// --------------------
const prueba1 = inventarioMotos("Honda CB190R", 8);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = inventarioMotos("Yamaha FZ25", 0);

console.log("\nCaso Borde");
console.log(prueba2);