/**
 * Simula el estado de un espectador ante escenas de una película.
 */
function procesarEscena(estadoActual, escena) {
    const transiciones = {
        "CALMADO": { "suspenso": "TENSO", "jumpscare": "ATERRADO", "calma": "CALMADO" },
        "TENSO": { "suspenso": "TENSO", "jumpscare": "ATERRADO", "calma": "CALMADO" },
        "ATERRADO": { "suspenso": "ATERRADO", "jumpscare": "ATERRADO", "calma": "CALMADO" }
    };

    // Obtenemos el nuevo estado según la tabla de transiciones
    const nuevoEstado = transiciones[estadoActual][escena] || estadoActual;
    
    return nuevoEstado;
}

// --- Simulación ---
let espectador = "CALMADO";
const pelicula = ["suspenso", "suspenso", "jumpscare", "calma"];

console.log(`Estado inicial: ${espectador}`);

pelicula.forEach(escena => {
    espectador = procesarEscena(espectador, escena);
    console.log(`Escena: ${escena} -> Estado: ${espectador}`);
});