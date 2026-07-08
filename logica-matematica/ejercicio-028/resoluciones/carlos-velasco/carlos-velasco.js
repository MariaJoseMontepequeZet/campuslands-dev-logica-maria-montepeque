const calcularPuntajeSaga = (criticas, bono, penalizacion) => {
    if (criticas.length === 0) return "Error: No hay críticas registradas.";

    const suma = criticas.reduce((a, b) => a + b, 0);
    const promedioBase = suma / criticas.length;

    const puntajeFinal = promedioBase + bono - penalizacion;
    let clasificacion = "";
    if (puntajeFinal >= 8) clasificacion = "Obra maestra";
    else if (puntajeFinal >= 5) clasificacion = "Buena producción";
    else clasificacion = "Cine de culto (o fracaso)";

    return {
        puntaje_final: puntajeFinal.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Promedio base de ${promedioBase.toFixed(2)} más bono de ${bono} menos penalización de ${penalizacion}.`
    };
};
console.log(calcularPuntajeSaga([7, 8, 9], 2, 1)); 
console.log(calcularPuntajeSaga([4, 5], 0, 2));   