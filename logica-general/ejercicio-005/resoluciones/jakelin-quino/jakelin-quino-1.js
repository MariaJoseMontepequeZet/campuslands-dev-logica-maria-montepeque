function gestionarTaller(vehiculo, esEmergencia, esClienteFrecuente) {
    if (esEmergencia) {
        return { orden: 1, accion: "Atender de inmediato", motivo: "Prioridad máxima por emergencia." };
    }    
    if (esClienteFrecuente) {
        return { orden: 2, accion: "Programar cita próxima", motivo: "Prioridad por fidelidad del cliente." };
    }
    return { orden: 3, accion: "Añadir a lista de espera", motivo: "Vehículo estándar sin prioridad." };
}

console.log(gestionarTaller("Camioneta", false, true));
console.log(gestionarTaller("Sedán", true, false));