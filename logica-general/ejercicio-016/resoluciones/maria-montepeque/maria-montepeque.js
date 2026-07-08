//Reto 016: Matrices simples - Animación 3D

function procesarMatricesAnimacion3D(items, prioridad, regla) {
    // 1. Guardrail / Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "reiniciar escena",
            motivo: "La matriz de nodos o fotogramas está vacía o no es válida."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "comprobar parametros",
            motivo: "Faltan los metadatos esenciales de prioridad o regla de renderizado."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Lookup de estados en O(1) vía Set nativo
    const setNodos = new Set(items.map(nodo => String(nodo).toLowerCase().trim()));
    const tieneBloqueado = setNodos.has("bloqueado");
    const tienePendiente = setNodos.has("pendiente");

    // 3. Matriz de Decisiones Simétrica para la Cola de Renderizado
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "reiniciar escena",
            motivo: "Alerta de renderizado: Se detectaron nodos o fotogramas corruptos bloqueando la canalización de la escena."
        };
    }

    if (tienePendiente) {
        return {
            accion: "pre-renderizar fotogramas",
            motivo: "Se detectaron fotogramas clave en estado pendiente que requieren cálculo previo."
        };
    }

    // 4. Compilación Exitosa
    return {
        accion: "compilar animacion",
        motivo: "Todos los nodos de la matriz están validados y listos para el renderizado final."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 016 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción de Bloqueo Inseguro (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Matriz Estructural Vacía",
        items: [], prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(procesarMatricesAnimacion3D(items, prioridad, regla), null, 2));
});