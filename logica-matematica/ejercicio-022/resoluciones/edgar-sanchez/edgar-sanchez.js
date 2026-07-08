function evaluarRankingFutbolSala(ganados, empatados, jugados, esVisitante) {
    const reporteRanking = {
      porcentajeEfectividad: 0.0,
      rendimiento: "Inconsistente"
    };
  
    // Validaciones de consistencia de datos
    if (jugados <= 0 || (ganados + empatados) > jugados || ganados < 0 || empatados < 0) {
      return reporteRanking;
    }
  
    const puntosObtenidos = (ganados * 3) + (empatados * 1);
    const puntosMaximosPosibles = jugados * 3;
    
    let efectividad = (puntosObtenidos / puntosMaximosPosibles) * 100;
  
    // Aplicar bonificación por condición especial de visitante
    if (esVisitante && efectividad >= 50.0) {
      efectividad += 5.0;
      if (efectividad > 100.0) {
        efectividad = 100.0;
      }
    }
  
    reporteRanking.porcentajeEfectividad = Number(efectividad.toFixed(2));
  
    // Asignar etiqueta de rendimiento basada en la proporción final
    if (reporteRanking.porcentajeEfectividad >= 70.0) {
      reporteRanking.rendimiento = "Excelente";
    } else if (reporteRanking.porcentajeEfectividad >= 40.0) {
      reporteRanking.rendimiento = "Regular";
    } else {
      reporteRanking.rendimiento = "Deficiente";
    }
  
    return reporteRanking;
  }
  
  function ejecutarPruebasFutbolSala() {
    // Caso 1: Normal con bonificación de visitante
    const resultadoNormal = evaluarRankingFutbolSala(3, 1, 5, true);
    if (resultadoNormal.porcentajeEfectividad !== 71.67 || resultadoNormal.rendimiento !== "Excelente") {
      process.exit(1);
    }
  
    // Caso 2: Inconsistencia (más partidos ganados/empatados que jugados)
    const resultadoBorde = evaluarRankingFutbolSala(4, 2, 5, false);
    if (resultadoBorde.porcentajeEfectividad !== 0.0 || resultadoBorde.rendimiento !== "Inconsistente") {
      process.exit(1);
    }
  }
  
  ejecutarPruebasFutbolSala();