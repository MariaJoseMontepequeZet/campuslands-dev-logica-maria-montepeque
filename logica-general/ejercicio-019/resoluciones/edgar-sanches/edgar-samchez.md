# Resolución: Lógica General 019 - Inventarios Lógicos

Este archivo explica el flujo de validación desarrollado para auditar existencias de reactivos químicos antes de un proceso de síntesis.

---

## 1. Cómo se pensó el problema
El sistema actúa como un filtro preventivo de laboratorio. Antes de iniciar una mezcla, analiza si las cantidades elementales exigidas por una fórmula específica se encuentran cubiertas por el almacén actual, determinando con precisión las unidades faltantes.

### Tabla de Estructura
* **Entradas:** `inventario_reactivos` (Diccionario), `formula_requerida` (Diccionario).
* **Proceso:** Cruce indexado de átomos mediante iteración de mapeos y cálculo matemático de deltas.
* **Salidas:** `factible` (Booleano), `faltantes` (Diccionario), `estado` (Texto).

---

## 2. Estrategia y Reglas Aplicadas
* **Acceso en Tiempo Constante:** Se aprovecha la estructura clave-valor de los diccionarios de Python para verificar la existencia del elemento sin necesidad de realizar anidaciones de ciclos complejos.
* **Control de Nulos Seguro:** El uso de `.get(elemento, 0)` evita excepciones de interrupción cuando la fórmula solicita reactivos que nunca han estado en el catálogo del inventario.

---

## 3. Casos Probados
1. **Caso Normal (Agua):** La demanda de hidrógeno y oxígeno se cubre holgadamente, aprobando la preparación del compuesto.
2. **Caso Borde (Compuesto Complejo):** La solicitud sobrepasa las existencias de Carbono, detecta que el Sodio está en cero y reporta el Cloro como un reactivo completamente faltante.
