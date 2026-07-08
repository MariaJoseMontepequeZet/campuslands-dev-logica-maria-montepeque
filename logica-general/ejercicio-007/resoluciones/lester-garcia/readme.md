# Plantilla de solucion

## Analisis

- Entrada:
  - Lista de canciones de la playlist.

- Proceso:
  - Leer la lista de canciones.
  - Crear una colección con elementos únicos.
  - Comparar la cantidad de canciones originales con la cantidad de canciones únicas.
  - Si ambas cantidades son diferentes, significa que existen canciones repetidas.

- Salida:
  - Un mensaje indicando si la playlist es válida o si presenta inconsistencias.

## Reglas identificadas

1. Cada canción debe aparecer una sola vez en la playlist.
2. Si existen canciones repetidas, se considera una inconsistencia.
3. Si no hay canciones repetidas, la playlist es válida.

## Pruebas

### Caso normal

Entrada:

Playlist:
- Bohemian Rhapsody
- Imagine
- Hotel California
- Billie Jean

Resultado esperado:

La playlist es válida. No existen canciones repetidas.

### Caso borde

Entrada:

Playlist:
- Bohemian Rhapsody
- Imagine
- Hotel California
- Imagine
- Billie Jean

Resultado esperado:

Inconsistencia detectada: existen canciones repetidas en la playlist.

## Explicacion final

La solución funciona porque compara la cantidad de canciones originales con la cantidad de canciones únicas obtenidas mediante un `Set`. Si ambas cantidades son iguales, significa que no hay elementos repetidos y la playlist es válida. Si la cantidad disminuye al eliminar duplicados, se detecta una inconsistencia, cumpliendo así con las reglas del problema de forma sencilla y verificable.