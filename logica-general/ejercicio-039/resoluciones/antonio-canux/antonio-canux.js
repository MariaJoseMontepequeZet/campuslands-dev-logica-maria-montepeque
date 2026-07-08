// Ejercicio de Lógica 039 - Temática Fórmulas Químicas

function verificarInventarioQuimico(formula, inventario) {
    const requerimientos = {
        "H2O": { H: 2, O: 1 },    // Agua
        "NH3": { N: 1, H: 3 },    // Amoníaco
        "CO2": { C: 1, O: 2 }     // Dióxido de carbono
    };

    const receta = requerimientos[formula];

    if (!receta) {
        return {
            fabricable: false,
            mensaje: `La fórmula '${formula}' no está registrada en la base de datos del laboratorio.`,
            inventarioFinal: inventario
        };
    }

    let inventarioRestante = { ...inventario };
    let elementosFaltantes = [];

    // Regla 2: Verificar disponibilidad de cada elemento requerido
    for (let elemento in receta) {
        let cantidadRequerida = receta[elemento];
        let cantidadDisponible = inventarioRestante[elemento] || 0;

        if (cantidadDisponible < cantidadRequerida) {
            let deficit = cantidadRequerida - cantidadDisponible;
            elementosFaltantes.push(`Faltan ${deficit} átomo(s) de ${elemento}`);
        } else {
            inventarioRestante[elemento] -= cantidadRequerida;
        }
    }

    if (elementosFaltantes.length > 0) {
        return {
            fabricable: false,
            mensaje: "Síntesis cancelada por inventario insuficiente: " + elementosFaltantes.join(", ") + ".",
            inventarioFinal: inventario
        };
    }

    return {
        fabricable: true,
        mensaje: `Síntesis de '${formula}' completada con éxito.`,
        inventarioFinal: inventarioRestante
    };
}

// Pruebas

// 1. CASO NORMAL: Tenemos inventario suficiente para sintetizar Agua (H2O)
console.log("--- Ejecutando Caso Normal ---");
const inventarioLaboratorio = { H: 5, O: 3, C: 1 };
const resultadoNormal = verificarInventarioQuimico("H2O", inventarioLaboratorio);
console.log(resultadoNormal);

// 2. CASO BORDE: Falta un elemento específico para el Amoníaco (NH3)
console.log("\n--- Ejecutando Caso Borde (Inventario insuficiente) ---");
const inventarioEscaso = { N: 1, H: 2, O: 5 };
const resultadoBorde = verificarInventarioQuimico("NH3", inventarioEscaso);
console.log(resultadoBorde);