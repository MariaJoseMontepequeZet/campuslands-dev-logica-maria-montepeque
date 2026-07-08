# Plantilla de solucion

## Analisis

- Entrada: Debe obtener datos de la playlist
- Proceso: Valida las consistencias de los datos que tengan exxplicitamente los datos necesarios
- Salida: Devuelve 2 arrays, uno con los datos con consistencias correctas y otra con inconsistencia

## Reglas identificadas

1. Titulo y artiste deben existir obligatoriamente
2. La duracion debe ser mayor a 0
3. El id no se puede repetir

## Pruebas

### Caso normal

Entrada:
``` js
const playlist = [
  { id: "A", titulo: "Andromeda", artista: "Rafa Espino ft. Droow ", duracionMin: 3 },
  { id: "B", titulo: "Sufrir es crecer", artista: "Shé", duracionMin: 2 },
  { id: "C", titulo: "Aprendí", artista: "Dante", duracionMin: 3 },
];
```

Resultado esperado:
Validas:

{id: 'A', titulo: 'Andromeda', artista: 'Rafa Espino ft. Droow ', duracionMin: 3}
{id: 'B', titulo: 'Sufrir es crecer', artista: 'Shé', duracionMin: 2}
{id: 'C', titulo: 'Aprendí', artista: 'Dante', duracionMin: 3}


### Caso borde

Entrada: Los datos no estan bien
``` js
const playlist = [
  { id: "A", titulo: "Andromeda", artista: "Rafa Espino ft. Droow ", duracionMin: 3 },
  { id: "B", titulo: "", artista: "Shé", duracionMin: 2 },
  { id: "C", titulo: "Aprendí", artista: "", duracionMin: 3 },
];
```

Resultado esperado:
Devolverá los 2 arrays, 2 inconsistencias y una valida

## Explicacion final

El programa funciona validando la consistencia de los datos revisando id, nombre y autor
