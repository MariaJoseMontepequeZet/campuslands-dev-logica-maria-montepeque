# Resolución: Lógica General 002 - Validación de Datos
Este archivo explica el proceso de análisis, diseño y los criterios aplicados para resolver el sistema de validación del ranking de fútbol sala.

## 1. Cómo se pensó el problema (Análisis)
El foco principal de este reto no es clasificar el rendimiento, sino actuar como un "filtro de seguridad" para asegurar que los datos ingresados al ranking sean reales y consistentes deportivamente antes de guardarlos.

### Tabla de Estructura de Datos
| Entrada | Proceso (Reglas de Validación) | Salida |
| :--- | :--- | :--- |
| **nombre_equipo** (Texto)<br>**partidos_jugados** (Entero)<br>**puntos** (Entero) | Comprobar textos vacíos, valores negativos y coherencia matemática de puntos vs partidos. | **valido** (Boolean)<br>**resultado** (Texto)<br>**motivo** (Texto) |

## 2. Por qué se desarrolló de esa manera (Estrategia)
La solución se implementó bajo criterios lógicos estrictos de negocio:

* **Filtros de Presencia:** Lo primero que evalúa el sistema es la existencia del nombre. Si un equipo no tiene nombre (o solo tiene espacios), no tiene sentido validar estadísticas.
* **Control de Negativos:** Bloquea de inmediato valores que rompan la naturaleza de un contador físico (nadie puede jugar `-2` partidos).
* **Validación de Consistencia Lógica:** En el fútbol sala, el máximo beneficio por partido ganado son 3 puntos. Si un equipo ha jugado 2 partidos, jamás podría acumular 9 puntos. Al programar este límite matemático (`partidos * 3`), evitamos que entren datos alterados o erróneos al sistema.

---

## 3. Casos de Prueba Evaluados
1. **Caso Normal (Aprobado):** "Futsal Club" con 5 partidos y 10 puntos pasa perfectamente la validación.
2. **Caso Borde (Inconsistencia Matemática):** Un equipo con 2 partidos y 9 puntos es rechazado porque matemáticamente el límite era 6.
3. **Caso Borde (Espacios Vacíos):** Un nombre compuesto únicamente por espacios `"   "` es detectado y denegado por el método de limpieza de cadenas.

## 4. Cómo revisar la solución
1. Abre el archivo principal de la solución (`.py``).
2. Ejecútalo desde tu consola:
   ```bash
   python nombre-apellido.py