# README

## Análisis

**Entrada:**

* Un arreglo con los jugadores de pingpong y sus puntajes obtenidos en varios partidos.

**Proceso:**

* Recorrer la lista de jugadores.
* Sumar los puntajes de cada jugador.
* Calcular el promedio de sus puntajes.
* Comparar los promedios para encontrar al jugador con el mejor resultado.

**Salida:**

* Nombre del jugador con mayor probabilidad de ir al torneo.
* Promedio de sus puntajes.

## Reglas identificadas

* Si no hay jugadores, mostrar un mensaje.
* Calcular el promedio de los puntajes de cada jugador.
* Comparar los promedios.
* El jugador con el promedio más alto tiene mayor probabilidad de ir al torneo.

## Pruebas

### Caso normal

**Entrada:**

* Juan: 12, 45, 60
* Ester: 56, 45, 34
* Esteban: 45, 67, 98

**Resultado esperado:**

* Jugador con mayor probabilidad: Esteban.
* Promedio: 70.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay jugadores para saber quién va al torneo final."

## Explicación final

La solución funciona porque recorre todos los jugadores, suma sus puntajes, calcula el promedio de cada uno y compara los resultados. Al finalizar, muestra el jugador con el promedio más alto, ya que es quien tiene la mayor probabilidad de clasificar al torneo.
