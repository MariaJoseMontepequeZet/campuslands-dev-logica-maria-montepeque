/**
 * Diagnostica si un diseño de tatuaje es viable o presenta errores.
 */
function diagnosticarTatuaje(cliente, tatuaje) {
    // 1. Error: Edad
    if (cliente.edad < 18) return "ERROR: Cliente menor de edad.";

    // 2. Error: Alergias críticas
    if (cliente.alergias.includes("niquel")) return "ERROR: Alergia a componentes de tinta detectada.";

    // 3. Alerta: Condición médica
    if (cliente.condicionMedica) return "ALERTA: Se requiere autorización médica previa.";

    // 4. Error: Zona compleja/sensible
    if (tatuaje.zona === "costillas" && tatuaje.complejidad > 8) {
        return "ERROR: Zona sensible para diseño de alta complejidad.";
    }

    return "APROBADO: Diseño viable para ejecución.";
}

// --- Casos de Prueba ---
const cliente1 = { edad: 20, alergias: ["polen"], condicionMedica: false };
const tatuaje1 = { zona: "brazo", tamanio: 10, complejidad: 5 };

const cliente2 = { edad: 17, alergias: [], condicionMedica: false };
const tatuaje2 = { zona: "brazo", tamanio: 5, complejidad: 2 };

console.log("--- Informe de Diagnóstico ---");
console.log("Cliente 1:", diagnosticarTatuaje(cliente1, tatuaje1));
console.log("Cliente 2:", diagnosticarTatuaje(cliente2, tatuaje2));