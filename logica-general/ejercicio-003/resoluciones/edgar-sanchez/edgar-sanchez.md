# Resolución: Lógica General 003 - Toma de Decisiones

Este archivo explica el proceso de análisis, la estrategia lógica y las reglas de negocio implementadas para el sistema de inscripción automatizado del torneo de Esports.

---

## 1. Cómo se pensó el problema (Análisis)

El objetivo de este reto consiste en diseñar un flujo de decisiones secuencial. El sistema debe actuar como un filtro que no solo aprueba o rechaza, sino que también puede dejar inscripciones en espera (estados pendientes) o tomar decisiones operativas alternas (como asignar diferentes servidores).

### Tabla de Estructura de Decisiones

| Entrada | Proceso (Reglas de Decisión) | Salida |
| :--- | :--- | :--- |
| **edad_jugador** (Entero)<br>**tiene_autorizacion** (Booleano)<br>**ping_ms** (Entero) | Evaluar restricciones legales de edad, verificar permisos parentales y filtrar según rendimiento técnico de conectividad. | **decision** (Texto)<br>**servidor** (Texto)<br>**motivo** (Texto) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

Se utilizó un enfoque jerárquico donde las restricciones de mayor peso detienen el programa inmediatamente:

* **Filtro de Edad Legal:** La primera condicional detiene de golpe a cualquier usuario menor de 13 años por cumplimiento legal internacional.
* **Flujos Condicionales Anidados / Compuestos:** Para la franja de 13 a 17 años, se evalúa el estado del permiso. Si no existe, el sistema no rechaza de forma definitiva al jugador, sino que cambia inteligentemente su estado a `Pendiente` para darle oportunidad de corregirlo.
* **Optimización de Infraestructura:** La última regla toma una decisión técnica dinámica: analiza la latencia (`ping_ms`) para redirigir automáticamente a los jugadores con ping bajo al servidor de `LATAM` y a los de ping medio al `Internacional`, protegiendo la estabilidad del torneo competitivo.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Aprobado):** Un jugador de 19 años con excelente latencia (45ms) se procesa como **Aprobado** y se le asigna el servidor **LATAM**.
2. **Caso de Negocio (Espera):** Un jugador de 15 años sin firma de tutores pasa el filtro de edad pero queda retenido en estado **Pendiente**.
3. **Caso Borde (Rechazo por Conexión):** Un usuario de 13 años con permiso listo es **Rechazado** debido a que su latencia de 180ms degrada la experiencia competitiva global.

---

## 4. Cómo revisar la solución

1. Abre el archivo principal de la solución (`.py`).