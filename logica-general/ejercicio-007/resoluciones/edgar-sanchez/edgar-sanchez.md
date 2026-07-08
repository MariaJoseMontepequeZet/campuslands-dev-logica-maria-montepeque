# Resolución: Lógica General 007 - Detección de Inconsistencias

Este archivo describe la estrategia lógica aplicada para auditar y detectar fallas de datos dentro de un sistema de playlists musicales.

---

## 1. Cómo se pensó el problema (Análisis)

El objetivo de este reto consiste en actuar como un depurador. Una playlist puede compilarse incorrectamente por fallas en la base de datos o ingresos humanos erróneos. El algoritmo debe analizar de manera exhaustiva el conjunto de datos y acumular cada anomalía encontrada en lugar de detenerse en el primer error, entregando un reporte detallado al usuario.

### Tabla de Estructura de Auditoría

| Entrada | Proceso (Reglas de Detección) | Salida |
| :--- | :--- | :--- |
| **playlist** (Lista de Diccionarios con metadatos de canciones). | Recorrer elementos, verificar cadenas vacías, evaluar lógica temporal de duración y rastrear duplicados de ID con estructuras de conjuntos. | **tiene_inconsistencias** (Booleano)<br>**errores_detectados** (Lista de hilos explicativos). |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución técnica adoptó mecanismos de validación paralela y optimización de memoria:

* **Acumulación No Destructiva:** En lugar de hacer un *Early Return* (interrumpir el ciclo al primer error), se diseñó una lista contenedora llamada `errores`. Esto permite inspeccionar la lista completa de canciones en una sola pasada y entregarle al usuario un listado completo de todo lo que debe corregir.
* **Rastreo Eficiente de Duplicados (`set`):** Para verificar que los IDs de las canciones no estuvieran repetidos, se empleó una estructura de conjunto (`set()`). Buscar elementos dentro de un conjunto toma tiempo constante, haciéndolo extremadamente veloz comparado con buscar dentro de una lista tradicional.
* **Saneamiento de Entradas (`.strip()`):** El sistema limpia los espacios en blanco accidentales. Si el nombre del artista es únicamente un espacio `" "`, el algoritmo detecta la inconsistencia y no se deja engañar por la longitud del texto.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Detección Múltiple):** Se procesó una playlist simulada que contenía un artista ausente, una ID duplicada (`101`) y una canción con duración negativa (`-30` segundos). El sistema identificó de manera precisa cada uno de los problemas especificando su número de posición en la fila.
2. **Caso Borde (Estructura Limpia):** Al procesar una lista que cumplía estrictamente con todas las normas, la bandera cambió automáticamente a `False` y reportó que los datos estaban listos para su reproducción.
