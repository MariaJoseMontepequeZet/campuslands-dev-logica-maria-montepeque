const calcularPeleas = (numPeleadores) => {
    if (numPeleadores < 2) {
        return "Se necesitan al menos 2 peleadores para una pelea.";
    }
    const totalPeleas = (numPeleadores * (numPeleadores - 1)) / 2;
    return {
        participantes: numPeleadores,
        total_peleas: totalPeleas,
        explicacion: `Se aplicó la fórmula n(n-1)/2 para el formato todos contra todos.`
    };
};
console.log(calcularPeleas(4)); 
console.log(calcularPeleas(2)); 