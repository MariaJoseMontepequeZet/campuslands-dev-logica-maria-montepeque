# Lógica general 028 - flujos paso a paso
## Entrada:
Un arreglo con películas de ciencia ficción y su duración en minutos.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre la lista de películas paso a paso. Durante el recorrido se verifica cuáles duran más de 120 minutos y se cuenta la cantidad utilizando un acumulador.

## Salida:
- Lista de películas mostradas paso a paso.
- Cantidad de películas con duración mayor a 120 minutos.

# Reglas identificadas

- El arreglo debe contener al menos una película.
- Cada película se muestra en el orden en que está registrada.
- Solo se cuentan las películas con una duración mayor a 120 minutos.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco películas de ciencia ficción.

### Resultado esperado:
Se muestran las películas paso a paso y la cantidad de películas con duración mayor a 120 minutos.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay películas registradas."**

# Explicación final

La solución funciona porque primero verifica que existan películas registradas. Después recorre el arreglo utilizando un ciclo, muestra cada película y aplica una condición para contar las que duran más de 120 minutos. Finalmente presenta el total encontrado.

# Sugerencia

Divide el problema en pequeños pasos: validar los datos, recorrer el arreglo, aplicar las condiciones y mostrar los resultados.