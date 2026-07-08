function peliculasDeMiedo(peliculas, { umbral } = {}) {
  const resultado = [];

  for (const p of peliculas) {

    if (p.disponible !== true) continue;

    if (typeof p.miedo !== "number") continue;
    if (p.miedo < umbral) continue;

    resultado.push(p);
  }

  resultado.sort((a, b) => {
    if (b.miedo !== a.miedo) return b.miedo - a.miedo;
    return (b.anio ?? 0) - (a.anio ?? 0);
  });

  return resultado;
}

const peliculas = [
  { titulo: "Sombra", disponible: true, miedo: 8, anio: 2019 },
  { titulo: "Grieta", disponible: false, miedo: 10, anio: 2021 },
  { titulo: "Niebla", disponible: true, miedo: 6, anio: 2010 },
  { titulo: "Umbral1", disponible: true, miedo: 7, anio: 2015 }, // borde: = umbral
  { titulo: "Umbral2", disponible: true, miedo: 7, anio: 2020 }, // borde: = umbral, mismo miedo
];

const umbral = 7;
console.log(peliculasDeMiedo(peliculas, { umbral }));