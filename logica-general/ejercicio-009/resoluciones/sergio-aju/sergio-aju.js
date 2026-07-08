function evaluarEstadoPanico(evento, volumenSonido) {
    // Definición de reglas de estado
    if (evento === "silencio" && volumenSonido > 80) {
        return { estado: "panico", accion: "¡Gritar!" };
    } 
    
    if (evento === "susto" || volumenSonido > 50) {
        return { estado: "alerta", accion: "Cubrirse los ojos" };
    }

    return { estado: "tranquilo", accion: "Seguir viendo" };
}

// Pruebas
console.log(evaluarEstadoPanico("silencio", 90)); // Caso borde: silencio tenso
console.log(evaluarEstadoPanico("susto", 30));    // Caso normal: sobresalto