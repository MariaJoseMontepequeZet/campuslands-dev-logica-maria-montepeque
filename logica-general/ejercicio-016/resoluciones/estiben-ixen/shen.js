/**
 * Normaliza los vértices de un objeto 3D dentro del espacio definido.
 */
function normalizarVertices(matriz) {
    let ajustesRealizados = 0;
    const LIMITE = 100;

    const matrizAjustada = matriz.map(vertice => {
        return vertice.map(coord => {
            if (coord > LIMITE) {
                ajustesRealizados++;
                return LIMITE;
            } else if (coord < -LIMITE) {
                ajustesRealizados++;
                return -LIMITE;
            }
            return coord;
        });
    });

    return { matrizAjustada, ajustesRealizados };
}

// --- Dataset: Vértices (x, y, z) ---
const objeto3D = [
    [50, 120, -10],  // 120 supera el límite
    [-110, 0, 0],    // -110 supera el límite
    [10, 10, 10]     // Correcto
];

const resultado = normalizarVertices(objeto3D);

console.log("--- Reporte de Normalización ---");
console.log("Matriz Ajustada:", resultado.matrizAjustada);
console.log("Valores corregidos:", resultado.ajustesRealizados);