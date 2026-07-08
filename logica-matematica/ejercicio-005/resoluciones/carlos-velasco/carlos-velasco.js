const analizarStock = (inventario) => {
    const repuestos = Object.entries(inventario);
    const minStock = repuestos.reduce((prev, curr) => (curr[1] < prev[1] ? curr : prev));
    const [nombre, cantidad] = minStock;
    let estado = "";
    if (cantidad <= 5) estado = "Pedido Urgente";
    else if (cantidad <= 15) estado = "Pedido Programado";
    else estado = "Stock Óptimo";
    return {
        repuesto_critico: nombre,
        cantidad_actual: cantidad,
        accion_requerida: estado
    };
};

const bodega = { "Frenos": 3, "Aceite": 20, "Bujías": 10 };
console.log(analizarStock(bodega));