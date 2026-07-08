const tomarDecisionTorneo = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender decisión", motivo: "Error: Datos de entrada insuficientes para resolver el flujo." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "autorizar flujo",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el estado del torneo es estable y avanza de forma normal."
    };
};

// === PRUEBAS DEL SISTEMA ===
console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(tomarDecisionTorneo(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas vacías) ---");
console.log(tomarDecisionTorneo([], "", "evaluar"));

console.log("\n--- Prueba 3: Caso Propio (Torneo Libre de Conflictos) ---");
console.log(tomarDecisionTorneo(["aprobado", "aprobado"], "baja", "validar brackets"));