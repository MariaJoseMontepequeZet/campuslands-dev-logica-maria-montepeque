const simularSupervivencia = (personaje) => {
    const { estado, evento } = personaje;

    if (estado === "escondido" && evento === "monstruo cerca") {
        return { nuevoEstado: "sobrevive", motivo: "Te ocultaste a tiempo." };
    }
    
    if (estado === "corriendo" && evento === "trampa") {
        return { nuevoEstado: "herido", motivo: "Caíste en una trampa mientras huías." };
    }

    if (evento === "monstruo cerca") {
        return { nuevoEstado: "eliminado", motivo: "El monstruo te encontró." };
    }

    return { nuevoEstado: estado, motivo: "No ocurrió nada crítico." };
};

console.log(simularSupervivencia({ estado: "escondido", evento: "monstruo cerca" }));
console.log(simularSupervivencia({ estado: "corriendo", evento: "monstruo cerca" }));