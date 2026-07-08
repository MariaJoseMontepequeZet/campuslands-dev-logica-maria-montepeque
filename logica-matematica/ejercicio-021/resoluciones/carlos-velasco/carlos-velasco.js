const calcularPR = (puntajeBase, racha, penalizacion) => {
    const bono = Math.min(racha * 10, 50);
    
    const totalPenalizacion = penalizacion * 25;
    
    let pr = puntajeBase + bono - totalPenalizacion;
    pr = Math.max(0, pr);
    
    let categoria = pr >= 150 ? "Élite" : pr >= 100 ? "Profesional" : "Novato";
    
    return {
        puntaje_final: pr,
        clasificacion: categoria,
        explicacion: `Base: ${puntajeBase}, Bono: +${bono}, Penalización: -${totalPenalizacion}.`
    };
};

console.log(calcularPR(120, 3, 0)); 
console.log(calcularPR(50, 0, 1)); 