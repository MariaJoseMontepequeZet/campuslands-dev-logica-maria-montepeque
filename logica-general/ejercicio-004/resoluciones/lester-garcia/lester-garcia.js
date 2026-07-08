let marca = "Yamaha";
let modelo = 2022;
let disponible = true;

let resultado = "";

if (disponible && modelo >= 2020) {
    resultado = "La moto está disponible para la venta.";
} else {
    resultado = "La moto no está disponible para la venta.";
}

console.log("Marca:", marca);
console.log("Modelo:", modelo);
console.log("Disponible:", disponible);
console.log("Resultado:", resultado);