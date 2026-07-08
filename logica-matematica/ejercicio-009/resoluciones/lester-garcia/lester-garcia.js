let duracion = 126;

let residuo = duracion % 10;

let estado = "";

if (residuo === 0) {
    estado = "duracion exacta";
} else {
    estado = "duracion ajustada";
}

let explicacion = "se utilizo el operador modulo para verificar si la duracion es divisible entre 10.";

console.log("duracion:", duracion);
console.log("residuo:", residuo);
console.log("estado:", estado);
console.log("explicacion:", explicacion);