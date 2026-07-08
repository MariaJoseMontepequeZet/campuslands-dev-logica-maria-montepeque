# Lógica matemática 027 - secuencia númerica

## Entrada:
Un arreglo con canciones de una playlist que contiene título, artista y duración en segundos.

## Proceso:
Se valida que la playlist tenga canciones registradas. Luego se recorren las duraciones para analizarlas como una secuencia numérica. Se utiliza un acumulador para sumar las duraciones y se comparan los valores para encontrar duraciones repetidas. Finalmente se calcula el promedio de duración de las canciones.

## Salida:
- Duración total de la playlist.
- Promedio de duración de las canciones.
- Lista de duraciones repetidas.

# Reglas identificadas

- La playlist debe contener al menos una canción.
- La duración de cada canción se utiliza como dato numérico para el análisis.
- Las duraciones iguales se consideran valores repetidos dentro de la secuencia.
- El promedio se calcula dividiendo la duración total entre la cantidad de canciones.

# Pruebas

## Caso normal

### Entrada:
Una playlist con varias canciones y diferentes duraciones.

### Resultado esperado:
Se muestra la duración total, el promedio y las duraciones que aparecen repetidas.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay canciones registradas."**

# Explicación final

La solución funciona porque primero valida que existan canciones en la playlist. Después utiliza ciclos para recorrer las duraciones, un acumulador para sumar los valores y condiciones para detectar repeticiones dentro de la secuencia numérica. Finalmente realiza el cálculo del promedio y muestra los resultados.

# Sugerencia

Convierte los datos del problema en valores que puedan analizarse. En este caso, la duración de las canciones permite aplicar cálculos y detectar patrones dentro de la playlist.