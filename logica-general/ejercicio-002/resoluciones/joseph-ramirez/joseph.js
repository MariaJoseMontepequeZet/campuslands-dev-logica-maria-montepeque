const procesarRankingFutbol = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "rechazar registro", motivo: "Error: Datos de entrada incompletos o vacíos." };
    }

    const reglaMin = regla.toLowerCase();
    
    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "procesar normal",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "datos validados correctamente para el ranking."
    };
};

// === PRUEBAS DEL SISTEMA ===
console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarRankingFutbol(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Datos nulos o corruptos) ---");
console.log(procesarRankingFutbol(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Fútbol Sala sin riesgos) ---");
console.log(procesarRankingFutbol(["aprobado", "aprobado"], "media", "listar tabla general"));