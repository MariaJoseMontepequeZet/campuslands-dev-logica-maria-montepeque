/**
 * Evalúa si es seguro realizar el salto.
 */
function evaluarSalto(datosSalto) {
    // 1. Prioridad: Revisión de equipo (Regla de oro)
    if (!datosSalto.equipoCertificado) {
        return { estado: "CANCELADO", motivo: "Equipo no certificado." };
    }

    // 2. Validación de Viento
    if (datosSalto.velocidadViento > 30) {
        return { estado: "CANCELADO", motivo: "Viento demasiado fuerte." };
    }

    // 3. Validación de Altitud (Rango 3000-4000m)
    if (datosSalto.altitud < 3000 || datosSalto.altitud > 4000) {
        return { estado: "CANCELADO", motivo: "Altitud fuera de rango seguro." };
    }

    return { estado: "APROBADO", motivo: "Condiciones óptimas para salto." };
}

// --- Casos de Prueba ---
const simulaciones = [
    { altitud: 3500, velocidadViento: 15, equipoCertificado: true }, // Aprobado
    { altitud: 2000, velocidadViento: 10, equipoCertificado: true }, // Falla altitud
    { altitud: 3500, velocidadViento: 45, equipoCertificado: true }, // Falla viento
    { altitud: 3500, velocidadViento: 10, equipoCertificado: false } // Falla equipo
];

console.log("--- Sistema de Control de Salto ---");
simulaciones.forEach((s, i) => {
    const res = evaluarSalto(s);
    console.log(`Intento ${i + 1}: ${res.estado} | ${res.motivo}`);
});