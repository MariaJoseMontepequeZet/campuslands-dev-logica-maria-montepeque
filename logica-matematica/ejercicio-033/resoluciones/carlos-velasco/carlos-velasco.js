const calcularDistancia = (p1, p2) => {
    const distancia = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    
    const estado = distancia > 10 ? "Exceso de distancia de seguridad" : "Zona de aterrizaje viable";

    return {
        distancia: distancia.toFixed(2),
        estado: estado,
        explicacion: `Distancia calculada entre (${p1.x}, ${p1.y}) y (${p2.x}, ${p2.y}).`
    };
};

console.log(calcularDistancia({x: 0, y: 0}, {x: 3, y: 4}));
console.log(calcularDistancia({x: 0, y: 0}, {x: 10, y: 10}));