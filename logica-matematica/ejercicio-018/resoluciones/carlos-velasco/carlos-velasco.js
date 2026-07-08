const normalizarPuntajes = (puntajes, bono, penalizacion) => {
    return puntajes.map(p => {
        let final = p + bono - penalizacion;
        final = Math.max(0, Math.min(100, final));
        let categoria = final >= 90 ? "Excelente" : final >= 70 ? "Aceptable" : "Reprobado";
        return { puntaje: final, categoria: categoria };
    });
};

const resultados = normalizarPuntajes([85, 95, 50], 10, 5); 
console.log(resultados);