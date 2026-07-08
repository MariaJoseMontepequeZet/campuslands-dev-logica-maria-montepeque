// Ejercicio de Lógica 040 - Temática Comida Urbana

function sugerirComboUrbano(presupuesto, esVegetariano) {
    const menuDisponibles = [
        { id: "C1", nombre: "Hamburguesa Doble + Papas + Gaseosa", precio: 15, vegetariano: false },
        { id: "C2", nombre: "Hamburguesa de Lentejas + Papas Rústicas", precio: 14, vegetariano: true },
        { id: "C3", nombre: "Falafel Wrap + Agua Fresca", precio: 10, vegetariano: true },
        { id: "C4", nombre: "Hot Dog Callejero + Gaseosa", precio: 8, vegetariano: false },
        { id: "C5", nombre: "Sándwich de Brisket Premium", precio: 25, vegetariano: false }
    ];

    let opcionesValidas = menuDisponibles.filter(combo => {
        return esVegetariano ? combo.vegetariano === true : true;
    });

    opcionesValidas = opcionesValidas.filter(combo => combo.precio <= presupuesto);

    if (opcionesValidas.length === 0) {
        return {
            estado: "sin_sugerencia",
            mensaje: "El presupuesto no es suficiente para ninguna opción válida según las preferencias.",
            sugerencia: null,
            vuelto: presupuesto
        };
    }

    opcionesValidas.sort((a, b) => b.precio - a.precio);

    const mejorOpcion = opcionesValidas[0];
    const vueltoCalculado = presupuesto - mejorOpcion.precio;

    return {
        estado: "sugerencia_exitosa",
        mensaje: `La mejor opción para el cliente es '${mejorOpcion.nombre}'.`,
        sugerencia: mejorOpcion.nombre,
        vuelto: vueltoCalculado
    };
}

// Pruebas
console.log("--- Ejecutando Caso Normal ---");
const resultadoNormal = sugerirComboUrbano(15, true);
console.log(resultadoNormal);

console.log("\n--- Ejecutando Caso Borde (Presupuesto insuficiente) ---");
const resultadoBorde = sugerirComboUrbano(5, false);
console.log(resultadoBorde);