# Solución Ejercicio 03: Creando una Tabla de Clasificación

## 1. Análisis del Problema

El reto de este ejercicio es trabajar con una lista de varios jugadores a la vez. El objetivo es tomar esa lista, calcular el puntaje de cada jugador según su rendimiento y, finalmente, crear una tabla de posiciones (leaderboard) que los muestre ordenados del mejor al peor.

La solución sigue una secuencia de tres pasos lógicos: primero calcular, luego ordenar y finalmente asignar una posición.

## 2. Estructura y Lógica Aplicada

El proceso se divide en tres pasos claros y ordenados que se aplican a la lista de jugadores:

1.  **Paso 1: Calcular el puntaje de cada jugador**. El código revisa la lista original y, para cada jugador, utiliza una fórmula para calcular un puntaje basado en sus muertes, asistencias y daño. Con esto, se crea una nueva lista temporal que incluye a cada jugador junto a su puntaje.

2.  **Paso 2: Ordenar a los jugadores por puntaje**. Una vez que todos tienen su puntaje, la nueva lista se organiza de mayor a menor, poniendo a los jugadores con el mejor rendimiento en las primeras posiciones.

3.  **Paso 3: Asignar la posición final (rango)**. Con la lista ya ordenada, se recorre por última vez para asignarle a cada jugador su puesto definitivo en la clasificación: 1°, 2°, 3°, etc.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene todo el código. Para ver el resultado, se puede ejecutar el siguiente comando en la terminal, el cual mostrará la tabla de clasificación final.

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

El resultado es una tabla bien organizada que muestra a cada jugador con su nombre, sus estadísticas, el puntaje que se calculó para él y, lo más importante, su posición final en el torneo.