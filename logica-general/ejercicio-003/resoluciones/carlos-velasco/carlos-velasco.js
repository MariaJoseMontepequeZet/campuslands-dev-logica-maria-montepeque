const decidirEquipo = (equipo) => {
    if (equipo.estado === "descalificado") {
        return { accion: "No seleccionar", motivo: "El equipo está descalificado." };
    }
    if (equipo.estado === "listo") {
        if (equipo.nivelHabilidad >= 8) {
            return { accion: "Seleccionar para final", motivo: "Equipo listo y con nivel competitivo alto." };
        } else {
            return { accion: "Poner en lista de espera", motivo: "Equipo listo pero nivel por debajo del estándar de la final." };
        }
    }
    return { accion: "Ignorar", motivo: "El equipo no cumple con el estado requerido." };
};
console.log(decidirEquipo({ estado: "listo", nivelHabilidad: 9 })); 
console.log(decidirEquipo({ estado: "descalificado", nivelHabilidad: 10 })); 