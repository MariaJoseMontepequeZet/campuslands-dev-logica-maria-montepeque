let canciones = 8;
let incremento = 2;

let secuencia = [];

for (let i = 1; i <= canciones; i++) {
    secuencia.push(i * incremento);
}

let ultimoValor = secuencia[secuencia.length - 1];

let estado = "";

if (ultimoValor >= 16) {
    estado = "playlist completa";
} else {
    estado = "playlist corta";
}

let explicacion = "se genero una secuencia numerica aumentando la cantidad indicada en cada posicion.";

console.log("secuencia:", secuencia);
console.log("ultimo_valor:", ultimoValor);
console.log("estado:", estado);
console.log("explicacion:", explicacion);