function normalizarPuntuacionSoldadura(puntuacionDirecta, puntuacionMin, puntuacionMax) {
    const rangoEscala = puntuacionMax - puntuacionMin;
    
    if (rangoEscala <= 0) {
      return 0.0;
    }
  
    const factorNormalizado = (puntuacionDirecta - puntuacionMin) / rangoEscala;
    const puntuacionFinal = factorNormalizado * 100;
  
    return Number(puntuacionFinal.toFixed(2));
  }
  
  function ejecutarPruebasSoldadura() {
    const resultadoNormal = normalizarPuntuacionSoldadura(75.0, 50.0, 150.0);
    if (resultadoNormal !== 25.0) {
      process.exit(1);
    }
  
    const resultadoBorde = normalizarPuntuacionSoldadura(80.0, 100.0, 100.0);
    if (resultadoBorde !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasSoldadura();