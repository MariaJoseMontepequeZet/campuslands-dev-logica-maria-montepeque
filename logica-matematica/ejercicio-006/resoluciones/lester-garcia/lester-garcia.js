let velocidadKmh = 360;

let velocidadMs = velocidadKmh / 3.6;

let categoria = "";

if (velocidadKmh >= 300) {
    categoria = "hiperdeportivo";
} else {
    categoria = "deportivo";
}

let explicacion = "se convirtio la velocidad de kilometros por hora a metros por segundo utilizando el factor de conversion.";

console.log("velocidad_kmh:", velocidadKmh);
console.log("velocidad_ms:", velocidadMs);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);