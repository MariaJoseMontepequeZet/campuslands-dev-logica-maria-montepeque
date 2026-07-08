function analizarTextura(matriz) {
    let contadorActivos = 0;
    let filas = matriz.length;
    let columnas = matriz[0].length;

    // Recorremos la matriz usando ciclos anidados
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            // Si el valor es 1, el píxel está activo
            if (matriz[i][j] === 1) {
                contadorActivos++;
            }
        }
    }

    // Regla de negocio: La textura está lista si más del 50% de píxeles están activos
    const totalPixeles = filas * columnas;
    const porcentaje = (contadorActivos / totalPixeles) * 100;

    return {
        totalPixeles: totalPixeles,
        activos: contadorActivos,
        porcentaje: porcentaje.toFixed(2) + "%",
        listaParaRender: porcentaje > 50
    };
}

// --- Pruebas del sistema ---

// Matriz de 3x3
const textura1 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];

console.log("Diagnóstico Textura 1:", analizarTextura(textura1));

// Caso borde: Matriz vacía o apagada
const textura2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

console.log("Diagnóstico Textura 2:", analizarTextura(textura2));