function calcularDimensionesTatuaje(anchoCentimetros, altoCentimetros) {
    const reporteDimensiones = {
      areaCuadrada: 0.0,
      perimetroLineal: 0.0
    };
  
    if (anchoCentimetros <= 0 || altoCentimetros <= 0) {
      return reporteDimensiones;
    }
  
    const areaCalculada = anchoCentimetros * altoCentimetros;
    const perimetroCalculado = 2 * (anchoCentimetros + altoCentimetros);
  
    reporteDimensiones.areaCuadrada = Number(areaCalculada.toFixed(2));
    reporteDimensiones.perimetroLineal = Number(perimetroCalculado.toFixed(2));
  
    return reporteDimensiones;
  }
  
  function ejecutarPruebasTatuajes() {
    const resultadoNormal = calcularDimensionesTatuaje(8.5, 12.0);
    if (resultadoNormal.areaCuadrada !== 102.0 || resultadoNormal.perimetroLineal !== 41.0) {
      process.exit(1);
    }
  
    const resultadoBorde = calcularDimensionesTatuaje(0.0, 15.0);
    if (resultadoBorde.areaCuadrada !== 0.0 || resultadoBorde.perimetroLineal !== 0.0) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasTatuajes();