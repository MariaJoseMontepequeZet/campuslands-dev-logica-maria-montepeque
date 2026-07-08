# Solución Ejercicio 12: Búsqueda Dinámica de Datos

## 1. Análisis del Problema

Este ejercicio se enfoca en una de las tareas más comunes al trabajar con datos: la **búsqueda**. El objetivo es crear una función de consulta que sea flexible y reutilizable, permitiendo encontrar jugadores que cumplan con uno o varios criterios específicos al mismo tiempo.

Por ejemplo, la función debe ser capaz de responder preguntas como "¿Qué jugadores son de Colombia?" o "¿Qué jugadores del equipo Alpha tienen más de 10 muertes?".

## 2. Estructura y Lógica Aplicada

La solución se centra en una única función `buscarJugadores` que recibe la lista de jugadores y un objeto de `criterios`.

1.  **Paso 1: Filtrar la lista**. La función recorre la lista principal de jugadores, y para cada uno, decide si debe incluirlo en los resultados o no.

2.  **Paso 2: Comprobar todos los criterios**. Para tomar esa decisión, la función revisa todos los criterios de búsqueda que se le pasaron. Utiliza un método llamado `.every()`, que funciona como un inspector muy estricto: solo si el jugador cumple con **todos y cada uno** de los criterios, se considera una coincidencia.

3.  **Paso 3: Manejar búsquedas complejas**. La función también es capaz de manejar búsquedas dentro de objetos anidados, como las `stats`. Esto permite hacer consultas más avanzadas, como buscar jugadores que tengan un mínimo de asistencias.

El resultado es una función muy potente que puede adaptarse a casi cualquier tipo de búsqueda sin necesidad de cambiar su código interno.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación y varios ejemplos de búsqueda. Para ver los resultados, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida mostrará los resultados de tres búsquedas diferentes, demostrando la flexibilidad de la función: primero listará a todos los jugadores de un país, luego a los que cumplen dos criterios a la vez, y finalmente a los que superan un umbral en sus estadísticas.