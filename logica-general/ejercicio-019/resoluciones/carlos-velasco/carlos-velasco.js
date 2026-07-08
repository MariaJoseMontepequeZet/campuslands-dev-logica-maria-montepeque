const analizarInventario = (inventario) => {
    let reporte = {};
    for (let sustancia in inventario) {
        let cantidad = inventario[sustancia];
        let estado = "";
        if (cantidad <= 5) estado = "Estado Crítico: Reponer urgente";
        else if (cantidad <= 20) estado = "Estado Bajo: Programar compra";
        else estado = "Estado Óptimo: Stock suficiente";

        reporte[sustancia] = estado;
    }
    return reporte;
};
const stockActual = { "Ácido Sulfúrico": 3, "Etanol": 15, "Agua Destilada": 50 };
console.log(analizarInventario(stockActual));