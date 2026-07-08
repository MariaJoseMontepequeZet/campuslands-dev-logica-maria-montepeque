function calcularProbabilidadSaque(saquesGanados, saquesEjecutados) {
    if (saquesEjecutados === 0) {
      return 0.0;
    }
  
    const probabilidadDecimal = saquesGanados / saquesEjecutados;
    const porcentajeProbabilidad = probabilidadDecimal * 100;
  
    return Number(porcentajeProbabilidad.toFixed(2));
  }
  
  function ejecutarPruebasPingPong() {
    const resultadoNormal = calcularProbabilidadSaque(15, 20);
    if (resultadoNormal !== 75.0) {
      process.exit(1);
    }
  
    const resultadoBorde = calcularProbabilidadSaque(0, 0);
    if (resultadoBorde !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasPingPong();