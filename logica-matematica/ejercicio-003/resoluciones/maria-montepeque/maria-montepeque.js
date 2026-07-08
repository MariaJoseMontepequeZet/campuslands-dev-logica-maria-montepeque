//Ejercicio 003: Promedios y Medianas - Torneo de eSports

function analizarTorneoEsports(partidas) {
    // 1. Mantiene el formato del objeto de salida ante fallos
    if (!Array.isArray(partidas) || partidas.length === 0) {
        return {
            promedio: 0,
            mediana: 0,
            clasificacion: "Sin Datos"
        };
    }

    const partidasLimpias = partidas
        .map(p => Number(p))
        .filter(p => !isNaN(p));

    if (partidasLimpias.length === 0) {
        return {
            promedio: 0,
            mediana: 0,
            clasificacion: "Datos Inválidos"
        };
    }

    // 2. Cálculo de la Media Aritmética pura (Sin mutación de String a número)
    const sumaTotal = partidasLimpias.reduce((acumulador, puntaje) => acumulador + puntaje, 0);
    const promedio = Math.round((sumaTotal / partidasLimpias.length) * 100) / 100;

    // 3. Cálculo de la Mediana mediante ordenamiento inmutable
    const partidasOrdenadas = [...partidasLimpias].sort((a, b) => a - b);
    const mitad = Math.floor(partidasOrdenadas.length / 2);
    
    let mediana;
    if (partidasOrdenadas.length % 2 !== 0) {
        mediana = partidasOrdenadas[mitad];
    } else {
        const calculoMediana = (partidasOrdenadas[mitad - 1] + partidasOrdenadas[mitad]) / 2;
        mediana = Math.round(calculoMediana * 100) / 100;
    }

    // 4. Matriz de Clasificación Inclusiva 
    const clasificacion = mediana >= promedio ? "Consistente" : "Volátil";

    // 5. Retorno Seguro
    return {
        promedio,
        mediana,
        clasificacion
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 003 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Outlier Alto",
        partidas: [10, 15, 100]
    },
    {
        tipo: "Caso Borde (Guía) - Arreglo Estructural Vacío",
        partidas: []
    },
    {
        tipo: "Caso Crítico Detectado - Rendimiento Perfecto Simétrico (Varianza Cero)",
        partidas: [25, 25, 25, 25]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Datos Híbridos/Corruptos",
        partidas: ["10", undefined, 30, "texto", 20]
    }
];

pruebas.forEach(({ tipo, partidas }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarTorneoEsports(partidas), null, 2));
});