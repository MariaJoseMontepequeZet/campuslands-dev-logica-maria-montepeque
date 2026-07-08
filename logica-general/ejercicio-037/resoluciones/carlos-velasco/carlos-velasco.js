const validarMuro = (altura, material, esEstructural) => {
    if (material === "madera" && altura > 3) {
        return { estado: "Rechazado", motivo: "Inestable" };
    }
    
    if (esEstructural && material === "vidrio") {
        return { estado: "Rechazado", motivo: "Material no permitido para carga" };
    }
    
    if (material === "concreto" && altura > 10) {
        return { estado: "Requerimiento", motivo: "Requiere refuerzo extra" };
    }
    
    return { estado: "Aprobado", motivo: "Cumple normativa" };
};

console.log(validarMuro(4, "madera", false));
console.log(validarMuro(12, "concreto", false));