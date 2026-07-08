//Ejercicio 001: Operaciones Aritméticas Controladas

function calcularPuntajeCompetitivo(participantes, bono, penalizacion) {
    // 1. Casos Borde de Entrada
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "descalificado",
            explicacion: "Error: No se registraron participantes activos en el equipo."
        };
    }

    const bonoLimpio = Number(bono) || 0;
    const penalizacionLimpia = Number(penalizacion) || 0;

    // 2. Cálculo del Promedio Aritmético con filtrado preventivo de tipos
    const participantesNumeros = participantes.map(p => Number(p) || 0);
    const sumaTotal = participantesNumeros.reduce((acumulador, puntaje) => acumulador + puntaje, 0);
    const promedio = sumaTotal / participantesNumeros.length;

    // 3. Operación Aritmética Controlada Math.round()
    const puntajeFinal = Math.round(promedio + bonoLimpio - penalizacionLimpia);

    // 4. Matriz de Clasificación Simétrica 
    let clasificacion;
    if (puntajeFinal < 0) {
        clasificacion = "penalizado";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "casual"; 
    }

    // 5. Estructura de salida estandarizada
    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se calculó el promedio base (${promedio.toFixed(1)}), se sumó el bono (+${bonoLimpio}) y se restó la penalización (-${penalizacionLimpia}).`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 001 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo README",
        participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3
    },
    {
        tipo: "Caso Crítico Detectado - Fuga de Penalización Intermedia (Puntaje -5)",
        participantes: [5, 5], bono: 0, penalizacion: 10
    },
    {
        tipo: "Caso Borde - Colección Vacía",
        participantes: [], bono: 5, penalizacion: 2
    },
    {
        tipo: "Caso Tolerancia a Fallos - Payload Incompleto u Omitido",
        participantes: [10, 20], bono: undefined, penalizacion: null
    }
];

pruebas.forEach(({ tipo, participantes, bono, penalizacion }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(calcularPuntajeCompetitivo(participantes, bono, penalizacion), null, 2));
});