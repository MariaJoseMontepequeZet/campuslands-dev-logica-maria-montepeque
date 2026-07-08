# Lógica general 029 - modulos y divisibilidad

## Entrada:
Un arreglo con películas de miedo y la duración de cada una en minutos.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre cada película y se utiliza el operador módulo (%) para verificar si su duración es divisible entre 10. También se cuenta la cantidad de películas que cumplen la condición.

## Salida:
- Mensaje indicando si la duración de cada película es divisible entre 10.
- Cantidad de películas que cumplen la condición.

# Reglas identificadas

- El arreglo debe contener al menos una película.
- Una duración es divisible entre 10 cuando el residuo de la división es igual a 0.
- Se cuenta únicamente a las películas que cumplen la condición.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco películas y diferentes duraciones.

### Resultado esperado:
Se indica cuáles películas tienen una duración divisible entre 10 y se muestra la cantidad total.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay películas registradas."**

# Explicación final

La solución funciona porque primero verifica que existan películas registradas. Después recorre el arreglo y utiliza el operador módulo (%) para comprobar si la duración de cada película es divisible entre 10. Finalmente cuenta cuántas cumplen la condición y muestra el resultado.

# Sugerencia

Utiliza el operador módulo (`%`) cuando necesites verificar si un número es divisible por otro, ya que permite conocer fácilmente si existe un residuo.