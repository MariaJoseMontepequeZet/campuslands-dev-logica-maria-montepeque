/**
 * Determina el estado del partido de Pingpong.
 */
function verificarResultado(puntajeA, puntajeB) {
    // Validación inicial
    if (puntajeA < 0 || puntajeB < 0) return "Error: Puntajes inválidos";

    const diferencia = Math.abs(puntajeA - puntajeB);

    // Caso de empate técnico o desarrollo (Deuce)
    if (puntajeA >= 10 && puntajeB >= 10) {
        if (diferencia >= 2) {
            return puntajeA > puntajeB ? "Ganador: Jugador A" : "Ganador: Jugador B";
        }
        return "El partido continúa (Deuce)";
    }

    // Regla estándar (llega a 11 con 2 de ventaja)
    if (puntajeA >= 11 && diferencia >= 2) return "Ganador: Jugador A";
    if (puntajeB >= 11 && diferencia >= 2) return "Ganador: Jugador B";

    return "El partido continúa";
}

// --- Casos de Prueba ---
const partidos = [
    { a: 11, b: 9 },  // Ganador estándar
    { a: 10, b: 10 }, // Deuce
    { a: 12, b: 10 }, // Ganador tras Deuce
    { a: 5, b: 3 }    // En juego
];

partidos.forEach(p => console.log(`A: ${p.a} | B: ${p.b} -> ${verificarResultado(p.a, p.b)}`));