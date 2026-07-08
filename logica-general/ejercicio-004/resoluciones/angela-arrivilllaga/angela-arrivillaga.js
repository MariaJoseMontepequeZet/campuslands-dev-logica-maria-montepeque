function filtrarInventarioMotos(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "sin_cambios", motivo: "Estructura inválida." };
    }

    const { items, prioridad, regla } = datosEntrada;

    // buscamos si el criterio de la regla exige filtrar los bloqueados
    if (regla.includes("bloqueado") && prioridad === "alta") {
        const encontrados = items.filter(item => item === "bloqueado");
        
        if (encontrados.length > 0) {
            return {
                accion: "revisar bloqueado",
                motivo: "la regla prioriza riesgos antes de tareas normales."
            };
        }
    }

    return {
        accion: "mostrar inventario completo",
        motivo: "No se requiere aislamiento de elementos bajo las reglas actuales."
    };
}

// prueba de la funcion
console.log("\n--- Prueba 1 (Caso Ejemplo) ---");
console.log(filtrarInventarioMotos({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Prueba 2 (Caso Borde - Valores inesperados o vacíos) ---");
console.log(filtrarInventarioMotos({
    items: ["aprobado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));
