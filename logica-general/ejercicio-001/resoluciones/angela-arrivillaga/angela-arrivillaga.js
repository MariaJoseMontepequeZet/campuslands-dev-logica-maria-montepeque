function clasificarPorReglas(datosEntrada) {
    // Validación rapida por si vienen datos vacios o rotos
    if (!datosEntrada || !datosEntrada.items || !Array.isArray(datosEntrada.items)) {
        return {
            accion: "error",
            motivo: "Los datos de entrada no son válidos o están vacíos."
        };
    }

    const { items, prioridad, regla } = datosEntrada;

    // Prioridad alta y regla de bloqueado
    if (prioridad === "alta" && regla.includes("bloqueado")) {
        if (items.includes("bloqueado")) {
            return {
                accion: "revisar bloqueado",
                motivo: "la regla prioriza riesgos antes de tareas normales."
            };
        }
    }

    // Regla por si no se cumple la condición de bloqueado con alta prioridad
    return {
        accion: "procesar flujo normal",
        motivo: "No se detectaron elementos bloqueados con alta prioridad."
    };
}

// pruebas de la funcion
console.log("--- Prueba 1 (Caso Ejemplo) ---");
const entradaEj1 = {
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
};
console.log(clasificarPorReglas(entradaEj1));

console.log("\n--- Prueba 2 (Caso Borde - Sin bloqueados) ---");
const entradaBordeEj1 = {
    items: ["aprobado", "pendiente"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
};
console.log(clasificarPorReglas(entradaBordeEj1));