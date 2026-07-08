//Ejercicio 002: Porcentajes y Proporciones - Ranking de Fútbol Sala

function calcularRendimientoFutbolSala(partidosJugados, partidosGanados, partidosEmpatados) {
    
    // 1. Casteo Defensivo y Normalización Absoluta de tipos
    const jugados = Number(partidosJugados);
    const ganados = Number(partidosGanados);
    const empatados = Number(partidosEmpatados);

    if (isNaN(jugados) || isNaN(ganados) || isNaN(empatados) || jugados <= 0) {
        return {
            puntos_totales: 0,
            porcentaje_efectividad: 0,
            clasificacion: "Sin Registro",
            explicacion: "Error: No se pueden calcular proporciones si los partidos jugados son cero, negativos o inválidos."
        };
    }

    if (ganados < 0 || empatados < 0 || (ganados + empatados) > jugados) {
        return {
            puntos_totales: 0,
            porcentaje_efectividad: 0,
            clasificacion: "Inconsistencia",
            explicacion: "Error: Se detectaron valores negativos o la suma de partidos ganados y empatados supera las jornadas jugadas."
        };
    }

    // 2. Cálculo de métricas y proporciones con precisión aritmética uniforme
    const puntosObtenidos = (ganados * 3) + (empatados * 1);
    const puntosMaximosPosibles = jugados * 3;
    
    const porcentajeEfectividad = Math.round((puntosObtenidos / puntosMaximosPosibles) * 10000) / 100;

    // 3. Matriz de Clasificación de Rendimiento Estricta
    let clasificacion = "Desarrollo";
    if (porcentajeEfectividad >= 70) {
        clasificacion = "Elite";
    } else if (porcentajeEfectividad >= 40) {
        clasificacion = "Competitivo";
    }

    // 4. Estructura de Salida Estandarizada
    return {
        puntos_totales: puntosObtenidos,
        porcentaje_efectividad: porcentajeEfectividad,
        clasificacion: clasificacion,
        explicacion: `El equipo obtuvo ${puntosObtenidos} de ${puntosMaximosPosibles} puntos posibles, logrando una efectividad del ${porcentajeEfectividad}%.`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 002 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Buen Rendimiento",
        jugados: 10, ganados: 7, empatados: 2
    },
    {
        tipo: "Caso Borde (Guía) - Torneo No Iniciado",
        jugados: 0, ganados: 0, empatados: 0
    },
    {
        tipo: "Caso Crítico Detectado - Valores Negativos Encubiertos",
        jugados: 10, ganados: 12, empatados: -4
    },
    {
        tipo: "Caso Tolerancia a Fallos - Inputs como String desde UI",
        jugados: "10", ganados: "5", empatados: "1"
    }
];

pruebas.forEach(({ tipo, jugados, ganados, empatados }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(calcularRendimientoFutbolSala(jugados, ganados, empatados), null, 2));
});