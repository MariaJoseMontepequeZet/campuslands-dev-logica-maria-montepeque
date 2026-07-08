function analizarSecuenciaPlaylist(canciones) {
  if (!Array.isArray(canciones) || canciones.length === 0) {
    return {
      estado: "Error",
      motivo: "La playlist debe contener al menos una canción."
    };
  }

  const duraciones = canciones.map(cancion => cancion.duracion);

  if (duraciones.some(duracion => duracion <= 0)) {
    return {
      estado: "Error",
      motivo: "Las duraciones deben ser mayores a cero."
    };
  }

  const duracionTotal = duraciones.reduce(
    (total, duracion) => total + duracion,
    0
  );

  const diferencias = [];

  for (let i = 1; i < duraciones.length; i++) {
    diferencias.push(duraciones[i] - duraciones[i - 1]);
  }

  const esAscendente = diferencias.every(
    diferencia => diferencia > 0
  );

  const esDescendente = diferencias.every(
    diferencia => diferencia < 0
  );

  let tipoSecuencia;

  if (esAscendente) {
    tipoSecuencia = "Secuencia Ascendente";
  } else if (esDescendente) {
    tipoSecuencia = "Secuencia Descendente";
  } else {
    tipoSecuencia = "Secuencia Mixta";
  }

  return {
    cantidadCanciones: canciones.length,
    duracionTotalSegundos: duracionTotal,
    tipoSecuencia
  };
}

const playlist = [
  {
    titulo: "Intro",
    duracion: 120
  },
  {
    titulo: "Energia",
    duracion: 180
  },
  {
    titulo: "Final",
    duracion: 240
  }
];

console.log(analizarSecuenciaPlaylist(playlist));