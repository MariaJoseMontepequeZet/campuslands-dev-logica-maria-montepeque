const calcularEfectividad = (ganados, empatados, perdidos) => {
    const totalPartidos = ganados + empatados + perdidos;
    if (totalPartidos === 0) return "Sin datos de partidos.";
    const efectividad = (ganados / totalPartidos) * 100;
    let categoria = "";
    if (efectividad >= 70) categoria = "Clasificado a Play-offs";
    else if (efectividad >= 40) categoria = "En zona media";
    else categoria = "Fuera de competencia";
    return {
        porcentaje: efectividad.toFixed(2) + "%",
        categoria: categoria,
        explicacion: `Efectividad calculada sobre ${totalPartidos} partidos jugados.`
    };
};
x
console.log(calcularEfectividad(8, 1, 1)); 
console.log(calcularEfectividad(0, 0, 0)); 