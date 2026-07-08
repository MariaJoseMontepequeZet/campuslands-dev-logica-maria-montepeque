function analizarPuntuacionPeliculas(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una película registrada."
    };
  }

  const puntuaciones = peliculas.map(pelicula => pelicula.puntuacion);

  if (puntuaciones.some(puntuacion => puntuacion < 0 || puntuacion > 10)) {
    return {
      estado: "Error",
      motivo: "Las puntuaciones deben estar entre 0 y 10."
    };
  }

  const promedio = Number(
    (
      puntuaciones.reduce(
        (total, puntuacion) => total + puntuacion,
        0
      ) / puntuaciones.length
    ).toFixed(2)
  );

  let tendencia = "Sin patron definido";

  let aumentos = 0;
  let descensos = 0;

  for (let i = 1; i < puntuaciones.length; i++) {
    if (puntuaciones[i] > puntuaciones[i - 1]) {
      aumentos++;
    } else if (puntuaciones[i] < puntuaciones[i - 1]) {
      descensos++;
    }
  }

  if (aumentos === puntuaciones.length - 1) {
    tendencia = "Mejora progresiva";
  } else if (descensos === puntuaciones.length - 1) {
    tendencia = "Declive progresivo";
  } else if (aumentos > descensos) {
    tendencia = "Tendencia positiva";
  } else if (descensos > aumentos) {
    tendencia = "Tendencia negativa";
  }

  return {
    cantidadPeliculas: peliculas.length,
    promedioPuntuacion: promedio,
    tendencia
  };
}

const peliculas = [
  {
    titulo: "Galaxy Mission",
    puntuacion: 7.5
  },
  {
    titulo: "Nebula Wars",
    puntuacion: 8.2
  },
  {
    titulo: "Quantum Future",
    puntuacion: 9
  }
];

console.log(analizarPuntuacionPeliculas(peliculas));