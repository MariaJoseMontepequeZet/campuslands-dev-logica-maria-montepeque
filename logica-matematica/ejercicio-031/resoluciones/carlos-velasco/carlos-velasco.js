const calcularTotalCombates = (numPeleadores) => {
    if (numPeleadores < 2) {
        return { total_combates: 0, explicacion: "Se necesitan al menos 2 peleadores para un combate." };
    }

    const total = (numPeleadores * (numPeleadores - 1)) / 2;

    return {
        total_combates: total,
        explicacion: `Con ${numPeleadores} peleadores, cada uno se enfrenta a los otros ${numPeleadores - 1} rivales, dividido por 2 para evitar duplicar combates (A vs B = B vs A).`
    };
};
console.log(calcularTotalCombates(4)); 
console.log(calcularTotalCombates(1)); 