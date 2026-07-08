/**
 * Valida si una sustancia puede ser añadida a un estante específico.
 */
function validarAlmacenamiento(sustancia, estanteActual) {
    // Regla: Inflamables solo en Estante V
    if (sustancia.categoria === "Inflamable" && estanteActual.id !== "V") {
        return "ERROR: Sustancia inflamable requiere Estante V.";
    }

    // Regla: No mezclar Ácido y Base
    const contenido = estanteActual.contenido;
    if (sustancia.categoria === "Ácido" && contenido.includes("Base")) {
        return "ERROR: Incompatibilidad química (Ácido + Base).";
    }
    if (sustancia.categoria === "Base" && contenido.includes("Ácido")) {
        return "ERROR: Incompatibilidad química (Base + Ácido).";
    }

    return `APROBADO: ${sustancia.nombre} almacenado correctamente.`;
}

// --- Dataset ---
const estanteA = { id: "A", contenido: ["Ácido Clorhídrico"] };
const nuevaSustancia = { nombre: "Hidróxido de Sodio", categoria: "Base" };

console.log("--- Inventario Lógico: Laboratorio ---");
console.log(validarAlmacenamiento(nuevaSustancia, estanteA));