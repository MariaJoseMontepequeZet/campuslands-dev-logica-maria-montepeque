# Solución Ejercicio 05: Análisis Comparativo entre Grupos

## 1. Análisis del Problema

Este ejercicio eleva la complejidad al requerir una comparación entre diferentes grupos de datos. El objetivo es analizar una lista de jugadores de varios equipos, identificar al mejor jugador (MVP) de cada uno de esos equipos y, finalmente, comparar a esos "campeones" para determinar quién es el MVP absoluto de todo el torneo.

La solución requiere una lógica de múltiples niveles: primero un análisis dentro de cada grupo y luego un análisis entre los resultados de los grupos.

## 2. Estructura y Lógica Aplicada

El proceso se puede descomponer en tres pasos principales:

1.  **Paso 1: Identificar los equipos**. Primero, el código revisa la lista completa de jugadores para saber cuántos equipos únicos hay en el torneo (por ejemplo, "Alpha", "Beta", "Gamma").

2.  **Paso 2: Encontrar al MVP de cada equipo**. Por cada equipo identificado, se busca en la lista original a todos sus miembros. Luego, se calcula el puntaje de cada uno y se determina quién es el mejor de ese equipo. El resultado de este paso es una nueva lista más pequeña que contiene solo a los mejores jugadores de cada equipo.

3.  **Paso 3: Encontrar al MVP del torneo**. Con la lista de los MVPs de cada equipo, el proceso final es muy simple: se ordenan según su puntaje para encontrar al jugador con el rendimiento más alto de todos. Ese jugador es declarado el MVP del torneo.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver quién es el MVP del torneo, se puede ejecutar el siguiente comando en la terminal:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

El resultado muestra el nombre del jugador que ha sido coronado como el MVP de todo el torneo, junto con su equipo y el puntaje que le permitió ganar.