//Reto 022: Validación de datos - Ranking de fútbol sala

function validarDatosRankingFutbolSala(items, prioridad, regla) {
    // 1. Casos Borde Estructurales Estrictos
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "reprogramar jornada",
            motivo: "Los datos de la liga de fútbol sala están vacíos o no cumplen con el formato de lista requerido."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar reglamento",
            motivo: "Faltan parámetros de control (prioridad o regla) obligatorios para validar la tabla de posiciones."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para lookup inmediato O(1)
    const setReportes = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setReportes.has("bloqueado");
    const tienePendiente = setReportes.has("pendiente");

    // 3. Matriz de Decisiones Simétrica y Segura
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "reprogramar jornada",
            motivo: "Alerta de competición: Se detectaron registros o clubes bloqueados por sanciones administrativas. Ranking congelado."
        };
    }

    if (tienePendiente) {
        return {
            accion: "auditar actas arbitrales",
            motivo: "Existen datos pendientes en el registro que impiden congelar el ranking definitivo."
        };
    }

    // 4. Publicación Segura (Cero Alertas)
    return {
        accion: "actualizar ranking",
        motivo: "Todos los datos y estadísticas de los clubes han sido validados con éxito."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 022 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción de Sanción en Tabla (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Parámetro Prioridad Vacío",
        items: ["aprobado"], prioridad: "", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(validarDatosRankingFutbolSala(items, prioridad, regla), null, 2));
});