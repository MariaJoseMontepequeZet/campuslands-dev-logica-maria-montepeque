const detectarInconsistenciasPlaylist = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar playlist", motivo: "Error: Datos de entrada faltantes o inválidos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "reproducción limpia",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la metadata de la playlist no registra inconsistencias."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(detectarInconsistenciasPlaylist(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Parámetros vacíos) ---");
console.log(detectarInconsistenciasPlaylist(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Playlist sin Conflictos de Indexación) ---");
console.log(detectarInconsistenciasPlaylist(["aprobado", "aprobado"], "media", "reproducir aleatorio"));

