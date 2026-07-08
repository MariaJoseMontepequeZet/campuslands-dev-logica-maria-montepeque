/**
 * Detecta inconsistencias en un objeto de canción.
 */
function validarCancion(cancion) {
    // 1. Detección de datos faltantes
    if (!cancion.titulo || !cancion.artista) {
        return { titulo: cancion.titulo, error: "Datos incompletos" };
    }

    // 2. Detección de errores de duración
    if (cancion.duracion <= 0) {
        return { titulo: cancion.titulo, error: "Duración inválida" };
    }

    // 3. Detección de formato incompatible
    const formatosValidos = ["MP3", "WAV"];
    if (!formatosValidos.includes(cancion.formato)) {
        return { titulo: cancion.titulo, error: "Formato no soportado" };
    }

    return { titulo: cancion.titulo, error: null }; // Sin inconsistencias
}

// --- Casos de Prueba ---
const playlist = [
    { titulo: "Rap Melancólico", artista: "EZVIT 810", duracion: 210, formato: "MP3" }, // OK
    { titulo: "", artista: "Artista Desconocido", duracion: 180, formato: "MP3" },      // Error: Faltante
    { titulo: "Beat Trap", artista: "Dr. Drair", duracion: 0, formato: "WAV" },        // Error: Duración
    { titulo: "Audio Raro", artista: "Test", duracion: 150, formato: "OGG" }           // Error: Formato
];

console.log("--- Informe de Inconsistencias ---");
playlist.forEach(c => {
    const resultado = validarCancion(c);
    if (resultado.error) {
        console.log(`[INCONSISTENCIA DETECTADA] Canción: "${resultado.titulo || 'Sin Título'}" | Razón: ${resultado.error}`);
    } else {
        console.log(`[OK] Canción: "${resultado.titulo}"`);
    }
});