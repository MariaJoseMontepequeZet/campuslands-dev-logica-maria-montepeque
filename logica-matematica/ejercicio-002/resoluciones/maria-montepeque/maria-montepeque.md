# Ejercicio 025: Motor de Métricas Deportivas y Porcentaje de Efectividad

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión de estadísticas en ligas deportivas que calcule los puntos totales y el porcentaje de efectividad de un equipo basándose en su fixture de partidos, aplicando programación defensiva para mitigar inconsistencias de datos o divisiones por cero.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `partidosJugados`: Number (Total de encuentros registrados en el fixture).
    * `partidosGanados`: Number (Total de victorias obtenidas por el equipo).
    * `partidosEmpatados`: Number (Total de empates obtenidos por el equipo).
* **Proceso:** 1. Validar la consistencia lógica de las cantidades e implementar cláusulas de guarda para evitar indeterminaciones matemáticas.
    2. Aplicar la fórmula de puntuación estándar: $\text{Puntos} = (\text{partidosGanados} \times 3) + \text{partidosEmpatados}$.
    3. Calcular la proporción matemática dividiendo los puntos obtenidos sobre el máximo posible ($\text{partidosJugados} \times 3$) y multiplicando por 100 para obtener el porcentaje de efectividad.
    4. Segmentar el rango porcentual mediante condicionales lógicos para determinar la clasificación de rendimiento.
* **Salida:** Un objeto con la estructura estricta: `{ puntos_totales: number, porcentaje_efectividad: number, clasificacion: string, explicacion: string }`.

---

## Reglas de Negocio

1. **Regla de Proporcionalidad:** La efectividad del rendimiento no depende de la cantidad absoluta de puntos, sino de la proporción relativa a cuántos partidos se disputaron del total del fixture.
2. **Restricción de Consistencia:** La suma de victorias y empates jamás puede exceder de manera lógica el número total de partidos jugados. Ante esta incongruencia, el sistema aborta devolviendo la clasificación `"error de registro"`.
3. **Control del Cero (Caso Borde):** Un total de cero partidos jugados cancela el cálculo aritmético por seguridad para prevenir un error de división por cero (`NaN`), devolviendo de forma directa la clasificación `"sin debutar"`.

---

## Casos de Prueba

### 1. Cálculo de Efectividad Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "partidosJugados": 10,
      "partidosGanados": 7,
      "partidosEmpatados": 2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "puntos_totales": 23,
      "porcentaje_efectividad": 76.67,
      "clasificacion": "alto rendimiento",
      "explicacion": "El equipo acumuló 23 puntos de 30 posibles, alcanzando una efectividad del 76.67%."
    }
    ```

### 2. Aborto por Inconsistencia de Datos (Caso Alterno)
* **Entrada:**
    ```json
    {
      "partidosJugados": 5,
      "partidosGanados": 4,
      "partidosEmpatados": 2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "puntos_totales": 0,
      "porcentaje_efectividad": 0,
      "clasificacion": "error de registro",
      "explicacion": "La suma de partidos ganados y empatados excede el total de partidos jugados en el fixture."
    }
    ```

### 3. Activación de Guarda por Cero Partidos (Caso Borde)
* **Entrada:**
    ```json
    {
      "partidosJugados": 0,
      "partidosGanados": 0,
      "partidosEmpatados": 0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "puntos_totales": 0,
      "porcentaje_efectividad": 0,
      "clasificacion": "sin debutar",
      "explicacion": "No se registran partidos disputados en el fixture actual. Procesamiento omitido."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de cláusulas de guarda (*Guard Clauses*) para limpiar el flujo principal de código. Al validar la coherencia numérica y abortar los escenarios de error o colecciones vacías al inicio de la función, se elimina la necesidad de estructurar bloques `if/else` anidados. Las operaciones aritméticas se ejecutan bajo una complejidad constante $O(1)$, garantizando una velocidad de respuesta óptima y un código altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu máquina local (versión LTS recomendada).
2. Abre la terminal de comandos y navega hasta el directorio de este ejercicio.
3. Ejecuta el script de la solución con el comando:
    ```bash
    node maria-montepeque.js
    ```