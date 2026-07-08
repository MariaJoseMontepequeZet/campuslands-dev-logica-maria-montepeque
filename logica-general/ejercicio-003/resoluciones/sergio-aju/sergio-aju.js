function evaluarPartida(estadoConexion, tiempoEspera) {
    if (estadoConexion === true) {
        return "Accion: Iniciar partida. Motivo: Todos los jugadores listos.";
    } else if (tiempoEspera < 10) {
        return "Accion: Esperar. Motivo: Aún no se cumple el tiempo límite de 10 minutos para declarar W.O.";
    } else {
        return "Accion: Cancelar partida (W.O.). Motivo: Se superó el tiempo máximo de espera de 10 minutos con jugadores desconectados.";
    }
}

// Pruebas
console.log(evaluarPartida(true, 2));   // Caso: Iniciar
console.log(evaluarPartida(false, 5));  // Caso normal: Esperar
console.log(evaluarPartida(false, 10)); // Caso borde: Cancelar