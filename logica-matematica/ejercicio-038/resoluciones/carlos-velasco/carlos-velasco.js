const normalizarPuntajes = (resultados, maximo) => {
    return resultados.map(res => {
        let normalizado = (res / maximo) * 100;
        let calificacion = normalizado >= 60 ? "Aprobado" : "Rechazado";
        
        return {
            valorOriginal: res,
            valorNormalizado: normalizado.toFixed(2),
            calificacion: calificacion
        };
    });
};

console.log(normalizarPuntajes([45, 80, 20], 100));
console.log(normalizarPuntajes([15, 20], 25));