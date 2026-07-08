function verificarExperimento(inventario, formulaNecesaria) {
    // 1. Diagnóstico inicial: ¿Tenemos los elementos de la fórmula?
    let faltantes = [];

    for (let elemento of formulaNecesaria) {
        // Buscamos si el elemento existe y tiene cantidad > 0
        let itemEnStock = inventario.find(i => i.nombre === elemento);
        
        if (!itemEnStock || itemEnStock.cantidad <= 0) {
            faltantes.push(elemento);
        }
    }

    // 2. Regla de negocio: Si hay faltantes, no se puede realizar
    if (faltantes.length > 0) {
        return {
            puedeRealizar: false,
            motivo: `Experimento cancelado. Faltan reactivos: ${faltantes.join(", ")}`
        };
    }

    return {
        puedeRealizar: true,
        motivo: "Inventario verificado. Todos los elementos presentes."
    };
}

// --- Pruebas del sistema ---

const miInventario = [
    { nombre: "Hidrogeno", cantidad: 10 },
    { nombre: "Oxigeno", cantidad: 5 },
    { nombre: "Carbono", cantidad: 0 }
];

// Prueba 1: Experimento normal (Agua)
console.log("Prueba 1:", verificarExperimento(miInventario, ["Hidrogeno", "Oxigeno"]));

// Prueba 2: Experimento incompleto
console.log("Prueba 2:", verificarExperimento(miInventario, ["Hidrogeno", "Carbono"]));