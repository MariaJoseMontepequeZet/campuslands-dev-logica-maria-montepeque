function calcularDistanciaSalto(paracaidista) {
  const {
    nombre,
    puntoInicio,
    puntoAterrizaje
  } = paracaidista;

  if (
    !Array.isArray(puntoInicio) ||
    !Array.isArray(puntoAterrizaje) ||
    puntoInicio.length !== 3 ||
    puntoAterrizaje.length !== 3
  ) {
    return {
      estado: "Error",
      motivo: "Las coordenadas deben tener tres dimensiones [x, y, z]."
    };
  }

  const distancia = Math.sqrt(
    Math.pow(puntoAterrizaje[0] - puntoInicio[0], 2) +
    Math.pow(puntoAterrizaje[1] - puntoInicio[1], 2) +
    Math.pow(puntoAterrizaje[2] - puntoInicio[2], 2)
  );

  const distanciaFinal = Number(distancia.toFixed(2));

  let categoria;

  if (distanciaFinal >= 1000) {
    categoria = "Salto Extremo";
  } else if (distanciaFinal >= 500) {
    categoria = "Salto Avanzado";
  } else {
    categoria = "Salto Básico";
  }

  return {
    paracaidista: nombre,
    distanciaRecorrida: `${distanciaFinal} metros`,
    categoria
  };
}

const salto = {
  nombre: "Alex",
  puntoInicio: [0, 0, 1200],
  puntoAterrizaje: [300, 400, 200]
};

console.log(calcularDistanciaSalto(salto));