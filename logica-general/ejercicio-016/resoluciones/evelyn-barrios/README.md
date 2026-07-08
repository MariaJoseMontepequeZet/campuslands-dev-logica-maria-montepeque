# Solución Ejercicio 16: Simulación de Eventos

## 1. Análisis del Problema

Este ejercicio se enfoca en la **simulación**. El objetivo es crear una función que modele un evento del mundo real, en este caso, una partida entre dos equipos. La simulación debe tomar en cuenta el rendimiento de los jugadores para determinar un resultado probable.

El desafío es combinar varios conceptos aprendidos (filtrado, cálculo, agregación) para construir una lógica que determine un ganador.

## 2. Estructura y Lógica Aplicada

La solución se basa en una función `simularPartida` que sigue estos pasos:

1.  **Paso 1: Selección de equipos**. La función primero filtra la lista general de jugadores para obtener las alineaciones de los dos equipos que se van a enfrentar.

2.  **Paso 2: Cálculo del "poder" del equipo**. Se calcula el puntaje de cada jugador individualmente y luego se suman todos los puntajes de los miembros de un equipo para obtener un "poder" o "puntaje de equipo" total.

3.  **Paso 3: Introducir un factor de "suerte"**. Para que la simulación no sea completamente predecible (el equipo con el mejor puntaje no siempre gana), se añade un pequeño valor aleatorio al puntaje de cada equipo. Esto simula los imprevistos que pueden ocurrir en una partida real.

4.  **Paso 4: Determinar el ganador**. Finalmente, se comparan los puntajes finales (poder del equipo + suerte) y se declara un ganador. La función devuelve un reporte detallado de la partida.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver el resultado de la partida simulada, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida es un objeto que resume la partida, indicando qué equipos se enfrentaron, sus puntajes finales y, lo más importante, quién fue el ganador de la simulación.