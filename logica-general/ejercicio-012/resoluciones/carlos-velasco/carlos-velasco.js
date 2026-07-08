const analizarEfectividad = (intentos, aciertos) => {
    if (intentos === 0) return "No hay datos de intentos.";
    if (aciertos > intentos) return "Error: Los aciertos no pueden superar los intentos.";

    const probabilidad = aciertos / intentos;
    const porcentaje = (probabilidad * 100).toFixed(1);

    let clasificacion = "";
    if (probabilidad >= 0.7) clasificacion = "Jugador de élite";
    else if (probabilidad >= 0.5) clasificacion = "Jugador competitivo";
    else clasificacion = "Requiere entrenamiento";

    return {
        efectividad: `${porcentaje}%`,
        clasificacion: clasificacion,
        explicacion: `De ${intentos} intentos, tuviste ${aciertos} aciertos.`
    };
};

console.log(analizarEfectividad(10, 8)); 
console.log(analizarEfectividad(10, 3)); 