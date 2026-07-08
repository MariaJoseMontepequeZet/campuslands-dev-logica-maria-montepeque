const filtrarInventarioMotos = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar inventario", motivo: "Error: Faltan parámetros esenciales de entrada." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "liberar stock",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las motos cumplen las condiciones normales de salida."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(filtrarInventarioMotos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Datos nulos o vacíos) ---");
console.log(filtrarInventarioMotos(null, "", "filtrar"));

console.log("\n--- Prueba 3: Caso Propio (Inventario de Motos Despejado) ---");
console.log(filtrarInventarioMotos(["aprobado", "aprobado"], "baja", "verificar stock listo"));