//Calcula el costo total de un paquete turístico.

const calcularCostoTurismo = (tarifas) => {
    if (!tarifas || tarifas.length === 0) return "No hay tarifas registradas.";

    const tasaImpuesto = 0.16;

    const resultados = tarifas.map(tarifa => {
        const total = tarifa * (1 + tasaImpuesto);
        return parseFloat(total.toFixed(2));
    });

    const sumaTotal = resultados.reduce((a, b) => a + b, 0);

    return {
        detalles: resultados,
        totalGeneral: sumaTotal.toFixed(2),
        moneda: "USD"
    };
};

// Prueba
console.log(calcularCostoTurismo([100.50, 250.75, 45.20]));