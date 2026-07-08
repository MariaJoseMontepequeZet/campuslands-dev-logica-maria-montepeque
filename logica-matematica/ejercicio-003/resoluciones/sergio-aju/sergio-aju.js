function analizarRendimiento(puntajes) {
    if (!puntajes || puntajes.length === 0) return "No hay datos.";

    const suma = puntajes.reduce((a, b) => a + b, 0);
    const promedio = suma / puntajes.length;

    const ordenados = [...puntajes].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    const mediana = ordenados.length % 2 !== 0 
        ? ordenados[mitad] 
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;

    return { promedio: promedio.toFixed(2), mediana };
}

console.log(analizarRendimiento([10, 20, 30, 40, 50])); 
console.log(analizarRendimiento([10, 20, 100]));      