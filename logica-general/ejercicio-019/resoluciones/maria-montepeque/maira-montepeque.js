//Reto 019: Inventarios lógicos - Fórmulas químicas

function gestionarInventarioQuimico(items, prioridad, regla) {
    // 1. Guardrail / Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "congelar laboratorio",
            motivo: "No existen reactivos o elementos de fórmula válidos registrados en el inventario."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar protocolos",
            motivo: "Faltan parámetros críticos (prioridad o regla) para procesar el inventario de sustancias."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Lookup instantáneo O(1) vía Set nativo
    const setReactivos = new Set(items.map(reactivo => String(reactivo).toLowerCase().trim()));
    const tieneBloqueado = setReactivos.has("bloqueado");
    const tienePendiente = setReactivos.has("pendiente");

    // 3. Matriz de Decisiones Simétrica para Control de Bioseguridad
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "congelar laboratorio",
            motivo: "Alerta de contención: Se detectaron reactivos o fórmulas en estado bloqueado. Síntesis cancelada por seguridad."
        };
    }

    if (tienePendiente) {
        return {
            accion: "auditar almacenamiento",
            motivo: "Se detectaron reactivos pendientes de análisis que podrían alterar las cadenas de síntesis."
        };
    }

    // 4. Síntesis Segura Despachada
    return {
        accion: "sintetizar formula",
        motivo: "Todos los elementos químicos del inventario están aprobados y listos para la reacción."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 019 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción Preventiva de Bloqueo Químico (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Auditoría Express Vía Lista Vacía",
        items: [], prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(gestionarInventarioQuimico(items, prioridad, regla), null, 2));
});