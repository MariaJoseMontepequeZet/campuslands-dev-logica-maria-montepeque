const procesarPlaylistMusical = (participantes, bono, penalizacion) => {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "inválido", explicacion: "Datos de la secuencia corruptos." };
    }

    const sumaTotal = participantes.reduce((acc, curr) => acc + curr, 0);
    const promedioBase = sumaTotal / participantes.length;


    const clasificacion = puntajeFinal >= 25 ? "competitivo" : puntajeFinal >= 15 ? "estándar" : "principiante";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarPlaylistMusical([12, 18, 25, 30], 8, 3)); 

console.log("\n--- Prueba 2: Caso Borde (Secuencia vacía) ---");
console.log(procesarPlaylistMusical([], 0, 0));

console.log("\n--- Prueba 3: Caso Propio (Mix de Beats Estándar) ---");
console.log(procesarPlaylistMusical([15, 20, 18], 4, 2)); 