function calcularProbabilidadVictoria(partidos) {
  if (!Array.isArray(partidos) || partidos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un partido registrado."
    };
  }

  let victorias = 0;
  let derrotas = 0;

  for (const partido of partidos) {
    if (partido.resultado === "Victoria") {
      victorias++;
    } else if (partido.resultado === "Derrota") {
      derrotas++;
    } else {
      return {
        estado: "Error",
        motivo: "El resultado del partido no es válido."
      };
    }
  }

  const totalPartidos = victorias + derrotas;

  const probabilidadVictoria = Number(
    ((victorias / totalPartidos) * 100).toFixed(2)
  );

  let nivelRendimiento;

  if (probabilidadVictoria >= 70) {
    nivelRendimiento = "Jugador Favorito";
  } else if (probabilidadVictoria >= 50) {
    nivelRendimiento = "Jugador Competitivo";
  } else {
    nivelRendimiento = "Jugador en Mejora";
  }

  return {
    partidosJugados: totalPartidos,
    victorias,
    derrotas,
    probabilidadVictoria: `${probabilidadVictoria}%`,
    nivelRendimiento
  };
}

const historial = [
  { resultado: "Victoria" },
  { resultado: "Victoria" },
  { resultado: "Derrota" },
  { resultado: "Victoria" },
  { resultado: "Derrota" }
];

console.log(calcularProbabilidadVictoria(historial));