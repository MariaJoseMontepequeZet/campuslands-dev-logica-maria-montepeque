function calcularEfectividad(victorias, totalPartidos) {
    if (totalPartidos === 0) return { porcentaje: 0, categoria: "Sin partidos" };

    const porcentaje = (victorias / totalPartidos) * 100;
    
    let categoria = "";
    if (porcentaje >= 75) categoria = "Elite";
    else if (porcentaje >= 50) categoria = "Profesional";
    else categoria = "En desarrollo";

    return { porcentaje: porcentaje.toFixed(2) + "%", categoria };
}

console.log(calcularEfectividad(8, 10)); 
console.log(calcularEfectividad(0, 10)); 