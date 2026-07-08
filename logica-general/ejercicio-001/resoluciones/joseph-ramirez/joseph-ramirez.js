function clasificarItemsPorRegla(items, prioridad, regla) {
    if (!items?.length || !prioridad || !regla) { 
        return { accion: "error", motivo: "Faltan datos de entrada esenciales." }; 
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esUrgente ? "atender pendiente urgente" : items.includes("aprobado") ? "archivar aprobado" : "mantener en observación",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esUrgente ? "prioridad alta detectada en cola de espera competitiva." : items.includes("aprobado") ? "el ítem completó el flujo normativo correctamente." : "ninguna regla coincide."
    };
}

// === PRUEBAS RÁPIDAS ===
console.log(clasificarItemsPorRegla(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(clasificarItemsPorRegla([], "baja", "")); 
console.log(clasificarItemsPorRegla(["aprobado", "pendiente"], "alta", "atender según prioridad")); 