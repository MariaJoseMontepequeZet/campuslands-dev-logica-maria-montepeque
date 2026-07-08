function calcularPuntaje(participantes, bono, penalizacion) {

    const totalBase = participantes.reduce((acc, curr) => acc + curr, 0);
    
    const puntajeFinal = totalBase + bono - penalizacion;

    let clasificacion = puntajeFinal > 20 ? "competitivo" : "basico";
    
    return { puntajeFinal, clasificacion };
}

console.log(calcularPuntaje([12, 18, 25, 30], 8, 3));