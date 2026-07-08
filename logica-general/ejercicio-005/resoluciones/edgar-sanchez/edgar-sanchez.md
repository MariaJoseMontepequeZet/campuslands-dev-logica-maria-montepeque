# Resolución: Lógica General 005 - Ordenamiento de Prioridades

Este archivo detalla la estrategia de negocio y la estructura lógica empleada para organizar el flujo de trabajo dentro del taller mecánico basado en la urgencia técnica.

---

## 1. Cómo se pensó el problema (Análisis)

En el día a día de un taller mecánico, el orden de llegada no siempre determina la atención; la gravedad del daño en el vehículo pone en riesgo la seguridad de los clientes. El reto consistió en transformar términos de gravedad cualitativos ("critica", "moderada", "leve") en un sistema cuantitativo (números) que una computadora pudiera ordenar de forma descendente.

### Tabla de Estructura de Prioridades

| Entrada | Proceso (Reglas de Ordenamiento) | Salida |
| :--- | :--- | :--- |
| **vehiculos** (Lista de Diccionarios con datos de fallas). | Traducir niveles de falla a pesos numéricos (3, 2, 1) y ordenar la fila de mayor a menor. | **lista_ordenada** (Misma lista organizada por nivel de emergencia). |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución técnica se diseñó pensando en la claridad, la velocidad de ejecución y la tolerancia a fallos:

* **Mapeo Numérico (Diccionario de Pesos):** El uso de un diccionario para asignar valores (`critica: 3`, etc.) evita anidar múltiples estructuras `if-else`. Esto hace que el código sea limpio y sumamente fácil de leer.
* **Uso Eficiente de Claves de Ordenamiento (`key`):** En lugar de programar algoritmos complejos de ordenación desde cero (como burbuja), se utilizó el método optimizado `sorted()` de Python pasándole la función de peso. Esto procesa las listas a gran velocidad utilizando recursos mínimos.
* **Control de Fallas No Registradas (Seguridad):** Si un operador registra una falla con un texto no válido o desconocido, el sistema le asigna automáticamente un peso de `0`. Esto asegura que el vehículo no rompa el programa y simplemente sea relegado al final de la cola de atención.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Priorización Correcta):** Al procesar un inventario desordenado, el sistema posicionó inmediatamente en primer lugar al coche con falla "crítica" (frenos), seguido del vehículo de falla "moderada" y por último los de falla "leve" o "desconocida".
2. **Caso Borde (Estructura Vacía):** Si el taller no tiene automóviles registrados en el día, el script activa una barrera de seguridad regresando un arreglo vacío `[]` de inmediato, previniendo errores de ejecución por colecciones inexistentes.
