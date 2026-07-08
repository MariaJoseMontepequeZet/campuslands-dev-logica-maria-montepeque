# Solución Ejercicio 13: Paginación de Datos

## 1. Análisis del Problema

Cuando se trabaja con grandes cantidades de datos, mostrarlos todos a la vez no es práctico. La **paginación** es la solución a este problema. Consiste en dividir un gran conjunto de resultados en "páginas" más pequeñas y manejables.

El objetivo de este ejercicio es crear una función que pueda tomar una lista larga de jugadores y devolver solo los que pertenecen a una página específica, por ejemplo, "dame los jugadores de la página 2, mostrando 5 por página".

## 2. Estructura y Lógica Aplicada

La solución se centra en una función `paginarResultados` que realiza los siguientes pasos:

1.  **Paso 1: Ordenar los datos (opcional)**. Antes de paginar, la función puede ordenar toda la lista de jugadores si se le indica un criterio (por ejemplo, ordenar por nombre).

2.  **Paso 2: Calcular dónde cortar**. La función calcula las posiciones de inicio y fin para la página solicitada. Por ejemplo, para la página 2 con 5 items, sabe que debe empezar en la posición 5 y terminar en la 10.

3.  **Paso 3: Extraer la página**. Utilizando un método llamado `.slice()`, la función "corta" la porción de la lista que corresponde a la página actual y la devuelve.

Además de los datos de la página, la función también devuelve información útil (metadatos) como el número total de páginas y el número total de jugadores, lo cual es esencial para construir una interfaz de navegación.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación y ejemplos. Para ver los resultados de la paginación, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida mostrará dos objetos, cada uno representando una página diferente de la lista de jugadores. Cada objeto contendrá los datos de los jugadores de esa página y la información sobre la paginación (página actual, total de páginas, etc.).