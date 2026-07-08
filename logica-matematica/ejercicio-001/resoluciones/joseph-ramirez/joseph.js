function procesarLogicaMatematica(participantes, bono, penalizacion) {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "invalido", explicacion: "Entradas corruptas o vacías." };
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
}

// === PRUEBAS DEL SISTEMA ===
console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarLogicaMatematica([12, 18, 25, 30], 8, 3)); 

console.log("\n--- Prueba 2: Caso Borde (Vacío) ---");
console.log(procesarLogicaMatematica([], 5, 2));

console.log("\n--- Prueba 3: Caso Propio (Bajo Rendimiento) ---");
console.log(procesarLogicaMatematica([5, 8, 10], 2, 4)); 