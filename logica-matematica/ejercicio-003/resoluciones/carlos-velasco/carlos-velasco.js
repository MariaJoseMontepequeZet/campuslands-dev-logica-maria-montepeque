const analizarRendimiento = (partidas) => {
    if (partidas.length === 0) return "Sin datos";

    const suma = partidas.reduce((a, b) => a + b, 0);
    const promedio = suma / partidas.length;

    const ordenadas = [...partidas].sort((a, b) => a - b);
    const mitad = Math.floor(ordenadas.length / 2);
    const mediana = ordenadas.length % 2 !== 0 
        ? ordenadas[mitad] 
        : (ordenadas[mitad - 1] + ordenadas[mitad]) / 2;

    const clasificacion = mediana > promedio ? "Consistente" : "Volátil";

    return { promedio, mediana, clasificacion };
};

console.log(analizarRendimiento([10, 20, 30])); 
console.log(analizarRendimiento([10, 15, 100])); 