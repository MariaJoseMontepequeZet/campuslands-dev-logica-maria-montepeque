/**
 * Determina el material y tipo de cimentación según condiciones del sitio.
 */
function evaluarProyecto(suelo, pisos, zonaSismica) {
    // Regla 1: Suelo Blando siempre requiere cimentación especial
    if (suelo === "Blando") {
        return { material: "Cimentación Profunda", viable: true };
    }

    // Regla 2: Suelo Firme con decisiones según altura y sismo
    if (suelo === "Firme") {
        if (zonaSismica === "Alta") {
            return pisos < 5 
                ? { material: "Concreto Reforzado", viable: true }
                : { material: "Acero Estructural", viable: true };
        } else {
            return pisos < 5
                ? { material: "Concreto Estándar", viable: true }
                : { material: "Acero Estructural", viable: true };
        }
    }

    return { material: "Indefinido", viable: false };
}

// --- Casos de Prueba ---
const proyectos = [
    { suelo: "Firme", pisos: 3, zona: "Baja" }, // Concreto Estándar
    { suelo: "Blando", pisos: 10, zona: "Alta" }, // Cimentación Profunda
    { suelo: "Firme", pisos: 8, zona: "Alta" }   // Acero Estructural
];

console.table(proyectos.map(p => ({
    ...p, 
    resultado: evaluarProyecto(p.suelo, p.pisos, p.zona)
})));