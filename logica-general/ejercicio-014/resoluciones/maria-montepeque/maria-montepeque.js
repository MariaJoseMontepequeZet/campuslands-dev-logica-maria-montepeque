//Reto 014: Diagnóstico de errores - Tatuajes

function diagnosticarErroresTatuajes(items, prioridad, regla) {
    // 1. Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "pausar citas",
            motivo: "No se puede realizar un diagnóstico de bioseguridad sin una lista válida de insumos."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar bitacora",
            motivo: "Faltan parámetros críticos de control para procesar el diagnóstico del estudio."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para un lookup instantáneo O(1)
    const setInsumos = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setInsumos.has("bloqueado");
    const tienePendiente = setInsumos.has("pendiente");

    // 3. Matriz de Decisiones de Bioseguridad en Cascada
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "pausar citas",
            motivo: "Alerta de bioseguridad: Se identificaron herramientas o insumos críticos en estado bloqueado."
        };
    }

    if (tienePendiente) {
        return {
            accion: "verificar inventario",
            motivo: "Existen herramientas en estado pendiente que podrían comprometer la agenda del día."
        };
    }

    // 4. Estado de Operación Óptimo
    return {
        accion: "comenzar sesion",
        motivo: "El equipamiento e insumos cumplen con las normativas sanitarias y de logística vigentes."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 014 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción Preventiva de Bloqueo (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Colección Vacía",
        items: [], prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(diagnosticarErroresTatuajes(items, prioridad, regla), null, 2));
});