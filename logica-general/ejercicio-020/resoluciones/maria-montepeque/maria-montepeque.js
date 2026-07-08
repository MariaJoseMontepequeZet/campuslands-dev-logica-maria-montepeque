//Reto 020: Estrategias de selección - Comida urbana

function aplicarEstrategiaComidaUrbana(items, prioridad, regla) {
    // 1. Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "pausar cocina",
            motivo: "La lista de pedidos o ingredientes está vacía o no tiene un formato válido."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar comanda",
            motivo: "Faltan parámetros críticos (prioridad o regla) para seleccionar una estrategia."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para lookup inmediato O(1)
    const setPedidos = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setPedidos.has("bloqueado");
    const tienePendiente = setPedidos.has("pendiente");

    // 3. Matriz de Decisiones Simétrica y Segura 
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "pausar cocina",
            motivo: "Alerta de servicio: Se detectaron elementos bloqueados en la comanda. Despacho cancelado preventivamente."
        };
    }

    if (tienePendiente) {
        return {
            accion: "adelantar preparacion",
            motivo: "Existen comandas pendientes en cola que deben procesarse para no retrasar el servicio."
        };
    }

    // 4. Despacho Normal
    return {
        accion: "despachar orden",
        motivo: "Todos los pedidos están aprobados y listos para salir a mesa o domicilio."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 020 ---");

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
        tipo: "Caso Borde - Parámetro Nulo en Entrada",
        items: ["aprobado"], prioridad: null, regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(aplicarEstrategiaComidaUrbana(items, prioridad, regla), null, 2));
});