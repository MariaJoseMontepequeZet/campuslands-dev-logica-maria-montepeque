const LITE_VIENTO_MAXIMO = 30;
const ALTURA_MINIMA_SEGURA = 1000;

function evaluarSalto(datosSalto) {
    const { altitud, velocidadViento, equipoListo } = datosSalto;

    // Inicializamos el reporte de seguridad
    let reporte = {
        autorizado: false,
        motivo: "",
        nivelRiesgo: "Alto"
    };

    // 1. Verificación técnica (Equipo)
    if (!equipoListo) {
        reporte.motivo = "Falla técnica: El equipo no ha pasado la verificación.";
        return reporte;
    }

    // 2. Verificación de seguridad ambiental
    if (velocidadViento > LITE_VIENTO_MAXIMO) {
        reporte.motivo = `Condiciones climáticas peligrosas: Viento a ${velocidadViento} km/h (Límite: ${LITE_VIENTO_MAXIMO}).`;
        return reporte;
    }

    // 3. Verificación de altura
    if (altitud < ALTURA_MINIMA_SEGURA) {
        reporte.motivo = `Altitud crítica: ${altitud}m no permite despliegue seguro.`;
        return reporte;
    }

    // Si pasamos todos los filtros, autorizamos
    reporte.autorizado = true;
    reporte.motivo = "Condiciones óptimas. Salto autorizado.";
    reporte.nivelRiesgo = "Bajo";
    
    return reporte;
}

// --- Pruebas del sistema ---

// Caso normal: Todo bien
const salto1 = { altitud: 3500, velocidadViento: 12, equipoListo: true };
console.log("Prueba 1 (Normal):", evaluarSalto(salto1));

// Caso borde: Viento excesivo
const salto2 = { altitud: 4000, velocidadViento: 45, equipoListo: true };
console.log("Prueba 2 (Viento):", evaluarSalto(salto2));

// Caso borde: Altitud insuficiente
const salto3 = { altitud: 800, velocidadViento: 5, equipoListo: true };
console.log("Prueba 3 (Altura):", evaluarSalto(salto3));