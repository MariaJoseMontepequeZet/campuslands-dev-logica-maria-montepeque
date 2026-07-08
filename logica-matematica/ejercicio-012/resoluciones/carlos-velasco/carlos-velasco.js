/**
 * @param {number} totales 
 * @param {number} exitosos 
 */
const analizarEfectividad = (totales, exitosos) => {
    if (totales <= 0) return "Error: Los intentos deben ser mayores a 0.";
    
    const efectividad = (exitosos / totales) * 100;
    let categoria = "";

    if (efectividad >= 80) categoria = "Nivel Profesional";
    else if (efectividad >= 50) categoria = "Nivel Intermedio";
    else categoria = "En Entrenamiento";

    return {
        efectividad: efectividad.toFixed(2) + "%",
        categoria: categoria,
        explicacion: `De ${totales} saques, ${exitosos} fueron exitosos.`
    };
};

console.log(analizarEfectividad(10, 9)); 
console.log(analizarEfectividad(10, 4)); 