# Solución Ejercicio 14: Búsqueda con Paginación

## 1. Análisis del Problema

Este ejercicio combina dos funcionalidades muy potentes y comunes: la búsqueda y la paginación. El objetivo es crear una función que permita a un usuario buscar jugadores con criterios específicos y, si los resultados son muchos, poder verlos divididos en páginas.

Por ejemplo, un usuario podría querer "ver a todos los jugadores de Colombia" y navegar por los resultados de 10 en 10.

## 2. Estructura y Lógica Aplicada

La solución sigue un flujo lógico de dos pasos principales:

1.  **Paso 1: Filtrar primero**. La función toma la lista completa de jugadores y primero la filtra según los criterios de búsqueda proporcionados. El resultado es una lista más pequeña que contiene solo a los jugadores que coinciden con la búsqueda.

2.  **Paso 2: Paginar después**. Una vez que se tiene la lista filtrada, se aplica la lógica de paginación (vista en el ejercicio anterior) sobre *esa* lista, no sobre la original. Esto asegura que las páginas se creen a partir de los resultados de la búsqueda.

La función devuelve un objeto que contiene los jugadores de la página solicitada y, muy importante, metadatos como el número total de páginas y el total de resultados *de la búsqueda*, no del total de jugadores.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver los resultados de una búsqueda paginada, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida mostrará los resultados de buscar a todos los jugadores de un país específico, divididos en dos páginas diferentes, demostrando cómo la paginación funciona sobre los resultados de la búsqueda.