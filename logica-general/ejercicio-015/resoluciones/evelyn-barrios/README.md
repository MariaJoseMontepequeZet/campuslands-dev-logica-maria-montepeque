# Solución Ejercicio 15: Análisis de Tendencias

## 1. Análisis del Problema

Este ejercicio introduce el concepto de **análisis de datos a lo largo del tiempo**. En lugar de mirar una sola "foto" del rendimiento de un jugador, el objetivo es analizar un historial de sus partidas para identificar si su desempeño está mejorando, empeorando o se mantiene estable.

El desafío es encontrar a los jugadores que están en una "racha", es decir, aquellos cuya actuación ha mejorado con el tiempo.

## 2. Estructura y Lógica Aplicada

La solución sigue un proceso de dos pasos principales para analizar el historial de partidas:

1.  **Paso 1: Agrupar las partidas por jugador**. El código primero organiza el historial, que es una larga lista de partidas, y lo agrupa para que cada jugador tenga su propio listado de partidas jugadas.

2.  **Paso 2: Analizar la tendencia de cada jugador**. Una vez que cada jugador tiene su historial, el código calcula el puntaje de cada una de sus partidas. Para determinar si un jugador está en racha, se utiliza una lógica simple pero efectiva: se compara el puntaje de su última partida con el de la primera. Si el último puntaje es mayor, se considera que el jugador tiene una tendencia positiva.

Finalmente, la función devuelve una lista con los nombres de todos los jugadores que fueron identificados como "en racha".

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver la lista de jugadores en racha, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida será una lista de los nombres de los jugadores cuyo rendimiento ha mejorado entre su primera y última partida registrada en el historial.