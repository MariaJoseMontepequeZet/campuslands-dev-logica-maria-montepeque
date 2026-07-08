// ======================================
// Lógica General 001 - Clasificación por reglas
// Estudiante: Stefani Sánchez
// ======================================

function clasificar(items, prioridad) {

    // Validación
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "sin accion",
            motivo: "No se recibieron tareas."
        };
    }

    // Regla principal
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "La prioridad alta obliga a revisar primero los elementos bloqueados."
        };
    }

    // Segunda regla
    if (items.includes("pendiente")) {
        return {
            accion: "revisar pendiente",
            motivo: "No existen bloqueados prioritarios."
        };
    }

    // Tercera regla
    if (items.includes("aprobado")) {
        return {
            accion: "sin acciones pendientes",
            motivo: "Todos los elementos importantes ya fueron revisados."
        };
    }

    // Regla por defecto
    return {
        accion: "sin accion",
        motivo: "No se encontró una regla aplicable."
    };
}

// --------------------------
// Prueba 1
// --------------------------

const prueba1 = clasificar(
    ["aprobado", "pendiente", "bloqueado"],
    "alta"
);

console.log("PRUEBA 1");
console.log(prueba1);

// --------------------------
// Prueba 2 (caso borde)
// --------------------------

const prueba2 = clasificar([], "alta");

console.log("\nPRUEBA 2");
console.log(prueba2);