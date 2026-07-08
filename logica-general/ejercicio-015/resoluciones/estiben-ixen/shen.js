/**
 * Valida la configuración de capas de un proyecto de dibujo digital.
 */
function validarProyecto(capas) {
    // 1. Regla de Estructura: ¿Hay al menos un pincel?
    const tienePincel = capas.some(c => c.tipo === "pincel");
    if (!tienePincel) return "ERROR: El archivo debe contener al menos una capa de pincel.";

    // 2. Regla de Opacidad: Ningún pincel puede ser invisible
    for (const capa of capas) {
        if (capa.tipo === "pincel" && capa.opacidad === 0) {
            return `ERROR: La capa de pincel "${capa.nombre}" está invisible (0% opacidad).`;
        }
    }

    // 3. Regla de Ajuste: Debe estar al final
    const ultimaCapa = capas[capas.length - 1];
    const tieneAjuste = capas.some(c => c.tipo === "ajuste");
    if (tieneAjuste && ultimaCapa.tipo !== "ajuste") {
        return "ERROR: Las capas de ajuste deben estar al final del archivo.";
    }

    return "APROBADO: Proyecto listo para exportar.";
}

// --- Casos de Prueba ---
const proyecto1 = [
    { nombre: "Fondo", tipo: "pincel", opacidad: 100 },
    { nombre: "Brillo", tipo: "ajuste", opacidad: 80 }
];

const proyecto2 = [
    { nombre: "Esquema", tipo: "pincel", opacidad: 0 } // Falla opacidad
];

console.log("--- Validación de Proyecto ---");
console.log("Proyecto 1:", validarProyecto(proyecto1));
console.log("Proyecto 2:", validarProyecto(proyecto2));