const calcularTiempoDibujo = (pixelesM, velocidad, complejidad) => {
    const pixelesTotales = pixelesM * 1000000;
    const tiempoMinutos = (pixelesTotales / velocidad) * complejidad;
    
    const horas = Math.floor(tiempoMinutos / 60);
    const minutos = Math.round(tiempoMinutos % 60);
    
    let categoria = "";
    if (tiempoMinutos < 60) categoria = "Rápido";
    else if (tiempoMinutos < 240) categoria = "Estándar";
    else categoria = "Extenso";

    return {
        tiempo_estimado: `${horas}h ${minutos}m`,
        clasificacion: categoria,
        explicacion: `Basado en ${pixelesM}M px y una velocidad de ${velocidad} px/min.`
    };
};
console.log(calcularTiempoDibujo(2, 50000, 1.2)); 
console.log(calcularTiempoDibujo(5, 20000, 2.0)); 