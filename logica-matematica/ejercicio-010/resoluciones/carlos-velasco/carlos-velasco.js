const calcularPrecioFinal = (precioBase, impuesto, cambio) => {
    const precioConImpuesto = precioBase * (1 + impuesto);
    
    const precioExtranjero = precioConImpuesto * cambio;
    
    const precioFinal = Math.round(precioExtranjero);

    return {
        precio_final: precioFinal,
        moneda: "USD",
        explicacion: `Se aplicó un impuesto del ${impuesto * 100}%, se convirtió a la moneda destino y se redondeó al entero más próximo.`
    };
};

console.log(calcularPrecioFinal(100, 0.15, 1.05)); 
console.log(calcularPrecioFinal(50, 0.10, 0.90));  