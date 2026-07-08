function asignarTurno(tipoSoldadura, esUrgente) {
    if (esUrgente && tipoSoldadura === "TIG") {
        return { turno: 1, mensaje: "Asignado a estación de alta precisión (Prioridad TIG)." };
    }    
    if (esUrgente) {
        return { turno: 2, mensaje: "Asignado a estación de soldadura rápida." };
    }
    return { turno: 3, mensaje: "Asignado a turno de soldadura estándar." };
}

console.log(asignarTurno("TIG", true));
console.log(asignarTurno("MIG", false));