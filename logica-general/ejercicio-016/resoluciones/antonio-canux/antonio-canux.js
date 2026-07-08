// Ejercicio de Lógica 016: Temática Animación 3D

function optimizarRenderizado3D(matrizRender) {
    let filasAProcesar = 0;
    let filasOmitidas = []; 
    // 1. Recorremos cada fila de la matriz principal
    for (let i = 0; i < matrizRender.length; i++) {
        let contienePoligonos = false;
        
        // 2. Recorremos las columnas de la fila actual
        for (let j = 0; j < matrizRender[i].length; j++) {
            // El valor 1 representa la existencia de un polígono 3D del modelo (ej. un engranaje)
            if (matrizRender[i][j] === 1) {
                contienePoligonos = true;
                break; // Rompemos el ciclo interno porque ya sabemos que la fila tiene contenido
            }
        }

        // 3. Evaluamos la regla de negocio para la fila
        if (contienePoligonos) {
            filasAProcesar++;
        } else {
            filasOmitidas.push(i);
        }
    }

    // 4. Estructuramos el reporte de salida
    return {
        totalFilasRenderizadas: filasAProcesar,
        filasOptimizadas: filasOmitidas,
        mensaje: filasOmitidas.length > 0 
            ? `Optimización exitosa. Se ahorró memoria omitiendo el procesamiento de ${filasOmitidas.length} fila(s) vacía(s).`
            : "Se renderizó el 100% de la matriz. No hubo filas completamente vacías para optimizar."
    };
}

// --- Ejecución y Pruebas ---

// 1. CASO NORMAL: Una matriz donde la primera y última fila están vacías (0 = vacío, 1 = polígono)
console.log("--- Ejecutando Caso Normal ---");
const planoModelo3D = [
    [0, 0, 0, 0], // Fila 0: Vacía
    [0, 1, 1, 0], // Fila 1: Con polígonos
    [0, 1, 1, 0], // Fila 2: Con polígonos
    [0, 0, 0, 0]  // Fila 3: Vacía
];
const resultadoNormal = optimizarRenderizado3D(planoModelo3D);
console.log(resultadoNormal);

// 2. CASO BORDE: Una matriz densa donde todas las filas tienen al menos un elemento a renderizar
console.log("\n--- Ejecutando Caso Borde (Sin optimización posible) ---");
const planoDenso = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
];
const resultadoBorde = optimizarRenderizado3D(planoDenso);
console.log(resultadoBorde);