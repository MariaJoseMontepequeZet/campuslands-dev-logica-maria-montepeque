function calcularPresupuestoAnimacion(proyecto) {
  const {
    nombre,
    modelado3D,
    texturas,
    animacion,
    renderizado,
    cantidadEscenas
  } = proyecto;

  const costos = [
    modelado3D,
    texturas,
    animacion,
    renderizado
  ];

  if (
    costos.some(costo => costo < 0) ||
    cantidadEscenas <= 0
  ) {
    return {
      estado: "Error",
      motivo: "Los costos y la cantidad de escenas deben ser válidos."
    };
  }

  const costoBase = costos.reduce(
    (total, costo) => total + costo,
    0
  );

  let descuento = 0;

  if (cantidadEscenas >= 10) {
    descuento = 0.15;
  } else if (cantidadEscenas >= 5) {
    descuento = 0.10;
  }

  const valorDescuento = Number(
    (costoBase * descuento).toFixed(2)
  );

  const costoFinal = Number(
    (costoBase - valorDescuento).toFixed(2)
  );

  return {
    proyecto: nombre,
    costoInicial: costoBase,
    descuentoAplicado: `${descuento * 100}%`,
    valorDescuento,
    costoFinal
  };
}

const proyecto = {
  nombre: "Guardianes del Espacio",
  modelado3D: 5000,
  texturas: 2500,
  animacion: 7000,
  renderizado: 3000,
  cantidadEscenas: 12
};

console.log(calcularPresupuestoAnimacion(proyecto));