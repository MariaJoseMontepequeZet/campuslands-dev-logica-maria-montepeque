//Reto 011: Organización de listas - Kickboxing

function organizarListaKickboxing(items, prioridad, regla) {
    // 1. Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return { accion: "no requiere accion", motivo: "La lista de items está vacía o no es válida." };
    }
    if (!prioridad || !regla) {
        return { accion: "revisar configuracion", motivo: "Faltan parámetros críticos (prioridad o regla) para evaluar la lista." };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Optimización Analítica O(N): Convertimos a Set para búsquedas instantáneas O(1)
    const estadosUnicos = new Set(items.map(i => String(i).toLowerCase().trim()));

    const tieneBloqueados = estadosUnicos.has("bloqueado");
    const tienePendientes = estadosUnicos.has("pendiente");

    // 3. Matriz de Decisiones Jerárquica y Simétrica
    if (tieneBloqueados && reglaLimpia === "revisar bloqueados primero" && prioridadLimpia === "alta") {
        return { accion: "revisar bloqueado", motivo: "La regla prioriza riesgos antes de tareas normales." };
    }

    // Control de Daños Pasivo: Si hay un bloqueado pero no se activó la regla alta, no podemos ignorarlo
    if (tieneBloqueados) {
        return { accion: "revisar bloqueado", motivo: "Se detectaron elementos bloqueados en la lista fuera del flujo de alta prioridad." };
    }

    // Gestión de elementos pendientes
    if (tienePendientes) {
        return { accion: "evaluar pendientes", motivo: "No hay bloqueos críticos prioritarios, pero existen tareas en espera de revisión." };
    }

    // 4. Flujo por defecto 
    return { accion: "continuar entrenamiento", motivo: "Todos los elementos están al día o no se detectaron alertas críticas bajo las reglas dadas." };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 011 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Fuga Controlada (Prioridad Media)",
        items: ["pendiente", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Lista Vacía",
        items: [], prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log("Salida:", organizarListaKickboxing(items, prioridad, regla));
});