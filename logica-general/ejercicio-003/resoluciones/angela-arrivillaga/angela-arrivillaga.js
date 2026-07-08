function tomarDecisionTorneo(datosEntrada) {
    if (!datosEntrada) return { accion: "ignorar", motivo: "Sin datos." };

    const { items, prioridad } = datosEntrada;

    // si detectamos un bloqueo interceptamos el flujo
    if (items && items.includes("bloqueado") && prioridad === "alta") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // si esta pendiente pero la prioridad es baja, se puede posponer
    if (items && items.includes("pendiente") && prioridad === "baja") {
        return {
            accion: "esperar",
            motivo: "Baja prioridad, se puede resolver en la siguiente ronda."
        };
    }

    return {
        accion: "continuar torneo",
        motivo: "No existen alertas críticas de riesgo activas."
    };
}

// prueba de la funcion
console.log("\n--- Prueba 1 (Caso Ejemplo) ---");
console.log(tomarDecisionTorneo({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Prueba 2 (Caso Borde - Todo pendiente con baja prioridad) ---");
console.log(tomarDecisionTorneo({
    items: ["pendiente"],
    prioridad: "baja",
    regla: "revisar pendientes luego"
}));