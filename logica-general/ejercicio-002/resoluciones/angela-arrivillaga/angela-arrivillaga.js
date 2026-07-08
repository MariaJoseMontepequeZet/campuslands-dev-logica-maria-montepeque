function validarDatosRanking(datosEntrada) {
    // si el objeto no existe no se puede procesar, se rechaza la solicitud
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "rechazar", motivo: "Datos nulos o corruptos." };
    }

    const { items, prioridad } = datosEntrada;

    // el sistema no puede operar si la lista esta vacia
    if (items.length === 0) {
        return {
            accion: "alertar administrador",
            motivo: "La lista de datos de ranking se encuentra vacía."
        };
    }

    // si esta bloqueado y la prioridad es alta se detiene el proceso
    if (items.includes("bloqueado") && prioridad === "alta") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return { accion: "aprobar", motivo: "Los datos cumplen con el esquema mínimo." };
}

// pruebade la funcion
console.log("\n--- Prueba 1 (Caso Ejemplo) ---");
console.log(validarDatosRanking({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Prueba 2 (Caso Borde - Lista vacía) ---");
console.log(validarDatosRanking({
    items: [],
    prioridad: "baja",
    regla: "revisar bloqueados primero"
}));