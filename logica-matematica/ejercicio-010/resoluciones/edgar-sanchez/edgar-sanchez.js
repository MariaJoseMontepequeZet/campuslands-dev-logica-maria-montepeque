function calcularCuotaViaje(costoTotalPaquete, cantidadViajeros) {
    const reporteFinanciero = {
      cuotaIndividual: 0.0,
      saldoAjuste: 0.0
    };
  
    if (cantidadViajeros <= 0) {
      return reporteFinanciero;
    }
  
    const divisionExacta = costoTotalPaquete / cantidadViajeros;
    reporteFinanciero.cuotaIndividual = Number(divisionExacta.toFixed(2));
    
    const costoTotalRedondeado = reporteFinanciero.cuotaIndividual * cantidadViajeros;
    const diferenciaAjuste = costoTotalRedondeado - costoTotalPaquete;
    reporteFinanciero.saldoAjuste = Number(diferenciaAjuste.toFixed(2));
  
    return reporteFinanciero;
  }
  
  function ejecutarPruebasTurismo() {
    const resultadoNormal = calcularCuotaViaje(1000.55, 3);
    if (resultadoNormal.cuotaIndividual !== 333.52 || resultadoNormal.saldoAjuste !== 0.01) {
      process.exit(1);
    }
  
    const resultadoBorde = calcularCuotaViaje(500.00, 0);
    if (resultadoBorde.cuotaIndividual !== 0.0 || resultadoBorde.saldoAjuste !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasTurismo();