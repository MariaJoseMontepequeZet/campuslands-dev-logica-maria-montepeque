
function clasificarAccion(items, prioridad) {
    if (items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (items.includes("pendiente")) {
        return {
            accion: "procesar pendiente",
            motivo: "la prioridad " + prioridad + " requiere atender tareas en espera."
        };
    }
    return {
        accion: "sin accion requerida",
        motivo: "todos los items estan aprobados o no requieren revision."
    };
}

// 1. Caso Ejemplo (Normal)
const itemsEjemplo = ["aprobado", "pendiente", "bloqueado"];
console.log("Caso Ejemplo:", clasificarAccion(itemsEjemplo, "alta"));

// 2. Caso Borde (Sin bloqueos ni pendientes)
const itemsBorde = ["aprobado", "aprobado"];
console.log("Caso Borde:", clasificarAccion(itemsBorde, "baja"));