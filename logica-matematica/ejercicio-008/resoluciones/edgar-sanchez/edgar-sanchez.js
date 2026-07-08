function calcularDesviacionPatron(calificacionesPelicula, puntuacionReferencia) {
    if (calificacionesPelicula.length === 0) {
      return 0.0;
    }
  
    let sumaDesviaciones = 0;
  
    for (let indice = 0; indice < calificacionesPelicula.length; indice++) {
      sumaDesviaciones += Math.abs(calificacionesPelicula[indice] - puntuacionReferencia);
    }
  
    const desviacionPromedio = sumaDesviaciones / calificacionesPelicula.length;
    return Number(desviacionPromedio.toFixed(2));
  }
  
  function ejecutarPruebasPatrones() {
    const resultadoNormal = calcularDesviacionPatron([8.5, 7.0, 9.0], 8.0);
    if (resultadoNormal !== 0.67) {
      process.exit(1);
    }
  
    const resultadoBorde = calcularDesviacionPatron([], 8.0);
    if (resultadoBorde !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasPatrones();