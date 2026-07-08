function analizarPeliculasMiedo(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una película registrada."
    };
  }

  const peliculasValidas = peliculas.filter(
    pelicula =>
      pelicula.duracion > 0 &&
      pelicula.nivelMiedo >= 1 &&
      pelicula.nivelMiedo <= 10
  );

  if (peliculasValidas.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen películas con datos válidos."
    };
  }

  const peliculasDivisibles = peliculasValidas.filter(
    pelicula => pelicula.duracion % 30 === 0
  );

  const promedioNivelMiedo = Number(
    (
      peliculasValidas.reduce(
        (total, pelicula) => total + pelicula.nivelMiedo,
        0
      ) / peliculasValidas.length
    ).toFixed(2)
  );

  const peliculaMasTerrorifica = peliculasValidas.reduce(
    (mayor, pelicula) =>
      pelicula.nivelMiedo > mayor.nivelMiedo
        ? pelicula
        : mayor
  );

  return {
    totalPeliculas: peliculasValidas.length,
    peliculasConDuracionDivisiblePor30: peliculasDivisibles.length,
    promedioNivelMiedo,
    peliculaMasTerrorifica: peliculaMasTerrorifica.titulo
  };
}

const peliculas = [
  {
    titulo: "La Casa Oscura",
    duracion: 120,
    nivelMiedo: 8
  },
  {
    titulo: "Sombras Eternas",
    duracion: 95,
    nivelMiedo: 7
  },
  {
    titulo: "El Ritual Final",
    duracion: 150,
    nivelMiedo: 10
  }
];

console.log(analizarPeliculasMiedo(peliculas));