function clasificarJugadores(jugadores) {
    return jugadores.map(j => {
      const totalPartidas = j.victorias + j.derrotas;
      const ratio = totalPartidas === 0 ? 0 : j.victorias / totalPartidas;
      let rango = "NOVATO";
  
      if (j.nivel > 50 && ratio > 0.7) {
        rango = "PRO";
      } else if (j.nivel > 20 && ratio > 0.5) {
        rango = "VETERANO";
      }
  
      return { ...j, ratio: ratio.toFixed(2), rango };
    });
  }
  
  const listaJugadores = [
    { nombre: "Alpha", nivel: 60, victorias: 80, derrotas: 20 },
    { nombre: "Beta", nivel: 25, victorias: 50, derrotas: 40 },
    { nombre: "Gamma", nivel: 10, victorias: 5, derrotas: 15 }
  ];
  
  console.table(clasificarJugadores(listaJugadores));