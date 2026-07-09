//Analizador de secuencias de puntajes para playlist musical.
const calcularPuntajePlaylist = (participantes, bono, penalizacion) => {
    if (!participantes || participantes.length === 0) return "No hay participantes.";

    const resultados = participantes.map(p => {
        if (p > 20) return p + bono;
        if (p < 15) return p - penalizacion;
        return p;
    });

    const sumaTotal = resultados.reduce((a, b) => a + b, 0);
    const promedio = sumaTotal / resultados.length;

    return {
        puntajesFinales: resultados,
        promedioFinal: promedio.toFixed(2),
        clasificacion: promedio > 20 ? "competitivo" : "estándar"
    };
};

// Pruebas
console.log(calcularPuntajePlaylist([12, 18, 25, 30], 8, 3));
console.log(calcularPuntajePlaylist([], 8, 3));