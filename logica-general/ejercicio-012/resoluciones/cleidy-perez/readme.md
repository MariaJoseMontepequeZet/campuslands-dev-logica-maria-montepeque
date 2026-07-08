# Logica general 012 - Comparación de opciones

## Análisis

**Entrada:**

* Un arreglo con los jugadores de pingpong y su puntaje.

**Proceso:**

* Recorrer la lista de jugadores.
* Comparar los puntajes.
* Guardar el jugador con el mayor puntaje.

**Salida:**

* Nombre del jugador ganador y su puntaje.

## Reglas identificadas

* Si no hay jugadores, mostrar un mensaje.
* Comparar el puntaje de cada jugador.
* El jugador con el mayor puntaje es el ganador.

## Pruebas

### Caso normal

**Entrada:**

* Juan (34)
* María (55)
* Marvin (60)
* Carla (23)

**Resultado esperado:**

* Ganador: Marvin
* Puntaje: 60

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`)

**Resultado esperado:**

* Mostrar el mensaje: "No hay jugadores para comparar."

## Explicación final

La solución funciona porque recorre todos los jugadores, compara sus puntajes y guarda el que tenga el valor más alto. También valida si la lista está vacía para evitar errores.
