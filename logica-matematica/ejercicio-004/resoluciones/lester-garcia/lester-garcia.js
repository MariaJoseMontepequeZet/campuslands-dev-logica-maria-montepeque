let precios = [7800, 9200, 8500, 11000, 9700];

let mayor = precios[0];
let menor = precios[0];

for (let i = 1; i < precios.length; i++) {
    if (precios[i] > mayor) {
        mayor = precios[i];
    }

    if (precios[i] < menor) {
        menor = precios[i];
    }
}

let rango = mayor - menor;

let categoria = "";

if (mayor >= 10000) {
    categoria = "inventario premium";
} else {
    categoria = "inventario estandar";
}

let explicacion = "se identificaron el precio maximo y minimo para calcular el rango de precios.";

console.log("precio_maximo:", mayor);
console.log("precio_minimo:", menor);
console.log("rango:", rango);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);