//Reto 023: Toma de decisiones - Torneo de esports

function tomarDecisionEsports(items, prioridad, regla) {
    // 1. Casos Borde Estructurales Estrictos
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "suspender transmision",
            motivo: "No existen datos de equipos o salas competitivas válidas en el registro."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar directrices",
            motivo: "Faltan los metadatos de prioridad o regla obligatorios para procesar el torneo."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para lookup inmediato O(1)
    const setLobbies = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setLobbies.has("bloqueado");
    const tienePendiente = setLobbies.has("pendiente");

    // 3. Matriz de Decisiones Simétrica y Segura
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "suspender transmision",
            motivo: "Alerta técnica: Se detectaron servidores caídos o salas de juego bloqueadas en el registro del torneo."
        };
    }

    if (tienePendiente) {
        return {
            accion: "postergar partida",
            motivo: "Hay escuadras o estados pendientes que impiden dar inicio al emparejamiento reglamentario."
        };
    }

    // 4. Inicio de la Transmisión Seguro (Cero Alertas)
    return {
        accion: "comenzar stream",
        motivo: "Todos los indicadores competitivos están aprobados y las salas se encuentran estables."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 023 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción Preventiva de Bloqueo Técnico (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Entrada Nula Corregida por Guardrail",
        items: null, prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(tomarDecisionEsports(items, prioridad, regla), null, 2));
});