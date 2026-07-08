const calcularReposicion = (stockActual, min, max) => {
    if (max <= min) return "Error: El máximo debe ser mayor al mínimo.";
    
    let cantidadAComprar = 0;
    let accion = "Esperar";

    if (stockActual < min) {
        accion = "Comprar";
        cantidadAComprar = max - stockActual;
    }

    return {
        accion: accion,
        cantidad_a_comprar: cantidadAComprar,
        explicacion: `Stock actual ${stockActual}. Límite mínimo ${min}. Límite máximo ${max}.`
    };
};

console.log(calcularReposicion(5, 10, 50)); 
console.log(calcularReposicion(15, 10, 50)); 