# Resolución: Lógica General 018 - Sistemas de Turnos

Este archivo explica las reglas aplicadas para el control de flujo de tareas en la estación de soldadura.

---

## 1. Cómo se pensó el problema
El sistema administra turnos optimizando el uso de la maquinaria según la especialidad del trabajo. Se prioriza el tipo de soldadura TIG debido a que requiere mayor preparación del entorno, seguido de MIG y finalmente Arco, a menos que se active una bandera de emergencia.

### Tabla de Estructura
* **Entradas:** `lista_trabajos` (Arreglo), `es_emergencia` (Booleano).
* **Proceso:** Ordenamiento adaptativo por peso jerárquico o extracción directa por cortocircuito de emergencia.
* **Salidas:** `turno_asignado` (Diccionario), `cola_restante` (Arreglo).

---

## 2. Estrategia y Reglas Aplicadas
* **Estructura de Pesos:** Se utiliza un mapa de prioridad numérica estricta para evitar ambigüedades en el método `.sort()`.
* **Inyección de Emergencia:** Actúa como un disparador prioritario que ignora el orden técnico para resolver la contingencia del taller en tiempo constante.

---

## 3. Casos Probados
1. **Caso Normal:** Una cola desordenada extrae automáticamente el trabajo de tipo TIG primero, cumpliendo la regla de negocio técnica.
2. **Caso Borde:** La activación de una emergencia extrae el primer elemento en fila de forma inmediata, deteniendo la ordenación regular.