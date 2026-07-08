//Reto 013: Resolución de casos - Paracaidismo

function resolverCasoParacaidismo(items, prioridad, regla) {
    // 1. Guardrail / Casos Borde Estructurales Estrictos
    if (!Array.isArray(items) || items.length === 0) {
        return { accion: "abortar lanzamiento", motivo: "No existen datos o ítems válidos para evaluar las condiciones del salto." };
    }
    if (!prioridad || !regla) {
        return { accion: "revisar protocolos", motivo: "Falta la asignación de prioridad o directiva operativa para procesar el caso." };
    }

    // Sanitización y blindaje tipado en cabecera contra valores nulos
    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Lookup ultra veloz O(1) vía Set nativo
    const estadosUnicos = new Set(items.map(i => String(i).toLowerCase().trim()));
    const tieneBloqueado = estadosUnicos.has("bloqueado");
    const tienePendiente = estadosUnicos.has("pendiente");

    // 3. Matriz de Decisiones de Misión Crítica
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return { accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." };
    }

    // Flujo de Excepción 1B (Salvaguarda de Vida): Bloqueo detectado fuera del flujo estándar
    if (tieneBloqueado) {
        return { accion: "abortar lanzamiento", motivo: "Anomalía crítica: Se detectaron componentes bloqueados en el sistema. Lanzamiento denegado por seguridad." };
    }

    // Control Preventivo Secundario: Inspección intermedia de elementos en espera
    if (tienePendiente) {
        return { accion: "inspeccionar equipamiento", motivo: "Existen verificaciones pendientes que deben resolverse antes de proceder al abordaje de la aeronave." };
    }

    // 4. Aprobación por Defecto 
    return { accion: "autorizar salto", motivo: "Todos los sistemas de seguridad se encuentran aprobados y estables bajo las directivas vigentes." };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 013 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción de Bloqueo Crítico (Prioridad Baja)",
        items: ["aprobado", "bloqueado"], prioridad: "baja", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Parámetros de Cabecera Vacíos",
        items: ["aprobado"], prioridad: "", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log("Salida:", resolverCasoParacaidismo(items, prioridad, regla));
});