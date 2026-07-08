const calcularTiempoDibujo = (totalTrazos, trazosPorMinuto, factorComplejidad) => {
    if (trazosPorMinuto <= 0) return "Velocidad inválida.";

    const tiempoFinal = (totalTrazos / trazosPorMinuto) * factorComplejidad;
    const esGranEscala = tiempoFinal > 480;

    return {
        tiempo_total_minutos: tiempoFinal.toFixed(2),
        clasificacion: esGranEscala ? "Proyecto de gran escala" : "Proyecto estándar",
        explicacion: `Calculado con ${totalTrazos} trazos a ${trazosPorMinuto} t/min y factor de ${factorComplejidad}.`
    };
};

console.log(calcularTiempoDibujo(1000, 50, 1.5));
console.log(calcularTiempoDibujo(200, 100, 1.0));