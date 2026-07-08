# Resolución: Lógica General 001 - Clasificación por Reglas

Este archivo explica el proceso de análisis, diseño y las decisiones tomadas para resolver el reto de clasificación por reglas en el contexto de videojuegos competitivos.

---

## 1. Cómo se pensó el problema (Análisis)

Antes de escribir cualquier línea de código, se desglosó el problema en tres componentes esenciales: las entradas disponibles, las decisiones automáticas que debían tomarse (procesos) y el resultado esperado.

### Tabla de Estructura Inicial

| Entrada | Proceso (Reglas de Negocio) | Salida |
| :--- | :--- | :--- |
| **puntos**: Rendimiento numérico.<br>**reportes**: Conducta del jugador. | Evaluar comportamiento y luego asignar rangos competitivos por umbrales. | **estado**: Categoría final.<br>**motivo**: Justificación. |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución se diseñó siguiendo tres principios clave para garantizar un desarrollo limpio, escalable y libre de errores:

* **Prioridad de Reglas (Jerarquía):** Se colocó el estado de **Bloqueado** en la cima de la lógica. No importa si un jugador tiene el puntaje más alto del servidor; si su comportamiento infringe las normas de comunidad (más de 5 reportes), el sistema frena la evaluación y lo bloquea inmediatamente.
* **Control de Casos Borde (Validación):** El sistema valida que las entradas no contengan números negativos antes de calcular nada. Esto evita fallos lógicos en la base de datos si se ingresan datos erróneos por accidente.
* **Mutua Exclusión (`if-elif-else`):** Al usar estructuras condicionales encadenadas, el programa se detiene en cuanto encuentra la primera regla que se cumple. Esto optimiza el rendimiento y evita que un jugador reciba dos clasificaciones simultáneas.

---

## 3. Casos de Prueba Evaluados

Para asegurar que las reglas funcionen en escenarios reales, se implementaron las siguientes pruebas:

1. **Caso Normal (Rango Medio):** Un jugador con 1500 puntos y 2 reportes es asignado correctamente a **Rango Medio (Oro)**.
2. **Caso de Prioridad (Bloqueo):** Un jugador con 2500 puntos (nivel Inmortal) pero con 8 reportes es **Bloqueado** automáticamente por comportamiento.
3. **Caso Borde (Invalidez):** Un jugador con puntos negativos (`-50`) es marcado como **Inválido** en lugar de asignársele el rango más bajo por error.

---

## 4. Cómo revisar la solución

1. Abre el archivo principal de la solución (`.py` ).
2. Ejecuta el código en tu entorno local:
   * Si es Python: `python nombre-apellido.py`