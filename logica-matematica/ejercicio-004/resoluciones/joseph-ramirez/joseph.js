const calcularRangosMotos = (participantes, bono, penalizacion) => {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "inválido", explicacion: "Parámetros de stock corruptos." };
    }

    const sumaTotal = participantes.reduce((acc, curr) => acc + curr, 0);
    const promedioBase = sumaTotal / participantes.length;

    const puntajeFinal = Math.round(promedioBase + bono - penalizacion);

    const clasificacion = puntajeFinal >= 25 ? "competitivo" : puntajeFinal >= 15 ? "estándar" : "principiante";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");

console.log("\n--- Prueba 2: Caso Borde (Arreglo sin datos) ---");
console.log(calcularRangosMotos([], 5, 1));

console.log("\n--- Prueba 3: Caso Propio (Rango de Control Estándar) ---");
console.log(calcularRangosMotos([10, 15, 20], 4, 2)); 