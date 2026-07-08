//Reto 017: Tablas de decisión - Arquitectura 3D

function evaluarDecisionArquitectura3D(items, prioridad, regla) {
    // 1. Guardrail / Casos Borde Estructurales Estrictos
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "suspender render",
            motivo: "No se identificaron elementos o capas estructurales válidas en el modelo 3D."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar parametros",
            motivo: "Faltan los metadatos de prioridad o la tabla de decisión de la obra."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para lookup inmediato O(1)
    const setComponentes = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setComponentes.has("bloqueado");
    const tienePendiente = setComponentes.has("pendiente");

    // 3. Matriz de Decisiones Simétrica y Segura 
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "suspender render",
            motivo: "Alerta de ingeniería: Se detectaron capas o componentes bloqueados en el diseño estructural que impiden la viabilidad del plano."
        };
    }

    if (tienePendiente) {
        return {
            accion: "ajustar calculos",
            motivo: "Se encontraron elementos pendientes en la tabla de decisión que requieren cálculo de cargas estructurales."
        };
    }

    // 4. Aprobación del Plano (Flujo Limpio de Alertas)
    return {
        accion: "aprobar plano",
        motivo: "La geometría y las capas del diseño cumplen con las reglas de estabilidad y distribución."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 017 ---");

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
        tipo: "Caso Borde - Falta Parámetro Regla (Vacío)",
        items: ["aprobado"], prioridad: "alta", regla: ""
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(evaluarDecisionArquitectura3D(items, prioridad, regla), null, 2));
});