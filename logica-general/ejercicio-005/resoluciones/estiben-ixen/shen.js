/**
 * Asigna una prioridad numérica al servicio para facilitar el ordenamiento.
 */
function obtenerPesoServicio(servicio) {
    const pesos = { "Reparación": 2, "Diagnóstico": 1, "Mantenimiento": 0 };
    return pesos[servicio] || 0;
}

/**
 * Ordena la lista de espera del taller.
 */
function ordenarTaller(listaEspera) {
    return listaEspera.sort((a, b) => {
        // Criterio 1: Nivel de urgencia (mayor primero)
        if (b.urgencia !== a.urgencia) {
            return b.urgencia - a.urgencia;
        }
        // Criterio 2: Tipo de servicio (peso mayor primero)
        return obtenerPesoServicio(b.tipo_servicio) - obtenerPesoServicio(a.tipo_servicio);
    });
}

// --- Casos de Prueba ---
const cola = [
    { cliente: "Juan", urgencia: 1, tipo_servicio: "Mantenimiento" },
    { cliente: "Ana", urgencia: 3, tipo_servicio: "Diagnóstico" }, // Emergencia
    { cliente: "Pedro", urgencia: 1, tipo_servicio: "Reparación" }  // Prioridad sobre mantenimiento
];

const colaOrdenada = ordenarTaller(cola);
console.log("--- Orden de Atención en Taller ---");
console.table(colaOrdenada);