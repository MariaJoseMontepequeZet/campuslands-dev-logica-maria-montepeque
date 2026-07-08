const equipos = [
    { nombreEquipo: "Los demonios", goles: 4 },
    { nombreEquipo: "Las gaviotas", goles: 6 },
    { nombreEquipo: "Los gatunos", goles: 9 },
    { nombreEquipo: "Las panteras", goles: 9}
  ];
  
  function ranking(arr) {
    const goles = arr.map(equipo => equipo.goles);
  
    const maxGoles = Math.max(...goles);
  
    const filtrarMasGoles = arr.filter(equipo => equipo.goles === maxGoles);
  
    const detalle = filtrarMasGoles.map(e => `${e.nombreEquipo}: ${e.goles} goles`).join(", ");
  
    return {
      accion: filtrarMasGoles.length === 1
        ? `1 Equipo con más goles -> ${detalle}`
        : `Equipos empatados (${maxGoles} goles) -> ${detalle}`,
  
      motivo: filtrarMasGoles.length === 1
        ? `1 con la Mayor cantidad de goles: ${maxGoles}`
        : `Hay más de un equipo con la Mayor cantidad de goles: ${maxGoles}`
    };
  }
  
  console.log(ranking(equipos));
  