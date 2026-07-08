const proyecto = {
    tipoCuenta: "premium",
    formato: "PSD",
    capas: 15,
    almacenamientoDisponible: 500
};

let resultado = "";
let motivo = "";

if (proyecto.tipoCuenta !== "premium") {
    resultado = "Exportación rechazada";
    motivo = "Solo las cuentas premium pueden exportar archivos PSD.";
} else if (proyecto.formato !== "PSD") {
    resultado = "Exportación rechazada";
    motivo = "El formato solicitado no está permitido.";
} else if (proyecto.capas > 20) {
    resultado = "Exportación rechazada";
    motivo = "El proyecto supera el límite de capas permitido.";
} else if (proyecto.almacenamientoDisponible < 100) {
    resultado = "Exportación rechazada";
    motivo = "No hay suficiente espacio de almacenamiento.";
} else {
    resultado = "Exportación aprobada";
    motivo = "El proyecto cumple todas las reglas de negocio.";
}

console.log("resultado:", resultado);
console.log("motivo:", motivo);