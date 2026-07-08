function evaluarViabilidad(suelo, presupuesto) {
    const decisiones = {
        "rocoso-alto": "Proyecto viable: Alta resistencia.",
        "rocoso-bajo": "Viable con optimización de costos.",
        "arenoso-alto": "Viable, requiere refuerzos de cimentación.",
        "arenoso-bajo": "Proyecto no viable: Riesgo estructural alto."
    };
    const llave = `${suelo}-${presupuesto >= 100000 ? "alto" : "bajo"}`;
    return decisiones[llave] || "Configuración inválida.";
}

console.log(evaluarViabilidad("rocoso", 150000));
console.log(evaluarViabilidad("arenoso", 50000));