const proyecto = {
    clientePremium: true,
    presupuesto: 18000,
    renderSolicitado: true
};

let servicio = "";
let motivo = "";

if (proyecto.clientePremium && proyecto.renderSolicitado) {
    servicio = "render fotorrealista";
    motivo = "El cliente es premium y solicitó un render de alta calidad.";
} else if (!proyecto.clientePremium && proyecto.renderSolicitado) {
    servicio = "render estandar";
    motivo = "El cliente solicitó un render, pero no posee una cuenta premium.";
} else if (proyecto.presupuesto < 10000) {
    servicio = "modelo basico";
    motivo = "El presupuesto disponible solo permite un modelo básico.";
} else {
    servicio = "modelo arquitectonico";
    motivo = "El proyecto cumple las condiciones para un modelo arquitectónico estándar.";
}

console.log("servicio:", servicio);
console.log("motivo:", motivo);