# README

## Análisis

**Entrada:**

* Un arreglo con los paracaidistas y la distancia recorrida en su salto.

**Proceso:**

* Recorrer la lista de saltos.
* Sumar las distancias.
* Calcular el promedio.
* Verificar si cada distancia es suficiente.

**Salida:**

* Mostrar si cada paracaidista cumplió la distancia.
* Mostrar la distancia total y el promedio.

## Reglas identificadas

* Si no hay saltos, mostrar un mensaje.
* Una distancia de **1000 metros o más** se considera suficiente.
* Calcular la distancia total.
* Calcular el promedio de las distancias.

## Pruebas

### Caso normal

**Entrada:**

* Juan: 1200 m
* María: 950 m
* Carlos: 1500 m

**Resultado esperado:**

* Juan: Distancia suficiente.
* María: Distancia insuficiente.
* Carlos: Distancia suficiente.
* Distancia total: 3650 m.
* Promedio: 1216.67 m.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay saltos registrados."

## Explicación final

La solución funciona porque recorre todos los saltos, suma las distancias, calcula el promedio y verifica si cada paracaidista alcanzó la distancia mínima establecida. Al finalizar, muestra el total y el promedio de las distancias.
