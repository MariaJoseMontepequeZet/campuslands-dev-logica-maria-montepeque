const sesion = {
    disenoAprobado: true,
    tintaDisponible: true,
    maquinaEsterilizada: false,
    clienteMayorEdad: true
};

let diagnostico = "";
let motivo = "";

if (!sesion.clienteMayorEdad) {
    diagnostico = "Error de autorización";
    motivo = "El cliente no cumple con la edad mínima requerida.";
} else if (!sesion.maquinaEsterilizada) {
    diagnostico = "Error de seguridad";
    motivo = "La máquina de tatuar no está esterilizada.";
} else if (!sesion.tintaDisponible) {
    diagnostico = "Error de materiales";
    motivo = "No hay tinta disponible para realizar el tatuaje.";
} else if (!sesion.disenoAprobado) {
    diagnostico = "Error de diseño";
    motivo = "El diseño aún no ha sido aprobado por el cliente.";
} else {
    diagnostico = "Sin errores";
    motivo = "La sesión puede iniciar porque todos los requisitos se cumplen.";
}

console.log("diagnostico:", diagnostico);
console.log("motivo:", motivo);