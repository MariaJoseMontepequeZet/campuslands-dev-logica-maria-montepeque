const evaluarAterrizaje = (aterrizaje, objetivo) => {
    const deltaX = objetivo.x - aterrizaje.x;
    const deltaY = objetivo.y - aterrizaje.y;
    const distancia = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    let categoria = "";
    if (distancia <= 10) categoria = "Aterrizaje perfecto";
    else if (distancia <= 50) categoria = "Aterrizaje aceptable";
    else categoria = "Fuera de zona";

    return {
        distancia: distancia.toFixed(2) + " metros",
        categoria: categoria,
        explicacion: `Calculado desde (${aterrizaje.x}, ${aterrizaje.y}) hacia (${objetivo.x}, ${objetivo.y}).`
    };
};

console.log(evaluarAterrizaje({ x: 0, y: 0 }, { x: 5, y: 5 })); 
console.log(evaluarAterrizaje({ x: 0, y: 0 }, { x: 60, y: 0 }));  