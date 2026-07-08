const buscarElementosHiperdeportivos = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "abortar búsqueda", motivo: "Error: Los parámetros de telemetría o lote están vacíos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "inspección finalizada",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el auto hiperdeportivo superó todas las pruebas del lote sin registrar alertas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(buscarElementosHiperdeportivos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Datos nulos o vacíos) ---");
console.log(buscarElementosHiperdeportivos(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Inspección Limpia del Hypercar) ---");
console.log(buscarElementosHiperdeportivos(["aprobado", "aprobado"], "media", "escanear motor"));