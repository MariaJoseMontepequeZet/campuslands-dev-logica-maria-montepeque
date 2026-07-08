const diagnosticarKit = (kit) => {
    if (!kit.agujasEsteriles || !kit.tintaSellada) {
        return { estado: "Inutilizable", motivo: "Riesgo biológico detectado." };
    }
    
    if (!kit.maquinaOperativa) {
        return { estado: "Inutilizable", motivo: "Fallo técnico en la máquina." };
    }
    
    if (kit.guantesDisponibles < 2) {
        return { estado: "Alerta", motivo: "Stock insuficiente de guantes." };
    }
    
    return { estado: "Aprobado", motivo: "Kit listo para sesión." };
};

console.log(diagnosticarKit({ agujasEsteriles: true, tintaSellada: true, maquinaOperativa: true, guantesDisponibles: 1 }));
console.log(diagnosticarKit({ agujasEsteriles: false, tintaSellada: true, maquinaOperativa: true, guantesDisponibles: 5 }));