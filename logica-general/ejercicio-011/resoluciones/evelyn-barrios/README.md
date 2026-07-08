# Solución Ejercicio 11: Análisis Estadístico Agregado

## 1. Análisis del Problema

Este ejercicio se centra en el **análisis estadístico** de un conjunto de datos. El objetivo es ir más allá de procesar jugadores individualmente y, en su lugar, calcular métricas que resuman el rendimiento de todo el torneo.

La solución debe ser capaz de calcular totales, promedios y encontrar los valores máximos (como el jugador con más muertes) a partir de una lista de participantes.

## 2. Estructura y Lógica Aplicada

La solución utiliza el método `reduce` para procesar la lista de jugadores de manera muy eficiente. Este método permite recorrer la lista una sola vez mientras se calculan varias estadísticas al mismo tiempo.

El proceso es el siguiente:

1.  **Paso 1: Iniciar un acumulador**. Se crea un objeto "acumulador" que contendrá los borradores de las estadísticas que queremos calcular (totales, máximos, etc.).

2.  **Paso 2: Recorrer y acumular**. El código revisa cada jugador de la lista. Para cada uno, actualiza los valores en el acumulador: suma su puntaje y daño a los totales, y comprueba si sus muertes o asistencias son las más altas vistas hasta el momento.

3.  **Paso 3: Calcular los finales**. Una vez que se ha recorrido toda la lista, el acumulador contiene los totales y los máximos. A partir de ahí, se realizan los cálculos finales, como el puntaje promedio, y se da formato al reporte final.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver el reporte estadístico del torneo, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida es un único objeto que contiene un resumen completo del torneo: el número de jugadores, el puntaje promedio, quién fue el jugador con más muertes, quién tuvo más asistencias y el daño total infligido.