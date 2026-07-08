function calcularPresupuestoAnimacion(costoPorSegundo, segundosTotales) {
    if (costoPorSegundo <= 0 || segundosTotales <= 0) {
      return 0.0;
    }
  
    const presupuestoBruto = costoPorSegundo * segundosTotales;
    let porcentajeDescuento = 0.0;
  
    if (segundosTotales > 60) {
      porcentajeDescuento = 0.15;
    }
  
    const valorDescuento = presupuestoBruto * porcentajeDescuento;
    const presupuestoNeto = presupuestoBruto - valorDescuento;
  
    return Number(presupuestoNeto.toFixed(2));
  }
  
  function ejecutarPruebasAnimacion() {
    const resultadoNormal = calcularPresupuestoAnimacion(50.00, 80);
    if (resultadoNormal !== 3400.0) {
      process.exit(1);
    }
  
    const resultadoBorde = calcularPresupuestoAnimacion(50.00, 0);
    if (resultadoBorde !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasAnimacion();