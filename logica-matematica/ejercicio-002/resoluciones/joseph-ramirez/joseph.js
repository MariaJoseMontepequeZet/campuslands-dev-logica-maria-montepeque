const procesarRendimientoFutbol = (participantes, bono, penalizacion) => {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "inválido", explicacion: "Entradas corruptas." };
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

// === PRUEBAS DEL RETO ===
console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarRendimientoFutbol([12, 18, 25, 30], 8, 3)); 

console.log("\n--- Prueba 2: Caso Borde (Arreglo vacío) ---");
console.log(procesarRendimientoFutbol([], 0, 0));

console.log("\n--- Prueba 3: Caso Propio (Rendimiento Alto Proporcional) ---");
console.log(procesarRendimientoFutbol([30, 35, 40], 5, 2)); 