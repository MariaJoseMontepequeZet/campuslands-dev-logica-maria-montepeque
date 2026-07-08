# Solución Ejercicio 02: Clasificación por Cálculo de Puntaje

## 1. Análisis del Problema

Este ejercicio introduce un nuevo nivel de complejidad respecto al anterior. El objetivo ya no es solo clasificar datos crudos, sino realizar un proceso de dos pasos:

1.  **Calcular un valor:** Combinar múltiples estadísticas (muertes, asistencias, daño, etc.) en un único "Puntaje de Rendimiento" que represente el desempeño global del jugador.
2.  **Clasificar ese valor:** Asignar un rango (Oro, Platino, Diamante) basándose en el puntaje calculado.

Este enfoque es más realista para sistemas de ranking, ya que permite ponderar la importancia de cada estadística.

## 2. Estructura y Reglas Aplicadas

Para mantener el código limpio y escalable, la solución se estructura de manera similar al ejercicio 01, separando los datos de la lógica.

1.  **Fase de Cálculo**: Se define una fórmula para obtener el `puntaje`. Cada estadística tiene un peso diferente para reflejar su importancia en el rendimiento total.

    ```javascript
    const puntaje =
      estadisticas.muertes * 3 +
      estadisticas.asistencias * 2 +
      estadisticas.daño / 1000 +
      estadisticas.partidasGanadas * 10;
    ```

2.  **Fase de Clasificación**: Los rangos y sus puntajes mínimos se definen en un array de objetos (`RANGOS`), ordenado de mayor a menor. La función utiliza `find()` para encontrar el primer rango que el jugador alcanza según su puntaje. Si no alcanza ninguno, se le asigna un rango por defecto.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la lógica y las pruebas. Se puede ejecutar con Node.js:

```bash
node evelyn-barrios.js
```

## 4. Casos de Prueba

- **Prueba 1 (Rendimiento Alto)**: Verifica que un jugador con estadísticas excelentes obtiene un rango alto como "Gran Maestro".
- **Prueba 2 (Rendimiento Promedio)**: Asegura que un jugador con estadísticas moderadas se clasifica en un rango intermedio.
- **Prueba 3 (Rendimiento Bajo)**: Confirma que el caso por defecto funciona, asignando el rango más bajo a un jugador con estadísticas bajas.