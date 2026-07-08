const calcularEfectividad = (jugados, ganados, empatados) => {
    if (jugados === 0) return "Error: El número de partidos jugados debe ser mayor a 0.";

    const puntos = ganados + (empatados * 0.5);
    const porcentaje = (puntos / jugados) * 100;

    let categoria = "";
    if (porcentaje >= 80) categoria = "Elite";
    else if (porcentaje >= 50) categoria = "Competitivo";
    else categoria = "En desarrollo";

    return {
        porcentaje_efectividad: `${porcentaje.toFixed(2)}%`,
        clasificacion: categoria,
        explicacion: `Basado en ${ganados} victorias y ${empatados} empates de ${jugados} juegos.`
    };
};

console.log(calcularEfectividad(10, 8, 2));
console.log(calcularEfectividad(10, 2, 2)); 