# Lógica matemáticas 028 - patrones de puntuacion
## Entrada:
Un arreglo con películas de ciencia ficción y su puntuación.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre cada película y se clasifica como puntuación alta, media o baja según su calificación. También se cuenta la cantidad de películas con puntuación alta.

## Salida:
- Clasificación de cada película según su puntuación.
- Cantidad de películas con puntuación alta.

# Reglas identificadas

- El arreglo debe contener al menos una película.
- Si la puntuación es mayor o igual a 8.5, la película tiene puntuación alta.
- Si la puntuación está entre 7.5 y 8.4, la película tiene puntuación media.
- Si la puntuación es menor a 7.5, la película tiene puntuación baja.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco películas y diferentes puntuaciones.

### Resultado esperado:
Se muestra la clasificación de cada película y la cantidad de películas con puntuación alta.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay películas registradas."**

# Explicación final

La solución funciona porque primero verifica que existan películas registradas. Después utiliza un ciclo para recorrer el arreglo y aplica condiciones para clasificar cada película según su puntuación. Finalmente cuenta cuántas películas tienen una puntuación alta y muestra el resultado.

# Sugerencia

Define primero los rangos de puntuación antes de programar las condiciones para que la clasificación sea clara y fácil de modificar.