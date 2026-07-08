//Reto 018: Sistemas de turnos - Soldadura

function gestionarTurnosSoldadura(items, prioridad, regla) {
    // 1. Casos Borde Estructurales Estrictos
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "apagar maquinaria",
            motivo: "No hay piezas o estaciones programadas en la cola de turnos."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "recalibrar sistema",
            motivo: "Faltan parámetros de configuración esenciales para la asignación de turnos."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para lookup inmediato O(1)
    const setEstaciones = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setEstaciones.has("bloqueado");
    const tienePendiente = setEstaciones.has("pendiente");

    // 3. Matriz de Decisiones de Seguridad Industrial
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "apagar maquinaria",
            motivo: "Alerta de seguridad: Se identificaron anomalías críticas o estaciones bloqueadas en la línea de soldadura."
        };
    }

    if (tienePendiente) {
        return {
            accion: "asignar turno de inspeccion",
            motivo: "Se detectaron elementos en espera que requieren verificación de soldadura antes de su liberación."
        };
    }

    // 4. Producción Continua Segura (Cero Alertas)
    return {
        accion: "despachar lote",
        motivo: "Todas las estaciones operan con normalidad y los turnos han sido completados con éxito."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 018 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción Preventiva de Bloqueo Industrial (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Entrada Corrupta o Nula",
        items: null, prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(gestionarTurnosSoldadura(items, prioridad, regla), null, 2));
});