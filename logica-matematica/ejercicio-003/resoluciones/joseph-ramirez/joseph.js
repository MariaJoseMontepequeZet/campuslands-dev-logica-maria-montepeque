const calcularMetricasEsports = (participantes, bono, penalizacion) => {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "inválido", explicacion: "Parámetros corruptos o vacíos." };
    }

    const sumaTotal = participantes.reduce((acc, curr) => acc + curr, 0);
    const promedio = sumaTotal / participantes.length;

    const puntajeFinal = Math.round(promedio + bono - penalizacion);

    const clasificacion = puntajeFinal >= 25 ? "competitivo" : puntajeFinal >= 15 ? "estándar" : "principiante";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(calcularMetricasEsports([12, 18, 25, 30], 8, 3)); 
console.log("\n--- Prueba 2: Caso Borde (Arreglo sin datos) ---");
console.log(calcularMetricasEsports([], 10, 5));

console.log("\n--- Prueba 3: Caso Propio (Rendimiento Crítico) ---");
console.log(calcularMetricasEsports([10, 12, 14], 2, 5)); 