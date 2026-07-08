const gestionarReaccion = (inventario, requeridos) => {
    let encontrados = [];
    let peligrososEncontrados = 0;

    for (let req of requeridos) {
        let item = inventario.find(i => i.nombre === req);
        
        if (!item || item.cantidad <= 0) {
            return { estado: "Reacción suspendida", motivo: `Falta ${req}` };
        }
        
        encontrados.push(item);
        if (item.esPeligroso) peligrososEncontrados++;
    }

    if (peligrososEncontrados > 1) {
        return { estado: "Precaución", motivo: "Alerta: Mezcla de alto riesgo" };
    }

    return { estado: "Aprobado", motivo: "Todos los reactivos listos." };
};

const stock = [
    { nombre: "Acido", cantidad: 10, esPeligroso: true },
    { nombre: "Base", cantidad: 5, esPeligroso: true },
    { nombre: "Agua", cantidad: 20, esPeligroso: false }
];

console.log(gestionarReaccion(stock, ["Acido", "Base"]));
console.log(gestionarReaccion(stock, ["Acido", "Agua"]));