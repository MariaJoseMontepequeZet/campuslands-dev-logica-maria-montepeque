# Solución Ejercicio 07: Fusión de Datos

## 1. Análisis del Problema

En este ejercicio, el desafío es trabajar con información que proviene de dos fuentes distintas. Por un lado, tenemos una lista con el rendimiento de los jugadores en el torneo y, por otro, una lista con sus datos personales (como su país y edad).

El objetivo es combinar estas dos listas para crear un "reporte completo" que contenga toda la información de cada jugador en un solo lugar.

## 2. Estructura y Lógica Aplicada

La solución se basa en un proceso de búsqueda y combinación:

1.  **Paso 1: Recorrer la lista principal**. El código toma la primera lista (la de rendimiento) como base y la recorre jugador por jugador.

2.  **Paso 2: Buscar la información correspondiente**. Por cada jugador de la primera lista, el código busca en la segunda lista (la de perfiles) si existe un jugador con el mismo nombre.

3.  **Paso 3: Combinar la información**. Si encuentra al jugador en la segunda lista, combina su información personal (país y edad) con su información de rendimiento. Si no lo encuentra, simplemente añade valores por defecto como "Desconocido".

Este proceso se repite para todos los jugadores, generando al final una nueva lista con los perfiles completos y enriquecidos.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver la lista final con los datos fusionados, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida es una tabla que muestra a cada jugador con toda su información combinada: su equipo, sus estadísticas de juego, su país y su edad.