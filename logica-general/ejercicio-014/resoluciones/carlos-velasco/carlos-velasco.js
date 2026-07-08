const diagnosticarSesion = (cliente, diseño) => {
    if (cliente.tieneAlergias || cliente.pielIrritada) {
        return {
            accion: "Cancelada",
            motivo: "Riesgo de salud detectado (alergias o piel irritada)."
        };
    }
    if (diseño.requiereColor && cliente.alergiaPigmentos) {
        return {
            accion: "Cancelada",
            motivo: "Contraindicación: El cliente es alérgico a los pigmentos del diseño."
        };
    }
    if (diseño.esComplejo && cliente.esPrimerizo) {
        return {
            accion: "Consulta requerida",
            motivo: "Diseño de alta complejidad para un cliente primerizo."
        };
    }
    return {
        accion: "Aprobada",
        motivo: "Diagnóstico favorable para iniciar la sesión."
    };
};
console.log(diagnosticarSesion({ tieneAlergias: false, pielIrritada: false, esPrimerizo: false }, { requiereColor: true, esComplejo: false })); 
console.log(diagnosticarSesion({ tieneAlergias: true, pielIrritada: false }, { requiereColor: false })); 