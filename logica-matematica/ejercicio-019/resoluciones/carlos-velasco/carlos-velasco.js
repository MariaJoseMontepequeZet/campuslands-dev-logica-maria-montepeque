const validarMezcla = (reactivoA, reactivoB, factorIdeal) => {
    if (reactivoB === 0) return "Error: El reactivo B no puede ser 0.";
    
    const proporcion = reactivoA / reactivoB;
    const margen = factorIdeal * 0.05;

    if (Math.abs(proporcion - factorIdeal) <= margen) {
        return { estado: "Reacción Estable", proporcion: proporcion.toFixed(2) };
    } else if (proporcion < factorIdeal) {
        return { estado: "Inestable: Déficit de reactivo A", proporcion: proporcion.toFixed(2) };
    } else {
        return { estado: "Inestable: Exceso de reactivo A", proporcion: proporcion.toFixed(2) };
    }
};

console.log(validarMezcla(10, 5, 2));   
console.log(validarMezcla(5, 5, 2));   