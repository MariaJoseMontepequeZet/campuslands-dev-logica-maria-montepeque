//Calcula el puntaje final basado en bonos y penalizaciones.

const procesarPuntajesSciFi = (participantes, bono, penalizacion) => {
    if (!participantes || participantes.length === 0) {
        return "Error: No hay datos de participantes.";
    }

    const puntajesAjustados = participantes.map(p => {
        if (p > 20) return p + bono;
        if (p < 15) return p - penalizacion;
        return p;
    });

    const suma = puntajesAjustados.reduce((a, b) => a + b, 0);
    const promedio = suma / puntajesAjustados.length;

    return {
        puntaje_final: promedio.toFixed(2),
        clasificacion: promedio > 20 ? "competitivo" : "estándar",
        explicacion: "Se aplicaron bonos a valores > 20 y penalizaciones a valores < 15."
    };
};

// Ejemplo de prueba
const data = [12, 18, 25, 30];
console.log(procesarPuntajesSciFi(data, 8, 3));