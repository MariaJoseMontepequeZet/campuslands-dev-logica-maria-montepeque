// Ejercicio 025 - Taller Mecánico

function asignarPrioridadReparacion(sistemaVehiculo, tipoCliente) {
    let nivelPrioridad = "";
    let accion = "";

    if (sistemaVehiculo === "frenos" || sistemaVehiculo === "motor" || sistemaVehiculo === "transmision") {
        nivelPrioridad = "Alta";
        accion = "Asignar técnico especialista y trasladar al área de mecánica pesada inmediatamente.";
    } 
    else if (tipoCliente === "flotilla") {
        nivelPrioridad = "Media";
        accion = "Programar en el siguiente bloque de servicio disponible para mantener el contrato comercial.";
    } 
    else {
        nivelPrioridad = "Baja";
        accion = "Agendar cita para revisión de rutina o área de estética y pintura.";
    }

    return { nivelPrioridad, accion };
}

// Pruebas

console.log("--- Prueba: Caso Crítico (Alta prioridad) ---");
console.log(asignarPrioridadReparacion("transmision", "regular"));

console.log("\n--- Prueba: Caso Comercial (Media prioridad) ---");
console.log(asignarPrioridadReparacion("suspension", "flotilla"));

console.log("\n--- Prueba: Caso Normal (Baja prioridad) ---");
console.log(asignarPrioridadReparacion("carroceria", "regular"));