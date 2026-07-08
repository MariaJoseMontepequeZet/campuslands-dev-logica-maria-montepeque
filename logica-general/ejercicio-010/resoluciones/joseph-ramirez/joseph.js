const procesarInstruccionesTurismo = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "cancelar operación", motivo: "Error: Metadatos del itinerario incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "confirmar reserva",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las instrucciones del viaje se procesaron con éxito."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarInstruccionesTurismo(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones nulas o vacías) ---");
console.log(procesarInstruccionesTurismo(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Itinerario de Vuelo Despejado) ---");
console.log(procesarInstruccionesTurismo(["aprobado", "aprobado"], "media", "procesar embarque"));