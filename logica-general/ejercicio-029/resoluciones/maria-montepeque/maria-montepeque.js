//Simulador de estados de supervivencia 

const simularSupervivencia = (personaje, eventos) => {
    // 1. Estado inicial
    let estadoActual = "alerta";
    const historial = [estadoActual];

    // 2. Procesamiento de eventos
    eventos.forEach(evento => {
        if (evento === "ruido" && estadoActual === "alerta") {
            estadoActual = "asustado";
        } else if (evento === "contacto" && estadoActual === "asustado") {
            estadoActual = "en peligro";
        } else if (evento === "refugio") {
            estadoActual = "a salvo";
        }
        historial.push(estadoActual);
    });

    return {
        personaje,
        estadoFinal: estadoActual,
        historialEstados: historial
    };
};

// Prueba
console.log(simularSupervivencia("Elena", ["ruido", "contacto", "refugio"]));