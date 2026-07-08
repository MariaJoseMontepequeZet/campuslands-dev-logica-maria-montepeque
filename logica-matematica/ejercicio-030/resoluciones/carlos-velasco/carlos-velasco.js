const calcularCostoPorPersona = (costoTotal, numPersonas, tasaImpuesto) => {
    if (numPersonas <= 0) return "Error: El grupo debe ser de al menos 1 persona.";

    const totalConImpuesto = costoTotal * (1 + tasaImpuesto);
    const costoPorPersona = Math.ceil(totalConImpuesto / numPersonas);

    return {
        costo_por_persona: costoPorPersona,
        explicacion: `Total con IVA: ${totalConImpuesto.toFixed(2)}. Dividido entre ${numPersonas} personas y redondeado al entero superior.`
    };
};

console.log(calcularCostoPorPersona(1000, 3, 0.19)); 
console.log(calcularCostoPorPersona(500, 5, 0.10));  