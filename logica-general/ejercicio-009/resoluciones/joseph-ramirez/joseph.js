const simularEstadosMiedo = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar simulador", motivo: "Error: Faltan metadatos esenciales en el catálogo." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "transmitir película",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la película se encuentra en un estado de transmisión óptimo."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(simularEstadosMiedo(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones nulas o vacías) ---");
console.log(simularEstadosMiedo(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Simulación de Transmisión Limpia) ---");
console.log(simularEstadosMundo = simularEstadosMiedo(["aprobado", "aprobado"], "media", "reproducir contenido"));