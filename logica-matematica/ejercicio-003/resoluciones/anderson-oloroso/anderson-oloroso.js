function analizarRendimientoEquipo(equipo) {
  const { nombre, partidas } = equipo;

  if (!Array.isArray(partidas) || partidas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una partida registrada."
    };
  }

  const puntajes = partidas.map(partida => partida.puntos);

  if (puntajes.some(puntos => puntos < 0)) {
    return {
      estado: "Error",
      motivo: "Los puntajes no pueden ser negativos."
    };
  }

  const promedio = Number(
    (
      puntajes.reduce((total, puntos) => total + puntos, 0) /
      puntajes.length
    ).toFixed(2)
  );

  const valoresOrdenados = [...puntajes].sort((a, b) => a - b);

  let mediana;

  if (valoresOrdenados.length % 2 === 0) {
    const mitad = valoresOrdenados.length / 2;

    mediana = Number(
      ((valoresOrdenados[mitad - 1] + valoresOrdenados[mitad]) / 2).toFixed(2)
    );
  } else {
    mediana = valoresOrdenados[Math.floor(valoresOrdenados.length / 2)];
  }

  let clasificacion;

  if (promedio >= 80 && mediana >= 80) {
    clasificacion = "Equipo Dominante";
  } else if (promedio >= 50) {
    clasificacion = "Equipo Competitivo";
  } else {
    clasificacion = "Equipo en Entrenamiento";
  }

  return {
    equipo: nombre,
    promedio,
    mediana,
    clasificacion
  };
}

const equipo = {
  nombre: "Cyber Wolves",
  partidas: [
    { puntos: 90 },
    { puntos: 75 },
    { puntos: 85 },
    { puntos: 95 },
    { puntos: 60 }
  ]
};

console.log(analizarRendimientoEquipo(equipo));