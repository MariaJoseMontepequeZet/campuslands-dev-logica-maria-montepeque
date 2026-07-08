function verificarStock(stock, limiteMinimo) {
    if (stock < limiteMinimo) {
        return { 
            estado: "ALERTA", 
            mensaje: "Stock insuficiente, realizar pedido.",
            faltante: limiteMinimo - stock 
        };
    }
    
    return { 
        estado: "OK", 
        mensaje: "Stock suficiente.",
        faltante: 0 
    };
}
console.log(verificarStock(3, 5)); 
console.log(verificarStock(10, 5)); 