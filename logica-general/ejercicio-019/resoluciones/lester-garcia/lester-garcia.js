const inventario = [
    { compuesto: "H2O", cantidad: 12 },
    { compuesto: "NaCl", cantidad: 0 },
    { compuesto: "CO2", cantidad: 8 }
];

let estado = "";
let motivo = "";

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].cantidad === 0) {
        estado = inventario[i].compuesto;
        motivo = "El compuesto no tiene existencias y debe reponerse.";
        break;
    }
}

if (estado === "") {
    estado = "Inventario completo";
    motivo = "Todos los compuestos tienen existencias disponibles.";
}

console.log("estado:", estado);
console.log("motivo:", motivo);