function normalizarPuntajesSoldadura(trabajos) {
  if (!Array.isArray(trabajos) || trabajos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un trabajo de soldadura."
    };
  }

  const puntajes = trabajos.map(trabajo => trabajo.puntaje);

  const minimo = Math.min(...puntajes);
  const maximo = Math.max(...puntajes);

  if (minimo < 0 || maximo > 100) {
    return {
      estado: "Error",
      motivo: "Los puntajes deben estar entre 0 y 100."
    };
  }

  const trabajosNormalizados = trabajos.map(trabajo => {
    const puntajeNormalizado =
      ((trabajo.puntaje - minimo) / (maximo - minimo)) * 100;

    return {
      nombre: trabajo.nombre,
      puntajeOriginal: trabajo.puntaje,
      puntajeNormalizado: Number(
        puntajeNormalizado.toFixed(2)
      )
    };
  });

  return {
    trabajosEvaluados: trabajos.length,
    rangoOriginal: {
      minimo,
      maximo
    },
    resultados: trabajosNormalizados
  };
}

const trabajos = [
  {
    nombre: "Soldadura Industrial A",
    puntaje: 70
  },
  {
    nombre: "Soldadura Estructural B",
    puntaje: 85
  },
  {
    nombre: "Soldadura Precisa C",
    puntaje: 95
  }
];

console.log(normalizarPuntajesSoldadura(trabajos));