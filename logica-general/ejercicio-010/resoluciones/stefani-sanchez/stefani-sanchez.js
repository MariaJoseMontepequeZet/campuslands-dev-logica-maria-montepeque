// Logica general 010 - Lectura de instrucciones
// Viajes y turismo

// Entradas
const viaje = {
    destino: "Antigua Guatemala",
    presupuesto: 1000,
    documentoValido: true,
    cuposDisponibles: true
};

// Funcion que sigue las instrucciones paso a paso
function procesarViaje(viaje) {

    if (!viaje) {
        return "No hay informacion del viaje.";
    }

    // Paso 1
    if (!viaje.documentoValido) {
        return "El documento de identificacion no es valido.";
    }

    // Paso 2
    if (!viaje.cuposDisponibles) {
        return "No hay cupos disponibles.";
    }

    // Paso 3
    if (viaje.presupuesto < 500) {
        return "El presupuesto es insuficiente.";
    }

    // Paso 4
    return {
        estado: "Reserva confirmada",
        destino: viaje.destino,
        mensaje: "El viaje puede realizarse correctamente."
    };
}

// Prueba normal