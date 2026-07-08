# Logica general 029 - simulacion de estado

## Entrada:
Un arreglo con películas de miedo y su estado de disponibilidad.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre cada película para verificar si está disponible o no. Se utiliza un acumulador para contar cuántas películas están disponibles.

## Salida:
- Estado de cada película.
- Cantidad de películas disponibles.

# Reglas identificadas

- El arreglo debe contener al menos una película.
- Si la propiedad `disponible` es `true`, la película está disponible.
- Si la propiedad `disponible` es `false`, la película no está disponible.
- Se cuenta únicamente la cantidad de películas disponibles.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco películas, algunas disponibles y otras no.

### Resultado esperado:
Se muestra el estado de cada película y el total de películas disponibles.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay películas registradas."**

# Explicación final

La solución funciona porque primero verifica que existan películas registradas. Después utiliza un ciclo para recorrer el arreglo y una condición para identificar el estado de cada película. Finalmente utiliza un acumulador para contar las películas disponibles y mostrar el resultado.

# Sugerencia

Cuando trabajes con estados como disponible, activo o completado, utiliza variables booleanas (`true` y `false`), ya que facilitan las validaciones con estructuras condicionales.