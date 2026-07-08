# lógica Matemática 030 - redondeo y precisión

## Entrada:
Un arreglo con destinos turísticos y la cantidad de días de cada viaje.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre la lista de viajes para mostrar la información de cada destino. Durante el recorrido se utiliza una condición para contar los viajes que duran 5 días o más.

## Salida:
- Lista de destinos y su duración.
- Cantidad de viajes con una duración de 5 días o más.

# Reglas identificadas

- El arreglo debe contener al menos un viaje.
- Se muestra el destino y la duración de cada viaje.
- Se cuentan únicamente los viajes que duran 5 días o más.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco destinos turísticos y diferentes duraciones.

### Resultado esperado:
Se muestra la información de cada viaje y la cantidad de viajes con una duración de 5 días o más.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay viajes registrados."**

# Explicación final

La solución funciona porque primero verifica que existan viajes registrados. Después recorre el arreglo para mostrar la información de cada destino y utiliza una condición para contar los viajes que cumplen la duración establecida. Finalmente presenta el total obtenido.

# Sugerencia

Antes de procesar un arreglo, valida que contenga información. Después recórrelo paso a paso para aplicar las reglas del problema de forma ordenada.