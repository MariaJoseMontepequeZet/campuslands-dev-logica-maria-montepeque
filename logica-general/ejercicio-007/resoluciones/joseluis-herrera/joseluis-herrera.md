# Ejercicio 07

## Explicacion
En el siguiente ejercicio se realiza una busqueda de una incosistencia en una playlist en la cual usamos un for y una condificonal if donde el for hace un recorrido por una lista de objetos en la cual hay una incossitencia y la condicional if verifica si se cuentra una incosistencia o si no hay y si hay nos avisa y nos manda un reporte de incosistencia encontrada

## Caso normal 
```text
  {"titulo": "Canción Fantasma", "artista": "Un Artista Desconocido"}
```

¡INCONSISTENCIA encontrada!
La canción 'Canción Fantasma' tiene un artista no registrado: 'Un Artista Desconocido'
Se encontraron 1.

### Caso borde
```text
   {"titulo": "Safaera", "artista": "Bad Bunny"}
```

Resultado esperado:
No se encontraron inconsistencias en la playlist.