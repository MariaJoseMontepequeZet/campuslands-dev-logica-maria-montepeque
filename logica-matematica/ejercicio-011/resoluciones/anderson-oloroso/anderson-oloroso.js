function calcularCombinacionesGolpes(combinaciones) {
  const { golpesDisponibles, cantidadGolpes } = combinaciones;

  if (
    golpesDisponibles <= 0 ||
    cantidadGolpes <= 0 ||
    !Number.isInteger(golpesDisponibles) ||
    !Number.isInteger(cantidadGolpes)
  ) {
    return {
      estado: "Error",
      motivo: "Los valores deben ser enteros positivos."
    };
  }

  let totalCombinaciones = 1;

  for (let i = 0; i < cantidadGolpes; i++) {
    totalCombinaciones *= golpesDisponibles;
  }

  return {
    golpesDisponibles,
    cantidadGolpes,
    totalCombinaciones
  };
}

const entrenamiento = {
  golpesDisponibles: 4,
  cantidadGolpes: 3
};

console.log(calcularCombinacionesGolpes(entrenamiento));