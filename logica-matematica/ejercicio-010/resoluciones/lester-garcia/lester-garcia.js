let distancia = 348.76;
let consumo = 13.45;

let rendimiento = distancia / consumo;

let rendimientoRedondeado = Math.round(rendimiento);

let categoria = "";

if (rendimientoRedondeado >= 25) {
    categoria = "viaje eficiente";
} else {
    categoria = "viaje estandar";
}

let explicacion = "se calculo el rendimiento del viaje y se redondeo al entero mas cercano.";

console.log("rendimiento:", rendimiento);
console.log("rendimiento_redondeado:", rendimientoRedondeado);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);