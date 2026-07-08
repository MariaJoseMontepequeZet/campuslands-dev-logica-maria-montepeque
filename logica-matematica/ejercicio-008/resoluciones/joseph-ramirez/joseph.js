const calcularPatronPuntuacion = (participantes, bono, penalizacion) => {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "inválido", explicacion: "Error: Datos cuantitativos corruptos." };
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
console.log(calcularPatronPuntuacion([12, 18, 25, 30], 8, 3)); 

console.log("\n--- Prueba 2: Caso Borde (Arreglos vacíos) ---");
console.log(calcularPatronPuntuacion([], 0, 0));

console.log("\n--- Prueba 3: Caso Propio (Calificaciones de Estreno Crítico) ---");
console.log(calcularPatronPuntuacion([22, 26, 28, 24], 6, 2)); 