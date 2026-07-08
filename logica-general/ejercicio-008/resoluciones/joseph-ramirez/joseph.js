const procesarFlujoCienciaFiccion = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "detener flujo", motivo: "Error: Parámetros del catálogo incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "reproducir película",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el flujo de reproducción es secuencial y estable."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarFlujoCienciaFiccion(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas) ---");
console.log(procesarFlujoCienciaFiccion(null, "media", ""));

console.log("\n--- Prueba 3: Caso Propio (Transmisión Estelar Completada) ---");
console.log(procesarFlujoCienciaFiccion(["aprobado", "aprobado"], "baja", "verificar transmisión"));