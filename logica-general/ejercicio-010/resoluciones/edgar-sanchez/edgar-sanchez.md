# Resolución: Lógica General 010 - Lectura de Instrucciones

Este archivo explica el proceso analítico y los criterios lógicos seguidos para diseñar el motor de traducción e interpretación de instrucciones para itinerarios turísticos.

---

## 1. Cómo se pensó el problema (Análisis)

El foco de este último reto consiste en procesar y "traducir" cadenas estructuradas o códigos de negocio opacos (`"ADV-01"`) en instrucciones claras, humanas y legibles. Además, el sistema debe ser dinámico: si factores externos modifican las reglas del entorno (por ejemplo, el clima en el destino de viaje), la instrucción debe mutar o adaptarse para proteger la experiencia del usuario.

### Tabla de Estructura de Interpretación

| Entrada | Proceso (Reglas de Traducción) | Salida |
| :--- | :--- | :--- |
| **codigo_itinerario** (Texto)<br>**clima_destino** (Texto) | Saneamiento de texto, mapeo e interpretación de códigos de viaje y aplicación de capas de seguridad climática. | **itinerario_desglosado** (Texto)<br>**estado_viaje** (Texto) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La arquitectura lógica de la solución adoptó un enfoque centrado en la flexibilidad y la seguridad de datos:

* **Saneamiento Inmune (`.strip()`, `.upper()`, `.lower()`):** Se previene el fallo por errores tipográficos humanos. El programa unifica las entradas de texto antes de procesar comparaciones lógicas, lo que permite que `"adv-01"` sea leído con la misma precisión que `"ADV-01 "`.
* **Modificación en Capas Secuenciales:** El algoritmo primero establece una base (itinerario estándar) y, en un paso posterior e independiente, evalúa si las condiciones climáticas obligan a cambiar el plan. Esto simplifica el mantenimiento del código, separando el plan base de las excepciones de seguridad.
* **Control de Errores Desconocidos:** Si se ingresa una instrucción corrupta o inexistente, el programa no se rompe ni asume datos por defecto; rescata el control lúdico informando que el código es desconocido y cancelando el flujo.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Ejecución Limpia):** Al enviar el código `"ADV-01"` bajo un clima `"Soleado"`, el sistema lo desglosa perfectamente como senderismo y rafting en estado **Confirmado**.
2. **Caso de Adaptación (Clima Adverso):** Al enviar el mismo código `"ADV-01"` pero bajo `"Lluvia"`, la condicional climática reescribe el itinerario base bloqueando el rafting y asignando un museo seguro en estado **Modificado**.
3. **Caso Borde (Fallo de Código):** Al usar una clave huérfana como `"XYZ-99"`, el bloque defensivo final frena el procesamiento marcando el viaje como **Cancelado**.