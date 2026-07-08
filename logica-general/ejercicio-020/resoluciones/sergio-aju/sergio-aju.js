function seleccionarMenu(preferencias) {
    const { presupuesto, sabor, tienePrisa } = preferencias;
    
    // Lista de opciones disponibles en el Food Truck
    const opciones = [
        { nombre: "Tacos", precio: 5, sabor: "salado", rapido: true },
        { nombre: "Crepa", precio: 4, sabor: "dulce", rapido: true },
        { nombre: "Hamburguesa", precio: 8, sabor: "salado", rapido: false },
        { nombre: "Waffle", precio: 6, sabor: "dulce", rapido: false }
    ];

    // Estrategia: Filtrar primero por sabor, luego por presupuesto y prisa
    let recomendacion = opciones.filter(opcion => {
        const cumpleSabor = opcion.sabor === sabor;
        const cumplePresupuesto = opcion.precio <= presupuesto;
        const cumplePrisa = tienePrisa ? opcion.rapido === true : true;
        
        return cumpleSabor && cumplePresupuesto && cumplePrisa;
    });

    // Si no hay coincidencias exactas, informar
    if (recomendacion.length === 0) {
        return { mensaje: "Lo sentimos, no encontramos un plato que se ajuste a tus criterios." };
    }

    return {
        recomendado: recomendacion[0].nombre,
        detalle: recomendacion[0]
    };
}

// --- Pruebas del sistema ---

// Caso normal: Quiere algo salado, barato y rápido
console.log("Prueba 1:", seleccionarMenu({ presupuesto: 7, sabor: "salado", tienePrisa: true }));

// Caso borde: Presupuesto muy bajo
console.log("Prueba 2:", seleccionarMenu({ presupuesto: 2, sabor: "dulce", tienePrisa: false }));