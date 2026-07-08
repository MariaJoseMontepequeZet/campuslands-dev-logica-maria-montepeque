function analizarVelocidadHiperdeportivo(modeloAuto, velocidadMph) {
    const factorConversion = 1.60934;
    const velocidadKmhCalculada = velocidadMph * factorConversion;
    const velocidadKmhRedondeada = Number(velocidadKmhCalculada.toFixed(2));
    
    const esCazadorDeRecords = velocidadKmhRedondeada >= 400.0;
  
    return {
      velocidadKmh: velocidadKmhRedondeada,
      cazadorDeRecords: esCazadorDeRecords
    };
  }
  
  function ejecutarPruebasHiperdeportivos() {
    const resultadoNormal = analizarVelocidadHiperdeportivo("Chiron Super Sport", 304.7);
    if (resultadoNormal.velocidadKmh !== 490.36 || resultadoNormal.cazadorDeRecords !== true) {
      process.exit(1);
    }
  
    const resultadoBorde = analizarVelocidadHiperdeportivo("Prototipo Urbano", 0.0);
    if (resultadoBorde.velocidadKmh !== 0.0 || resultadoBorde.cazadorDeRecords !== false) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasHiperdeportivos();