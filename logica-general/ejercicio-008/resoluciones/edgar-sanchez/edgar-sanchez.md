# Resolución: Lógica General 008 - Flujos Paso a Paso

Este archivo describe la estrategia de negocio y la estructura paso a paso utilizada para procesar un sistema jerárquico de toma de decisiones en un recomendador de películas de ciencia ficción.

---

## 1. Cómo se pensó el problema (Análisis)

El foco de este ejercicio es el diseño de flujos estructurados secuenciales. Una recomendación no depende de un solo factor; se compone de una serie de etapas lógicas consecutivas. Si una etapa anterior no se valida o toma un camino restrictivo, el flujo debe cambiar de dirección o terminar de inmediato, registrando el rastro de las acciones tomadas.

### Tabla de Estructura del Flujo

| Entrada | Proceso (Flujo Paso a Paso) | Salida |
| :--- | :--- | :--- |
| **edad_usuario** (Entero)<br>**prefiere_viajes_tiempo** (Booleano)<br>**tiempo_disponible_min** (Entero) | **Paso 1:** Evaluar madurez/edad.<br>**Paso 2:** Bifurcar por preferencia temática.<br>**Paso 3:** Evaluar restricción de tiempo físico. | **pelicula_recomendada** (Texto)<br>**pasos_completados** (Lista de fases recorridas). |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución técnica se implementó bajo la premisa de la trazabilidad y la modularidad:

* **Trazabilidad (Historial de Flujo):** Se integró una lista dinámica llamada `pasos`. Cada vez que el programa supera una etapa, añade un registro textual de éxito. Esto permite auditar el comportamiento del sistema y verificar con precisión qué camino tomó el algoritmo.
* **Salida Temprana (Short-Circuit):** Para optimizar la ejecución, si el usuario es menor de 13 años, el flujo se detiene en el **Paso 1** entregando una respuesta segura (`Wall-E`). No tiene sentido gastar procesamiento evaluando el tiempo disponible o la temática si la restricción principal ya definió el destino.
* **Bifurcaciones Limpias:** Al separar el flujo en sub-ramas independientes en el Paso 3 (`3A` y `3B`), se evita la duplicación de código innecesaria y se mantiene la independencia de los criterios de selección.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Recorrido Completo):** Un usuario de 25 años que prefiere tramas de tiempo pero solo cuenta con 120 minutos recorre con éxito los 3 pasos del flujo y recibe la película idónea de duración estándar (`Back to the Future`).
2. **Caso Borde (Interrupción de Flujo):** Un niño de 10 años inicia el proceso. El sistema registra únicamente el **Paso 1** en su historial de flujo, frena las evaluaciones  posteriores y le asigna una película apta para su edad.
