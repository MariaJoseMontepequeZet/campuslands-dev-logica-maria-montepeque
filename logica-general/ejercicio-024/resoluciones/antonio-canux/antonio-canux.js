// Ejercicio 024 - Inventario de Motos

function clasificarMotocicleta(estadoMecanico, kilometraje) {
    let categoria = "";
    let accion = "";

    if (estadoMecanico !== "optimo") {
        categoria = "taller";
        accion = "programar revisión de motor y sistemas auxiliares.";
    } 
    else if (estadoMecanico === "optimo" && kilometraje > 30000) {
        categoria = "venta con descuento";
        accion = "asignar etiqueta de oferta especial por kilometraje.";
    } 
    else if (estadoMecanico === "optimo" && kilometraje <= 30000) {
        categoria = "venta regular";
        accion = "exhibir en sala de ventas principal.";
    } 
    else {
        categoria = "error de inventario";
        accion = "verificar los datos ingresados en el sistema.";
    }

    return { categoria, accion };
}

// Pruebas

console.log("--- Prueba: Caso Normal (Moto semi-nueva) ---");
console.log(clasificarMotocicleta("optimo", 12500));

console.log("\n--- Prueba: Caso Borde (Requiere mecánica) ---");
console.log(clasificarMotocicleta("falla en transmisión", 45000));

console.log("\n--- Prueba: Caso Descuento (Buen estado, uso alto) ---");
console.log(clasificarMotocicleta("optimo", 35000));