function gestionarPrioridadTaller(servicios, urgencia) {
    // Regla 1: Si hay "emergencia" o urgencia "alta", atender motor primero
    if (urgencia === "alta" || servicios.includes("emergencia")) {
        return { 
            atencion: "Motor / Emergencia", 
            motivo: "Se priorizan reparaciones críticas para evitar daños mayores." 
        };
    }

    // Regla 2: Si es urgencia media, atender sistema eléctrico
    if (urgencia === "media") {
        return { 
            atencion: "Sistema Eléctrico", 
            motivo: "Se atienden fallas de componentes eléctricos según disponibilidad." 
        };
    }

    // Regla 3: Mantenimiento preventivo por defecto
    return { 
        atencion: "Mantenimiento Preventivo", 
        motivo: "Atención programada por orden de llegada." 
    };
}

// Pruebas
console.log("Caso Normal:", gestionarPrioridadTaller(["cambio-aceite"], "baja"));
console.log("Caso Borde:", gestionarPrioridadTaller(["frenos", "emergencia"], "baja"));