# Resolución: Lógica General 014 - Diagnóstico de Errores

Este archivo detalla el mapa analítico y las capas defensivas configuradas para diagnosticar e interceptar errores operativos en un estudio de tatuajes.

---

## 1. Cómo se pensó el problema (Análisis)

El propósito de este reto es el diseño de un sistema de diagnóstico preventivo. En un estudio de tatuajes, las omisiones lógicas conllevan severas multas legales o infecciones biológicas. El algoritmo no debe operar a ciegas; necesita recibir las variables críticas de la sesión, evaluar el cumplimiento de las normativas de salud e identificar con exactitud qué tipo de regla se está rompiendo mediante códigos estructurados de error.

### Tabla de Estructura de Diagnóstico

| Entrada | Proceso (Criterio de Diagnóstico) | Salida |
| :--- | :--- | :--- |
| **edad_cliente** (Entero)<br>**autorizacion_firmada** (Booleano)<br>**autoclave_esterilizado** (Booleano) | 1. Validar jerarquía sanitaria (Esterilización de equipo).<br>2. Evaluar estatus legal de edad y consentimientos mutuos. | **estado_sesion** (Texto)<br>**codigo_error** (Texto indexado)<br>**diagnostico** (Explicación técnica) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La arquitectura lógica de la solución adoptó una estrategia de cortocircuitos sanitarios y orden de prioridad:

* **Priorización de la Salud sobre la Ley:** El flujo condicional evalúa en primer lugar el estado del `autoclave_esterilizado`. Si los instrumentos están contaminados, es un peligro inmediato. El programa se detiene ahí y bloquea la sesión por sanidad (`ERR-SANID`), ignorando si el cliente es mayor de edad o no, ya que la salud es la barrera más crítica.
* **Retorno de Códigos Estandarizados (`codigo_error`):** En lugar de enviar únicamente mensajes de texto planos, la función genera códigos como `ERR-LEGAL` o `ERR-SANID`. Esto permite que el sistema central pueda categorizar los incidentes en una base de datos o emitir métricas automatizadas de control de calidad.
* **Estructura Defensiva Simple:** Al usar sentencias de salida rápida (`return`), el código elimina la necesidad de estructuras con condicionales `else` gigantescas y anidadas, volviéndose un código lineal, limpio y fácil de mantener por otros desarrolladores.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Falta de Consentimiento):** Un cliente de 16 años intenta agendar sin la firma de sus padres. El sistema detecta la infracción y bloquea la sesión bajo el código `ERR-LEGAL`.
2. **Caso de Negocio Exitoso:** Un menor de 17 años que sí presenta su hoja de consentimiento pasa la inspección legal con éxito, permitiendo la sesión.
3. **Caso Borde (Doble Infracción):** Un cliente menor de edad sin autorización coincide con un autoclave apagado. El sistema demuestra su diseño jerárquico atrapando primero la alerta de riesgo biológico (`ERR-SANID`), que es la más grave para el negocio.
