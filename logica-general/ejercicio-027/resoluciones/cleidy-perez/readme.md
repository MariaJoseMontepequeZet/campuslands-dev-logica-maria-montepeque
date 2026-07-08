# Lógica general 027 - detección de inconsistencias

## Entrada:
Un arreglo con canciones de una playlist que contiene título, artista y duración.

## Proceso:
Se valida que la playlist tenga canciones registradas. Luego se recorre el arreglo para revisar cada canción y detectar datos incorrectos, como título vacío, artista sin información o duración menor o igual a cero. Las canciones con errores se almacenan y se cuenta la cantidad de inconsistencias encontradas.

## Salida:
- Cantidad de canciones con errores.
- Lista de canciones que presentan inconsistencias.

# Reglas identificadas

- La playlist debe contener al menos una canción.
- Cada canción debe tener un título.
- Cada canción debe tener un artista.
- La duración debe ser mayor que cero.
- Las canciones con datos incorrectos se consideran inconsistentes.

# Pruebas

## Caso normal

### Entrada:
Una playlist con canciones completas y algunas canciones con datos incorrectos.

### Resultado esperado:
Se muestran las canciones con inconsistencias y la cantidad total de errores encontrados.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay canciones registradas."**

# Explicación final

La solución funciona porque primero verifica que existan canciones en la playlist. Después utiliza un ciclo para revisar cada elemento del arreglo y aplica condiciones para encontrar errores en los datos. Las canciones que incumplen las reglas se almacenan en otro arreglo y se cuenta la cantidad de inconsistencias.

# Sugerencia

Antes de procesar información, valida que los datos cumplan las reglas necesarias para evitar errores durante la ejecución.