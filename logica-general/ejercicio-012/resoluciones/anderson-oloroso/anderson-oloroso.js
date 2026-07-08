const setDeuce = {
  jugador1: "Juan",
  jugador2: "Pedro",
  secuenciaPuntos: [
    "Juan", "Pedro", "Juan", "Pedro", "Juan",
    "Pedro", "Juan", "Pedro", "Juan", "Pedro",
    "Juan", "Pedro", "Juan", "Pedro", "Juan",
    "Pedro", "Juan", "Pedro", "Juan", "Pedro",
    "Juan", "Juan"
  ]
};

function analizarSet(set) {
  if (!set || !set.secuenciaPuntos || set.secuenciaPuntos.length === 0) {
    return { error: "No hay datos del set" };
  }

  let puntosJ1 = 0;
  let puntosJ2 = 0;
  let huboDeuce = false;
  let ganador = null;
  let puntoFinal = 0;

  for (let i = 0; i < set.secuenciaPuntos.length; i++) {
    const puntoGanador = set.secuenciaPuntos[i];

    if (puntoGanador === set.jugador1) {
      puntosJ1++;
    } else if (puntoGanador === set.jugador2) {
      puntosJ2++;
    }

    puntoFinal = i + 1;

    const diferencia = Math.abs(puntosJ1 - puntosJ2);
    const maxPuntos = Math.max(puntosJ1, puntosJ2);

    if (puntosJ1 === 10 && puntosJ2 === 10) {
      huboDeuce = true;
    }

    if (maxPuntos >= 11 && diferencia >= 2) {
      ganador = puntosJ1 > puntosJ2 ? set.jugador1 : set.jugador2;
      break; 
    }
  }

  if (!ganador) {
    return {
      error: "Set incompleto",
      marcador: `${set.jugador1}: ${puntosJ1} | ${set.jugador2}: ${puntosJ2}`,
      puntosJugados: puntoFinal,
      huboDeuce: huboDeuce
    };
  }

  return {
    ganador: ganador,
    marcador: `${set.jugador1}: ${puntosJ1} | ${set.jugador2}: ${puntosJ2}`,
    puntosJugados: puntoFinal,
    huboDeuce: huboDeuce,
    detalle: huboDeuce
      ? `Set con deuce ganado por ${ganador}`
      : `Set ganado por ${ganador} sin deuce`
  };
}

console.log(analizarSet(setDeuce));