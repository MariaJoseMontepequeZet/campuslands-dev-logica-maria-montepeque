# Plantilla de solucion

## Analisis

- Entrada: Objeto js con los cuales se trabajaran el resto de las condiciones
- Proceso: Se ejecutaran as reglas y deoendiendo de los resultados, se mostrarán el listado de las peliculas de terror que pasan los filtros
- Salida: Array de peliculas que cumplen

## Reglas identificadas

1. Tiene que estar disponible
2. Miedo mayor que umbral
3. Ordenar (miedo desc, empate por anio desc)

## Pruebas

### Caso normal

Entrada:
``` js
  { titulo: "Sombra", disponible: true, miedo: 8, anio: 2019 },
  { titulo: "Grieta", disponible: false, miedo: 10, anio: 2021 },
  { titulo: "Niebla", disponible: true, miedo: 6, anio: 2010 },
  { titulo: "Umbral1", disponible: true, miedo: 7, anio: 2015 }, 
  { titulo: "Umbral2", disponible: true, miedo: 7, anio: 2020 }, 
];

const umbral = 7;
console.log(peliculasDeMiedo(peliculas, { umbral }));
```

Resultado esperado:
Muestra: SOmbra, Umbral1, Umbral2

### Caso borde

Entrada:
``` js
  { titulo: "Sombra", disponible: true, miedo: 8, anio: 2019 },
  { titulo: "Grieta", disponible: false, miedo: 10, anio: 2021 },
  { titulo: "Niebla", disponible: true, miedo: 6, anio: 2010 },
  { titulo: "Umbral1", disponible: true, miedo: 7, anio: 2015 }, 
  { titulo: "Umbral2", disponible: true, miedo: 7, anio: 2015 }, 
];

const umbral = 7;
console.log(peliculasDeMiedo(peliculas, { umbral }));
```
Resultado esperado:
Muestra: Umbra1 y Umbral2

## Explicacion final

Escribe aqui por que tu solucion funciona.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
