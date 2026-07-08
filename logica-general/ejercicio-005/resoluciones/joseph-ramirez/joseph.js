const ordenarPrioridadesTaller = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "detener taller", motivo: "Error: Datos de entrada faltantes o inválidos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "agendar mantenimiento",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el vehículo está en condiciones normales para su revisión general."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(ordenarPrioridadesTaller(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Datos corruptos) ---");
console.log(ordenarPrioridadesTaller(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Cola de Trabajo Normal) ---");
console.log(ordenarPrioridadesTaller(["aprobado", "aprobado"], "baja", "revisión de rutina"));