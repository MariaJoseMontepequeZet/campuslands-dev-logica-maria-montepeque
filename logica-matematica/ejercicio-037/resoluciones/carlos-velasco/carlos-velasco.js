const calcularRanking = (proyectos, factor) => {
    return proyectos.map(p => {
        const puntaje = (p.puntosCalidad / p.tiempoRender) * factor;
        let categoria = "";
        
        if (puntaje > 10) categoria = "Top tier";
        else if (puntaje >= 5) categoria = "Estándar";
        else categoria = "Bajo rendimiento";
        
        return {
            nombre: p.nombre,
            puntaje: puntaje.toFixed(2),
            categoria: categoria
        };
    });
};

const lista = [
    { nombre: "Casa Rural", tiempoRender: 10, puntosCalidad: 100 },
    { nombre: "Edificio", tiempoRender: 50, puntosCalidad: 50 }
];

console.log(calcularRanking(lista, 1.2));