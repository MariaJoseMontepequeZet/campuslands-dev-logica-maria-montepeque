const calcularCostoTatuaje = (ancho, alto, precioCm2, precioPerimetro) => {
    if (ancho <= 0 || alto <= 0) return "Dimensiones inválidas.";

    let area = ancho * alto;
    let perimetro = 2 * (ancho + alto);
    let costoBase = (area * precioCm2) + (perimetro * precioPerimetro);
    
    if (area < 5) {
        costoBase += 20;
    }

    return {
        costo_total: costoBase.toFixed(2),
        area: area,
        perimetro: perimetro,
        explicacion: "Cálculo basado en área y perímetro, incluyendo recargo mínimo si aplica."
    };
};

console.log(calcularCostoTatuaje(2, 2, 10, 5)); 
console.log(calcularCostoTatuaje(10, 10, 10, 5));