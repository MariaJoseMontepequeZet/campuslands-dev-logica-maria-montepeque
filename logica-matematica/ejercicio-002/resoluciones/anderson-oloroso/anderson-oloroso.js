function calcularRankingEquipo(equipo) {
  const {
    nombre,
    partidosJugados,
    victorias,
    empates,
    derrotas,
    golesAFavor,
    golesEnContra
  } = equipo;

  if (
    partidosJugados <= 0 ||
    victorias < 0 ||
    empates < 0 ||
    derrotas < 0 ||
    golesAFavor < 0 ||
    golesEnContra < 0
  ) {
    return {
      estado: "Error",
      motivo: "Los datos del equipo deben ser valores válidos."
    };
  }

  const puntos = (victorias * 3) + (empates * 1);

  const porcentajeVictorias = Number(
    ((victorias / partidosJugados) * 100).toFixed(2)
  );

  const diferenciaGoles = golesAFavor - golesEnContra;

  let categoria;

  if (puntos >= 15 && porcentajeVictorias >= 60) {
    categoria = "Equipo Lider";
  } else if (puntos >= 8) {
    categoria = "Equipo Competitivo";
  } else {
    categoria = "Equipo en Desarrollo";
  }

  return {
    equipo: nombre,
    puntos,
    porcentajeVictorias: `${porcentajeVictorias}%`,
    diferenciaGoles,
    categoria
  };
}

const equipo = {
  nombre: "Titanes FC",
  partidosJugados: 10,
  victorias: 7,
  empates: 1,
  derrotas: 2,
  golesAFavor: 35,
  golesEnContra: 18
};

console.log(calcularRankingEquipo(equipo));