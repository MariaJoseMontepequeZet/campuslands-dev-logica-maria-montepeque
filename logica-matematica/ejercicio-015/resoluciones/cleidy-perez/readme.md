# Lógica matemática 015 - velocidad tiempo distancia

## Análisis

**Entrada:**

* Un arreglo con dibujos digitales, la distancia recorrida (en píxeles) y el tiempo empleado (en minutos).

**Proceso:**

* Recorrer la lista de dibujos.
* Calcular la velocidad de cada dibujo dividiendo la distancia entre el tiempo.
* Calcular la velocidad promedio.
* Verificar si la velocidad es alta o baja.

**Salida:**

* Mostrar la velocidad de cada dibujo.
* Mostrar la velocidad promedio.

## Reglas identificadas

* Si no hay dibujos, mostrar un mensaje.
* La velocidad se calcula con la fórmula **distancia / tiempo**.
* Si la velocidad es **30 px/min o más**, se considera alta.
* Si es menor de 30 px/min, se considera baja.

## Pruebas

### Caso normal

**Entrada:**

* Paisaje: 120 px, 4 min.
* Retrato: 90 px, 3 min.
* Anime: 150 px, 5 min.

**Resultado esperado:**

* Paisaje: Velocidad alta (30 px/min).
* Retrato: Velocidad alta (30 px/min).
* Anime: Velocidad alta (30 px/min).
* Velocidad promedio: 30 px/min.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay dibujos registrados."

## Explicación final

La solución funciona porque recorre todos los dibujos, calcula la velocidad de cada uno utilizando la distancia y el tiempo, clasifica la velocidad según las reglas establecidas y obtiene la velocidad promedio de todos los dibujos.
