// Ejercicio 001 - Operaciones Aritméticas Controladas

function calcularPuntajeFinal(participantes, bono, penalizacion) {
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return { error: "El array de participantes no puede estar vacío." };
    }

    const suma = participantes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / participantes.length;

    const puntajeBase = Math.ceil(promedio);

    const puntajeFinal = puntajeBase + bono - penalizacion;

    const clasificacion = puntajeFinal >= 25 ? "competitivo" : "casual";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
}

// Pruebas

console.log("--- Caso Ejemplo ---");
console.log(calcularPuntajeFinal([12, 18, 25, 30], 8, 3));

console.log("\n--- Caso Inventado ---");
console.log(calcularPuntajeFinal([10, 15], 5, 2));