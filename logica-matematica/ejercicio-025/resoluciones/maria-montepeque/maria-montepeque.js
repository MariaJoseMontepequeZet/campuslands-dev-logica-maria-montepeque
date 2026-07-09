//Asigna prioridad de reparación utilizando una matriz de reglas.

function asignarPrioridadReparacion(sistemaVehiculo, tipoCliente) {
    // 1. Guardrail: Sanitización y validación de tipos
    const sistema = String(sistemaVehiculo || "").toLowerCase().trim();
    const cliente = String(tipoCliente || "").toLowerCase().trim();

    // 2. Definición de la "Matriz de Reglas"
    const CRITICIDAD_SISTEMAS = ["frenos", "motor", "transmision"];
    const PRIORIDADES = {
        ALTA: { 
            prioridad: "Alta", 
            accion: "Asignar técnico especialista y trasladar a mecánica pesada." 
        },
        MEDIA: { 
            prioridad: "Media", 
            accion: "Programar en agenda de clientes corporativos." 
        },
        BAJA: { 
            prioridad: "Baja", 
            accion: "Asignar a técnico general según disponibilidad." 
        }
    };

    // 3. Lógica de negocio (Evaluación jerárquica)
    if (CRITICIDAD_SISTEMAS.includes(sistema)) {
        return PRIORIDADES.ALTA;
    }
    
    if (cliente === "flotilla") {
        return PRIORIDADES.MEDIA;
    }

    return PRIORIDADES.BAJA;
}

console.log(asignarPrioridadReparacion("FRENOS ", "Particular")); 
console.log(asignarPrioridadReparacion("aceite", "FLOTILLA"));   
console.log(asignarPrioridadReparacion(null, "Particular"));    