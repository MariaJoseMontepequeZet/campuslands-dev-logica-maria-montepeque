const salto = {
    altura: 3200,
    paracaidasAbierto: true,
    velocidad: 18,
    clima: "despejado"
};

let decision = "";
let motivo = "";

if (!salto.paracaidasAbierto) {
    decision = "Activar paracaídas de emergencia";
    motivo = "El paracaídas principal no está abierto.";
} else if (salto.clima !== "despejado") {
    decision = "Desviar el aterrizaje";
    motivo = "Las condiciones climáticas no son seguras.";
} else if (salto.velocidad > 25) {
    decision = "Reducir velocidad";
    motivo = "La velocidad de descenso supera el límite recomendado.";
} else {
    decision = "Continuar aterrizaje";
    motivo = "Todas las condiciones son adecuadas para completar el salto.";
}

console.log("decision:", decision);
console.log("motivo:", motivo);