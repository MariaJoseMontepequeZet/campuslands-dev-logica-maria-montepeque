//Reto 012: Comparación de opciones - Pingpong

function compararOpcionesPingPong(items, prioridad, regla) {
    // 1. Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return { accion: "detener evaluacion", motivo: "No existen opciones o ítems válidos para realizar la comparación." };
    }
    if (!prioridad || !regla) {
        return { accion: "revisar parametros", motivo: "La prioridad o la regla de negocio no fueron especificadas." };
    }

    // Sanitización y blindaje de tipos de datos en la cabecera
    const reglaFormateada = String(regla).toLowerCase().trim();
    const prioridadFormateada = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Lookup instantáneo O(1) con Set nativo
    const setEstados = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setEstados.has("bloqueado");
    const tienePendiente = setEstados.has("pendiente");

    // 3. Matriz de Decisiones en Cascada Simétrica
    if (tieneBloqueado && prioridadFormateada === "alta" && reglaFormateada === "revisar bloqueados primero") {
        return { accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." };
    }

    // Salvaguarda Legal: Si hay un bloqueo, el flujo jamás puede continuar, sin importar la regla o prioridad
    if (tieneBloqueado) {
        return { accion: "revisar bloqueado", motivo: "Se identificaron opciones bloqueadas en el lote que detienen la operación preventiva del flujo." };
    }

    // Gestión Preventiva Secundaria: Solo si el paso está libre de bloqueos
    if (tienePendiente) {
        return { accion: "analizar pendientes", motivo: "Se detectaron opciones en espera que requieren atención inmediata para no frenar el flujo." };
    }

    // 4. Flujo por Defecto
    return { accion: "continuar partida", motivo: "Las opciones actuales son estables y cumplen los criterios normales de operación." };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 012 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción de Bloqueo Inseguro (Prioridad Baja)",
        items: ["aprobado", "bloqueado"], prioridad: "baja", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Entrada Inválida o Nula",
        items: null, prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log("Salida:", compararOpcionesPingPong(items, prioridad, regla));
});