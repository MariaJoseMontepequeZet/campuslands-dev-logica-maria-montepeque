# Plantilla de solucion

## Analisis

- Entrada:
  - Lista de películas de ciencia ficción.
  - Nombre de la película que se desea buscar.

- Proceso:
  - Leer el catálogo de películas.
  - Leer el nombre de la película a buscar.
  - Buscar la película dentro del catálogo.
  - Si existe, indicar que está disponible.
  - Si no existe, informar que no fue encontrada.
  - Finalizar el proceso.

- Salida:
  - Un mensaje indicando si la película fue encontrada o no.

## Reglas identificadas

1. Se debe recibir el nombre de la película que se desea buscar.
2. La búsqueda se realiza dentro del catálogo de películas.
3. El sistema debe informar si la película está disponible o no.

## Pruebas

### Caso normal

Entrada:

Catálogo:
- Interstellar
- The Matrix
- Blade Runner 2049
- Arrival
- Dune

Película buscada:

Dune

Resultado esperado:

Iniciando búsqueda...

Película encontrada.

Título: Dune

Estado: Disponible.

Proceso finalizado.

### Caso borde

Entrada:

Catálogo:
- Interstellar
- The Matrix
- Blade Runner 2049
- Arrival
- Dune

Película buscada:

Avatar

Resultado esperado:

Iniciando búsqueda...

La película no se encuentra en el catálogo.

Proceso finalizado.

## Explicacion final

La solución funciona porque sigue un flujo paso a paso: primero recibe el catálogo y el nombre de la película, luego realiza la búsqueda utilizando el método `includes()`, muestra el resultado correspondiente y finaliza el proceso. Este orden garantiza que cada etapa se ejecute de forma clara, lógica y verificable, cumpliendo con el objetivo del ejercicio.