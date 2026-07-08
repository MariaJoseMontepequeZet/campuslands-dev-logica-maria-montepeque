function procesarReserva(turista) {
    // 1. Validaciones básicas de entrada
    if (!turista.nombre || turista.presupuesto === undefined) {
        return "Error: Datos del turista incompletos.";
    }

    if (turista.documentosEnRegla === false) {
        return `Acción: Denegar reserva. Motivo: El turista ${turista.nombre} no tiene los documentos en regla.`;
    }

    const costoDestino = turista.destino === "Europa" ? 2000 : 800;

    if (turista.presupuesto < costoDestino) {
        return `Acción: Denegar reserva. Motivo: Presupuesto insuficiente para ${turista.destino}.`;
    }

    // Regla: Si cumple todo, se aprueba
    return `Acción: Aprobar reserva. Motivo: El turista ${turista.nombre} cumple con los requisitos para viajar a ${turista.destino}.`;
}

// Pruebas del sistema
const turistaA = { nombre: "Juan", presupuesto: 2500, destino: "Europa", documentosEnRegla: true };
const turistaB = { nombre: "Ana", presupuesto: 500, destino: "Europa", documentosEnRegla: true };
const turistaC = { nombre: "Pedro", presupuesto: 1000, destino: "Latam", documentosEnRegla: false };

console.log(procesarReserva(turistaA)); // Debería aprobar
console.log(procesarReserva(turistaB)); // Debería rechazar por presupuesto
console.log(procesarReserva(turistaC)); // Debería rechazar por documentos