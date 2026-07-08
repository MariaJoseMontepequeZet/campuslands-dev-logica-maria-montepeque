# Resolución: Lógica General 009 - Simulación de Estados

Este archivo explica los fundamentos lógicos y las reglas de negocio implementadas para simular el comportamiento dinámico de un espectador frente a estímulos en películas de terror.

---

## 1. Cómo se pensó el problema (Análisis)

El desafío consiste en programar una Máquina de Estados Finita (FSM). A diferencia de los filtros comunes, el resultado de una simulación de estados no depende únicamente del estímulo entrante (`evento`), sino de la situación en la que se encontraba el sistema un instante antes (`estado_inicial`). Se definieron tres estados válidos y transiciones controladas para imitar la psicología humana real.

### Tabla de Matriz de Transición de Estados

| Estado Inicial | Evento: "susto" | Evento: "calma" | Evento: "fin" |
| :--- | :--- | :--- | :--- |
| **Tranquilo** | $\rightarrow$ Asustado | $\rightarrow$ Tranquilo | $\rightarrow$ Tranquilo |
| **Asustado** | $\rightarrow$ Aterrorizado | $\rightarrow$ Tranquilo | $\rightarrow$ Tranquilo |
| **Aterrorizado** | $\rightarrow$ Aterrorizado | $\rightarrow$ Asustado | $\rightarrow$ Tranquilo |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La arquitectura lógica de la solución adoptó una técnica determinista controlada:

* **Estructuración por Contexto Actual:** Al segmentar el flujo principal usando el `estado_inicial` como llave de entrada, reducimos la complejidad del algoritmo. La computadora solo procesa los eventos posibles para esa situación específica.
* **Inercia Psicológica (Regla de Gradualidad):** Se programó una regla de negocio estricta: si el espectador está en estado *Aterrorizado*, un evento de *calma* no lo devuelve a la tranquilidad absoluta de inmediato. El sistema lo traslada a *Asustado*, emulando un descenso gradual del pulso cardíaco y el estrés.
* **Robustez ante Cadenas Desordenadas:** El uso combinado de `.strip()`, `.capitalize()` y `.lower()` actúa como una capa de saneamiento que inmuniza al programa de errores tipográficos como espacios extra o mezcla accidental de mayúsculas.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Incremento de Estado):** Un espectador en estado *Asustado* que recibe un nuevo *Susto* escala limpiamente al nivel máximo de *Aterrorizado*, disparando la acción refleja de taparse los ojos.
2. **Caso de Desescalada (Control de Regla):** Un espectador *Aterrorizado* experimenta un momento de *calma*. El sistema frena la relajación total y lo transfiere a un estado intermedio de alerta (*Asustado*).
3. **Caso Borde (Error de Entrada):** Al ingresar un evento extraño o no configurado, el software activa un mecanismo de seguridad que congela el estado previo, evitando fallos en tiempo de ejecución o corrupciones lógicas.