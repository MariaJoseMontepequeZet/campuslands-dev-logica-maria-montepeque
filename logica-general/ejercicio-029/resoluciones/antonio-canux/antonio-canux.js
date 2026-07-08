// Ejercicio 29 - Películas de Miedo

function simularEstadoEspectador(estadoActual, eventoEscena) {
    let nuevoEstado = estadoActual;
    let accionSistema = "";

    if (eventoEscena === "descanso") {
        nuevoEstado = "calmado";
        accionSistema = "Bajar volumen de efectos sonoros y mantener reproducción normal.";
    } 
    else if (estadoActual === "calmado" && eventoEscena === "tension") {
        nuevoEstado = "alerta";
        accionSistema = "Activar música de suspenso inmersiva.";
    } 
    else if (estadoActual === "calmado" && eventoEscena === "screamer") {
        nuevoEstado = "asustado";
        accionSistema = "Registrar sobresalto del espectador.";
    } 
    else if (estadoActual === "alerta" && eventoEscena === "screamer") {
        nuevoEstado = "panico";
        accionSistema = "Mostrar advertencia en pantalla para pausar si el usuario lo requiere.";
    } 
    else {
        nuevoEstado = estadoActual;
        accionSistema = "Mantener estado actual. No hay transiciones definidas para esta combinación.";
    }

    return { 
        estadoAnterior: estadoActual, 
        evento: eventoEscena, 
        nuevoEstado: nuevoEstado, 
        accion: accionSistema 
    };
}

//Pruebas

console.log("--- Prueba: Caso Normal (De calma a tensión) ---");
console.log(simularEstadoEspectador("calmado", "tension"));

console.log("\n--- Prueba: Caso Crítico (Screamer mientras se está en alerta) ---");
console.log(simularEstadoEspectador("alerta", "screamer"));

console.log("\n--- Prueba: Caso Borde (Reinicio a la calma) ---");
console.log(simularEstadoEspectador("panico", "descanso"));