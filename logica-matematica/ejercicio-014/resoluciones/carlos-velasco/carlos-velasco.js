/**
 * Calcula el costo de un tatuaje basado en sus dimensiones.
 */
const calcularCostoTatuaje = (ancho, alto, costoCm2, costoPExtra) => {
    const area = ancho * alto;
    const perimetro = 2 * (ancho + alto);
    let costoTotal = area * costoCm2;
    if (perimetro > 30) {
        costoTotal += (perimetro * costoPExtra);
    }
    return {
        area: `${area} cm2`,
        perimetro: `${perimetro} cm`,
        costo_total: `$${costoTotal.toFixed(2)}`,
        explicacion: `Costo calculado por área más recargo por perímetro ${perimetro > 30 ? 'aplicado' : 'no aplicado'}.`
    };
};
console.log(calcularCostoTatuaje(5, 4, 10, 2)); 
console.log(calcularCostoTatuaje(10, 10, 10, 2)); 