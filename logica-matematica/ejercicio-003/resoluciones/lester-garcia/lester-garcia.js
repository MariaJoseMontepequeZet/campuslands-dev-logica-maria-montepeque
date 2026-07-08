let puntajes = [82, 76, 91, 87, 94];

let suma = 0;

for (let i = 0; i < puntajes.length; i++) {
    suma += puntajes[i];
}

let promedio = suma / puntajes.length;

puntajes.sort(function(a, b) {
    return a - b;
});

let mediana = puntajes[Math.floor(puntajes.length / 2)];

let categoria = "";

if (promedio >= 85) {
    categoria = "alto nivel";
} else {
    categoria = "nivel intermedio";
}

let explicacion = "se calculo el promedio y la mediana de los puntajes para evaluar el rendimiento.";

console.log("promedio:", promedio);
console.log("mediana:", mediana);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);