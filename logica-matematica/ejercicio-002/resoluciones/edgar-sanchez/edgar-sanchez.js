function calcularEfectividadEquipo(partidosGanados, partidosEmpatados, partidosJugados) {
    if (partidosJugados === 0) {
      return 0.0;
    }
  
    const puntosPosibles = partidosJugados * 3;
    const puntosObtenidos = (partidosGanados * 3) + partidosEmpatados;
    const porcentajeEfectividad = (puntosObtenidos / puntosPosibles) * 100;
  
    return Number(porcentajeEfectividad.toFixed(2));
  }
  
  function ejecutarPruebasRanking() {
    const resultadoCasoNormal = calcularEfectividadEquipo(5, 2, 8);
    if (resultadoCasoNormal !== 70.83) {
      process.exit(1);
    }
  
    const resultadoCasoBorde = calcularEfectividadEquipo(0, 0, 0);
    if (resultadoCasoBorde !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasRanking();