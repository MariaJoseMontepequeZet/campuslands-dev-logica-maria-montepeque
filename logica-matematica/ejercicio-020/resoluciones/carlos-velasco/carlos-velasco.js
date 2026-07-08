const simularTiempoEspera = (numPedidos, tiempoBase, factorAgilidad) => {
    const tiempoTotal = (numPedidos * tiempoBase) * factorAgilidad;
    
    let categoria = "";
    if (tiempoTotal <= 15) categoria = "Servicio Express";
    else if (tiempoTotal <= 40) categoria = "Servicio Estándar";
    else categoria = "Alta Demanda";

    return {
        tiempo_estimado: `${tiempoTotal.toFixed(1)} minutos`,
        clasificacion: categoria,
        explicacion: `Para ${numPedidos} pedidos con ${tiempoBase} min/plato y factor ${factorAgilidad}.`
    };
};

console.log(simularTiempoEspera(5, 2, 0.8)); 
console.log(simularTiempoEspera(10, 5, 1.2)); 