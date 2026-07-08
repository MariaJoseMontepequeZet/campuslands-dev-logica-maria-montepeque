# Plantilla de solucion

## Analisis

- Entrada: Objeto js con los datos a preocesar de peliculas
- Proceso: Serie de filtros para verificar si cumplen los estipulado
- Salida: Array con los datos que cumplieron

## Reglas identificadas

1. Debe ser ciencia ficcion
2. Año y sus limites
3. Calificacion minima

## Pruebas

### Caso normal

Entrada:
``` js
const peliculas = [
  { titulo: "Dune", genero: "ciencia ficcion", anio: 2021, calificacion: 8.5 },
  { titulo: "Interstellar", genero: "ciencia ficcion", anio: 2014, calificacion: 8.6 },
  { titulo: "Toy Story", genero: "animacion", anio: 1995, calificacion: 8.0 },
];

console.log(peliculasSCiFi(peliculas, { anioMin: 2014, anioMax: 2021, minCalificacion: 8.5 }));
```

Resultado esperado:
{titulo: 'Dune', genero: 'ciencia ficcion', anio: 2021, calificacion: 8.5}
{titulo: 'Interstellar', genero: 'ciencia ficcion', anio: 2014, calificacion: 8.6}


### Caso borde

Entrada:
``` js
const peliculas = [
  { titulo: "A-min", genero: "ciencia ficcion", anio: 2010, calificacion: 8.5 },
  { titulo: "A-max", genero: "ciencia ficcion", anio: 2021, calificacion: 8.5 },
  { titulo: "Fuera", genero: "ciencia ficcion", anio: 2009, calificacion: 8.5 },
];

console.log(peliculasSCiFi(peliculas, { anioMin: 2010, anioMax: 2021, minCalificacion: 8.5 }));

```

Resultado esperado:
[
  { titulo: "A-min", genero: "ciencia ficcion", anio: 2010, calificacion: 8.5 },
  { titulo: "A-max", genero: "ciencia ficcion", anio: 2021, calificacion: 8.5 },
]

## Explicacion final

El programa Recibe un objeto con los datos js y se encarga de filtrar y obtener los datos segun los criterios de busqueda.
