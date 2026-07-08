function calcularAnimacionDibujo(animacion) {
  const {
    nombre,
    velocidad,
    tiempo
  } = animacion;

  if (velocidad <= 0 || tiempo <= 0) {
    return {
      estado: "Error",
      motivo: "La velocidad y el tiempo deben ser mayores que cero."
    };
  }

  const distanciaRecorrida = Number(
    (velocidad * tiempo).toFixed(2)
  );

  const posicionFinal = {
    x: distanciaRecorrida,
    y: 0
  };

  let estadoMovimiento;

  if (distanciaRecorrida >= 1000) {
    estadoMovimiento = "Animacion de largo recorrido";
  } else if (distanciaRecorrida >= 500) {
    estadoMovimiento = "Animacion de recorrido medio";
  } else {
    estadoMovimiento = "Animacion de recorrido corto";
  }

  return {
    dibujo: nombre,
    distanciaRecorrida,
    posicionFinal,
    estadoMovimiento
  };
}

const animacion = {
  nombre: "Figura Pixel",
  velocidad: 80,
  tiempo: 10
};

console.log(calcularAnimacionDibujo(animacion));