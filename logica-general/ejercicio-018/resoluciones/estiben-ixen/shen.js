/**
 * Determina si el operario puede tomar el turno según su certificación.
 */
function asignarTurno(operario) {
    const requisitos = {
        "Crítico": 3,
        "Estructural": 2,
        "Mantenimiento": 1
    };

    const nivelRequerido = requisitos[operario.tipoTrabajo];

    if (operario.nivelCertificacion >= nivelRequerido) {
        return { operario: operario.nombre, status: "APROBADO", turno: "Inmediato" };
    } else {
        return { operario: operario.nombre, status: "BLOQUEADO", turno: "Espera/Capacitación" };
    }
}

// --- Casos de Prueba ---
const listaEspera = [
    { nombre: "Carlos", nivelCertificacion: 3, tipoTrabajo: "Crítico" },       // Aprobado
    { nombre: "Ana", nivelCertificacion: 1, tipoTrabajo: "Estructural" },    // Bloqueado
    { nombre: "Pedro", nivelCertificacion: 2, tipoTrabajo: "Estructural" }   // Aprobado
];

console.log("--- Gestión de Turnos (Soldadura) ---");
listaEspera.forEach(op => console.log(asignarTurno(op)));