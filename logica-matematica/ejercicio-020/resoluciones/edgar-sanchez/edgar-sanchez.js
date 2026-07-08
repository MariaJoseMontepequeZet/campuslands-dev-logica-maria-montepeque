function simularVentasComidaUrbana(clientesPeatonales, porcionesPreparadas, tasaConversion) {
    const reporteSimulacion = {
      porcionesVendidas: 0,
      porcionesMerma: 0
    };
  
    if (clientesPeatonales <= 0 || porcionesPreparadas <= 0) {
      return reporteSimulacion;
    }
  
    // Calcular la demanda teórica basada en la tasa de conversión
    const demandaProyectada = Math.floor(clientesPeatonales * tasaConversion);
  
    // Las ventas reales no pueden superar lo que se preparó en el puesto
    reporteSimulacion.porcionesVendidas = Math.min(demandaProyectada, porcionesPreparadas);
  
    // La merma es lo que se preparó de más y no se logró vender
    if (porcionesPreparadas > reporteSimulacion.porcionesVendidas) {
      reporteSimulacion.porcionesMerma = porcionesPreparadas - reporteSimulacion.porcionesVendidas;
    } else {
      reporteSimulacion.porcionesMerma = 0;
    }
  
    return reporteSimulacion;
  }
  
  function ejecutarPruebasComidaUrbana() {
    const resultadoNormal = simularVentasComidaUrbana(500, 60, 0.10);
    if (resultadoNormal.porcionesVendidas !== 50 || resultadoNormal.porcionesMerma !== 10) {
      process.exit(1);
    }
  
    const resultadoBorde = simularVentasComidaUrbana(0, 0, 0.10);
    if (resultadoBorde.porcionesVendidas !== 0 || resultadoBorde.porcionesMerma !== 0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasComidaUrbana();