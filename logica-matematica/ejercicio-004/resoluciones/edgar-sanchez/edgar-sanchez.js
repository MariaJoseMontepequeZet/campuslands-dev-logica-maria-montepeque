function analizarInventarioMotos(inventarioMotos) {
    const reporteFinal = {
      conteos: { Urbana: 0, Intermedia: 0, AltaCilindrada: 0 },
      modeloMasCaro: ""
    };
  
    if (inventarioMotos.length === 0) {
      return reporteFinal;
    }
  
    let precioMaximoEncontrado = -1;
  
    for (let indice = 0; indice < inventarioMotos.length; indice++) {
      const motoActual = inventarioMotos[indice];
  
      if (motoActual.cilindrada < 250) {
        reporteFinal.conteos.Urbana++;
      } else if (motoActual.cilindrada < 600) {
        reporteFinal.conteos.Intermedia++;
      } else {
        reporteFinal.conteos.AltaCilindrada++;
      }
  
      if (motoActual.precio > precioMaximoEncontrado) {
        precioMaximoEncontrado = motoActual.precio;
        reporteFinal.modeloMasCaro = motoActual.modelo;
      }
    }
  
    return reporteFinal;
  }
  
  function ejecutarPruebasInventario() {
    const inventarioDatos = [
      { modelo: "Scooter 125", cilindrada: 125, precio: 2500.0 },
      { modelo: "Sport 300", cilindrada: 300, precio: 5500.0 },
      { modelo: "Touring 1000", cilindrada: 1000, precio: 15000.0 }
    ];
  
    const resultadoNormal = analizarInventarioMotos(inventarioDatos);
    if (resultadoNormal.conteos.Urbana !== 1 || resultadoNormal.modeloMasCaro !== "Touring 1000") {
      process.exit(1);
    }
  
    const resultadoVacio = analizarInventarioMotos([]);
    if (resultadoVacio.modeloMasCaro !== "") {
      process.exit(1);
    }
  }
  
  ejecutarPruebasInventario();