//Ejercicio 023: Promedios y Medianas - Análisis de Rendimiento en Esports

function analizarEstadisticasTorneo(puntajes) {
    // 1. Guardrail: Filtrado de datos válidos (Anti-NaN y Anti-TypeMismatch)
    if (!Array.isArray(puntajes)) {
        return { error: "El formato de entrada no es un arreglo válido." };
    }

    const puntajesValidos = puntajes
        .map(n => Number(n))
        .filter(n => Number.isFinite(n));

    if (puntajesValidos.length === 0) {
        return { error: "No se encontraron datos numéricos válidos para procesar." };
    }

    // 2. Cálculo del Promedio
    const sumaTotal = puntajesValidos.reduce((acc, val) => acc + val, 0);
    const promedio = sumaTotal / puntajesValidos.length;

    // 3. Cálculo de la Mediana
    const listaOrdenada = [...puntajesValidos].sort((a, b) => a - b);
    const mitad = Math.floor(listaOrdenada.length / 2);
    
    const mediana = listaOrdenada.length % 2 !== 0 
        ? listaOrdenada[mitad] 
        : (listaOrdenada[mitad - 1] + listaOrdenada[mitad]) / 2;

    // 4. Diagnóstico de Dispersión
    const diferencia = Math.abs(promedio - mediana);
    const nivelConsistencia = diferencia < (promedio * 0.2) ? "Consistente" : "Volátil";

    return {
        metrica: {
            promedio: Math.round(promedio * 100) / 100,
            mediana: mediana
        },
        diagnostico: {
            nivelConsistencia,
            observacion: `La diferencia absoluta de ${diferencia.toFixed(2)} indica un rendimiento ${nivelConsistencia.toLowerCase()}.`
        }
    };
}

console.log("--- Análisis de Rendimiento ---");
console.log(analizarEstadisticasTorneo([10, 20, 30, 40, 90, "error", null])); 
console.log(analizarEstadisticasTorneo([25, 26, 27, 28]));