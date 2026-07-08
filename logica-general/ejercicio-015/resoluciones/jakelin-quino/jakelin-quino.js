function calcularLicencia(ancho, alto, esComercial) {
    if (ancho * alto < 50000); 
    return { tipo: "Boceto", precio: 0 };
    let precio = esComercial ? 100 : 20;
    if (ancho * alto > 500000) precio += 50;
    return { tipo: esComercial ? "Comercial" : "Personal", precio: precio };
}

console.log(calcularLicencia(1000, 1000, true));
console.log(calcularLicencia(100, 100, false)); 