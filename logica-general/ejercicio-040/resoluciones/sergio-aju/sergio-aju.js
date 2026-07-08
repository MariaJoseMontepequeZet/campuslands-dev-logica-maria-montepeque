function seleccionarPedido(pedido) {
    if (pedido.tienePrisa) {
        return { prioridad: "ALTA", accion: "Preparar inmediatamente." };
    }
    
    if (pedido.cantidadItems >= 5) {
        return { prioridad: "MEDIA", accion: "Preparar tras urgentes." };
    }

    return { prioridad: "BAJA", accion: "Preparar según orden de llegada." };
}

console.log(seleccionarPedido({ tienePrisa: true, cantidadItems: 2 })); 
console.log(seleccionarPedido({ tienePrisa: false, cantidadItems: 8 })); 