const analizarPuntuacion = (calificaciones) => {
    if (calificaciones.length === 0) return "Sin calificaciones disponibles.";

    const suma = calificaciones.reduce((acc, val) => acc + val, 0);
    const promedio = suma / calificaciones.length;

    let clasificacion = "";
    if (promedio >= 8.5) clasificacion = "Película de Culto";
    else if (promedio >= 6.0) clasificacion = "Éxito Comercial";
    else clasificacion = "Poco valorada";

    return {
        puntaje_final: promedio.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Promedio calculado de ${calificaciones.length} críticas.`
    };
};

console.log(analizarPuntuacion([9, 8, 9, 9])); 
console.log(analizarPuntuacion([5, 4, 3]));    