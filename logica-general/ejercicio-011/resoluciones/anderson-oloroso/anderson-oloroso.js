const peleaEmpate = [
  {
    round: 1,
    peleador1: { cabeza: 2, cuerpo: 2, pierna: 2, derribos: 0 },
    peleador2: { cabeza: 2, cuerpo: 3, pierna: 0, derribos: 0 }
  }
];

function calcularPuntos(peleador) {
  const puntosCabeza = peleador.cabeza * 3;
  const puntosCuerpo = peleador.cuerpo * 2;
  const puntosPierna = peleador.pierna * 1;
  const puntosDerribos = peleador.derribos * 5;

  return puntosCabeza + puntosCuerpo + puntosPierna + puntosDerribos;
}

function determinarGanador(pelea) {
  if (!pelea || pelea.length === 0) {
    return { error: "No hay datos de la pelea" };
  }

  let totalPeleador1 = 0;
  let totalPeleador2 = 0;

  for (const round of pelea) {
    totalPeleador1 += calcularPuntos(round.peleador1);
    totalPeleador2 += calcularPuntos(round.peleador2);
  }

  let ganador;
  if (totalPeleador1 > totalPeleador2) {
    ganador = "Gana Peleador 1";
  } else if (totalPeleador2 > totalPeleador1) {
    ganador = "Gana Peleador 2";
  } else {
    ganador = "Empate técnico";
  }

  return {
    ganador: ganador,
    puntosPeleador1: totalPeleador1,
    puntosPeleador2: totalPeleador2,
    detalle: `Peleador 1: ${totalPeleador1} pts | Peleador 2: ${totalPeleador2} pts`
  };
}

console.log(determinarGanador(peleaEmpate));