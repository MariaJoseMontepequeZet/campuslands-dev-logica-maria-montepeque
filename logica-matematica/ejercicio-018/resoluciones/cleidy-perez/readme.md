# Logica matemática - normalizacion de puntaje

## Análisis

**Entrada:**

* Un arreglo con estudiantes y su puntaje.

**Proceso:**

* Recorrer la lista de estudiantes.
* Normalizar cada puntaje a una escala de 0 a 10.
* Calcular el promedio de los puntajes normalizados.
* Clasificar cada puntaje como alto o medio.

**Salida:**

* Mostrar el puntaje normalizado de cada estudiante.
* Mostrar el promedio de los puntajes normalizados.

## Reglas identificadas

* Si no hay estudiantes, mostrar un mensaje.
* El puntaje normalizado se calcula con la fórmula: **(puntaje / 100) × 10**.
* Si el puntaje normalizado es **8 o más**, se considera alto.
* Si es menor de 8, se considera medio.

## Pruebas

### Caso normal

**Entrada:**

* Juan: 70.
* María: 85.
* Carlos: 95.

**Resultado esperado:**

* Juan: 7.0 - Medio.
* María: 8.5 - Alto.
* Carlos: 9.5 - Alto.
* Promedio normalizado: 8.3.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay puntajes para normalizar."

## Explicación final

La solución funciona porque recorre todos los puntajes, los convierte a una escala de 0 a 10, calcula el promedio y clasifica los resultados según las reglas establecidas. Esto permite comparar los puntajes de forma uniforme.
