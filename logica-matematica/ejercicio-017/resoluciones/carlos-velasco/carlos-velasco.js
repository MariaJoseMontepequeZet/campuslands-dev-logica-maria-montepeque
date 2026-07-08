const calcularRankingRendimiento = (tiempos, excelente, regular) => {
    if (tiempos.length === 0) return "No hay datos para procesar.";

    const suma = tiempos.reduce((acc, t) => acc + t, 0);
    const promedio = suma / tiempos.length;

    let clasificacion = "";
    if (promedio <= excelente) clasificacion = "Eficiencia Alta";
    else if (promedio <= regular) clasificacion = "Eficiencia Media";
    else clasificacion = "Bajo Rendimiento";

    return {
        promedio: `${promedio.toFixed(2)} min`,
        clasificacion: clasificacion,
        explicacion: `El promedio de ${tiempos.length} artistas se categoriza según los umbrales definidos.`
    };
};

console.log(calcularRankingRendimiento([45, 55, 60], 50, 70)); 
console.log(calcularRankingRendimiento([120, 150], 50, 70));   