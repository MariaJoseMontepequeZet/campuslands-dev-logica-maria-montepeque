//Analizador de Patrones de Puntuación 

const calcularPuntajeSciFi = (participantes, bono, penalizacion) => {
    // 1. Validación de entrada
    if (!participantes || participantes.length === 0) {
        return { error: "No hay datos de participantes." };
    }

    // 2. Procesamiento
    const sumaBase = participantes.reduce((acc, val) => acc + val, 0);
    
    const puntajeFinal = sumaBase + bono - penalizacion;

    let clasificacion = (puntajeFinal > 50) ? "Competitivo" : "En desarrollo";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base ${sumaBase} + bono ${bono} - penalización ${penalizacion}.`
    };
};

// Prueba del ejercicio
const participantes = [12, 18, 25, 30];
console.log(calcularPuntajeSciFi(participantes, 8, 3));