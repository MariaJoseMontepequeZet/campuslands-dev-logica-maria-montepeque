/**
 * Verifica si un pasajero cumple con los requisitos para abordar.
 */
function verificarAbordaje(pasajero) {
    // Regla de validación básica
    if (pasajero.edad <= 0) return "Edad inválida.";

    // Regla de Pasaporte para Internacional
    if (pasajero.destino === "Internacional" && !pasajero.tienePasaporteVigente) {
        return "Acceso denegado: Pasaporte requerido para vuelos internacionales.";
    }

    // Regla de Permiso para menores en vuelos internacionales
    if (pasajero.edad < 18 && pasajero.destino === "Internacional" && !pasajero.tienePermiso) {
        return "Acceso denegado: Menor de edad requiere permiso de padres.";
    }

    return `Acceso aprobado para: ${pasajero.nombrePasajero}.`;
}

// --- Casos de Prueba ---
const pasajeros = [
    { nombrePasajero: "Brandon", edad: 18, destino: "Internacional", tienePasaporteVigente: true, tienePermiso: false },
    { nombrePasajero: "Sofia", edad: 16, destino: "Internacional", tienePasaporteVigente: true, tienePermiso: false }, // Falla
    { nombrePasajero: "Carlos", edad: 40, destino: "Internacional", tienePasaporteVigente: false, tienePermiso: true }  // Falla
];

console.log("--- Sistema de Verificación de Viajes ---");
pasajeros.forEach(p => console.log(`${p.nombrePasajero}: ${verificarAbordaje(p)}`));