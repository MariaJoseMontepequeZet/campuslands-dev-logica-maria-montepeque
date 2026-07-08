# Lógica Matemáticas 023 - promedios y medianas

## Entrada:
Un arreglo con los equipos del torneo y los puntos obtenidos por cada uno.

## Proceso:
Se valida que el arreglo tenga datos. Luego se suman los puntos de todos los equipos para calcular el promedio. Después se ordenan los puntos de menor a mayor para obtener la mediana según la cantidad de equipos.

## Salida:
- Promedio de puntos del torneo.
- Mediana de los puntos del torneo.

# Reglas identificadas

- El arreglo debe contener al menos un equipo.
- El promedio se obtiene dividiendo la suma de los puntos entre la cantidad de equipos.
- La mediana se calcula con los puntos ordenados.
- Si la cantidad de equipos es impar, la mediana es el valor central.
- Si la cantidad de equipos es par, la mediana es el promedio de los dos valores centrales.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco equipos y sus respectivos puntos.

### Resultado esperado:
Se muestra el promedio y la mediana de los puntos del torneo.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay equipos registrados."**

# Explicación final

La solución funciona porque primero verifica que existan equipos registrados. Después utiliza un acumulador para sumar los puntos y calcular el promedio. Finalmente, ordena los puntos para encontrar la mediana, considerando si la cantidad de equipos es par o impar.

# Sugerencia

Antes de calcular la mediana, ordena siempre los datos de menor a mayor para obtener el valor central correctamente.