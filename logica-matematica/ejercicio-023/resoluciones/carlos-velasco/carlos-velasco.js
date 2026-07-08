const analizarRendimiento = (puntajes) => {
    if (!puntajes || puntajes.length === 0) return "No hay datos.";

    const suma = puntajes.reduce((a, b) => a + b, 0);
    const promedio = suma / puntajes.length;

    const ordenados = [...puntajes].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    const mediana = ordenados.length % 2 !== 0 
        ? ordenados[mitad] 
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;

    let clasificacion = (promedio > mediana + 10) 
        ? "Dependiente de estrellas" 
        : "Equipo equilibrado";

    return {
        promedio: promedio.toFixed(2),
        mediana: mediana,
        clasificacion: clasificacion
    };
};

console.log(analizarRendimiento([10, 20, 30, 40, 90])); 
console.log(analizarRendimiento([20, 25, 30, 35]));   