# Solución Ejercicio 04: Análisis y Filtrado de Datos

## 1. Análisis del Problema

Este ejercicio introduce un nuevo desafío: en lugar de trabajar con toda la lista de datos, necesitamos enfocarnos en un subconjunto específico. El objetivo es tomar una lista de jugadores que pertenecen a diferentes equipos, y generar un reporte de rendimiento para un solo equipo.

Para lograrlo, la solución debe ser capaz de "filtrar" la lista para aislar solo a los miembros del equipo deseado y luego analizar sus datos.

## 2. Estructura y Lógica Aplicada

El proceso se divide en los siguientes pasos:

1.  **Paso 1: Filtrar a los miembros del equipo**. El primer paso es revisar la lista completa de jugadores y crear una nueva lista más pequeña que contenga únicamente a los jugadores que pertenecen al equipo que queremos analizar (por ejemplo, "Equipo Alpha").

2.  **Paso 2: Calcular puntajes y sumar el total**. Una vez que tenemos la lista filtrada, se calcula el puntaje individual de cada miembro (usando la misma fórmula de ejercicios anteriores). Al mismo tiempo, se van sumando estos puntajes para obtener el rendimiento total del equipo.

3.  **Paso 3: Encontrar al Jugador Más Valioso (MVP)**. Con los puntajes individuales calculados, la lista de miembros del equipo se ordena de mayor a menor. El jugador que queda en la primera posición es considerado el MVP del equipo.

Finalmente, se genera un reporte que resume toda esta información: el nombre del equipo, su puntaje total, el número de integrantes y el nombre de su MVP.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver el reporte del equipo, se puede ejecutar el siguiente comando en la terminal:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

El resultado es un objeto que contiene el resumen del rendimiento del equipo analizado, mostrando su puntaje total, la cantidad de miembros y quién fue el jugador más destacado.