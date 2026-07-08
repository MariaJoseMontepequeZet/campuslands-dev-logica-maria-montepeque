function peliculasSCiFi(peliculas, { anioMin, anioMax, minCalificacion } = {}) {
  const resultado = [];

  for (const p of peliculas) {

    if (p.genero !== "ciencia ficcion") continue;

    if (anioMin != null && p.anio < anioMin) continue;
    if (anioMax != null && p.anio > anioMax) continue;

    if (minCalificacion != null && p.calificacion < minCalificacion) continue;

    resultado.push(p);
  }

  return resultado;
}

const peliculas = [
  { titulo: "A-min", genero: "ciencia ficcion", anio: 2010, calificacion: 8.5 },
  { titulo: "A-max", genero: "ciencia ficcion", anio: 2021, calificacion: 8.5 },
  { titulo: "Fuera", genero: "ciencia ficcion", anio: 2009, calificacion: 8.5 },
];

console.log(peliculasSCiFi(peliculas, { anioMin: 2010, anioMax: 2021, minCalificacion: 8.5 }));