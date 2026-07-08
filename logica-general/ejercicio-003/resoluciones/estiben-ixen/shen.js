/**
 * Determina el estado de un equipo en el torneo.
 */
function evaluarEquipo(equipo) {
    // 1. Regla de Sanción (Prioridad máxima)
    if (equipo.tieneSancion) {
        return { equipo: equipo.nombre, estado: "ELIMINADO", motivo: "Sanción técnica" };
    }

    // 2. Regla de Clasificación Directa
    if (equipo.victorias >= 3) {
        return { equipo: equipo.nombre, estado: "CLASIFICADO", motivo: "Clasificación directa" };
    }

    // 3. Regla de Clasificación por Desempate/Desempeño
    if (equipo.victorias === 2 && equipo.puntosDiferencia > 20) {
        return { equipo: equipo.nombre, estado: "CLASIFICADO", motivo: "Clasificado por puntos de diferencia" };
    }

    // 4. Caso por defecto (Eliminado)
    return { equipo: equipo.nombre, estado: "ELIMINADO", motivo: "No cumple con el puntaje mínimo" };
}

// --- Casos de Prueba ---
const equipos = [
    { nombre: "chicharones crudos", victorias: 4, puntosDiferencia: 50, tieneSancion: false }, // Clasificado
    { nombre: "Gordos a lo grande", victorias: 2, puntosDiferencia: 25, tieneSancion: false },  // Clasificado por puntos
    { nombre: "Pollos secos", victorias: 2, puntosDiferencia: 10, tieneSancion: false }, // Eliminado (no alcanza puntos)
    { nombre: "Chomines", victorias: 5, puntosDiferencia: 100, tieneSancion: true } // Eliminado por sanción
];

equipos.forEach(eq => console.log(evaluarEquipo(eq)));