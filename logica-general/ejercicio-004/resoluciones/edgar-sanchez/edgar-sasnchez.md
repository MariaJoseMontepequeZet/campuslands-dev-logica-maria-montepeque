# Resolución: Lógica General 004 - Filtros por Condiciones

Este archivo explica el diseño lógico y el comportamiento del algoritmo desarrollado para el filtrado dinámico del inventario de motocicletas.

---

## 1. Cómo se pensó el problema (Análisis)

El desafío consiste en tomar una colección de datos (un inventario) y extraer únicamente aquellos elementos que satisfagan múltiples criterios de negocio simultáneamente. En lugar de modificar el inventario original, se estructuró un mecanismo que evalúa uno a uno los elementos y construye una lista de salida limpia.

### Tabla de Estructura de Filtros

| Entrada | Proceso (Reglas de Filtrado) | Salida |
| :--- | :--- | :--- |
| **motos** (Lista de Diccionarios)<br>**categoria_filtro** (Texto)<br>**precio_maximo** (Entero/Flotante) | Recorrer la colección, estandarizar textos a minúsculas, validar pertenencia de categoría (o comodín global) y comprobar límites de presupuesto. | **motos_filtradas** (Lista reducida con elementos validados) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La implementación se resolvió utilizando técnicas de control de flujos estables y predecibles:

* **Invariabilidad de Datos:** El algoritmo no altera la lista central de inventario (`inventario_central`). Esto previene la pérdida de registros en el sistema original mientras se realizan búsquedas consecutivas.
* **Flexibilidad por Comodín:** Se integró la opción `"Todas"` dentro de la regla de categorías. Esto permite omitir el filtro de estilo si el usuario únicamente está interesado en evaluar su capacidad adquisitiva (presupuesto).
* **Defensa Contra Errores de Escritura:** Se implementó el método `.lower()` en los textos comparados. Así, si un usuario digita `"DEPORTIVA"`, `"deportiva"` o `"Deportiva"`, el sistema unifica la cadena evitando falsos descartes.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Filtrado Específico):** Se buscaron motos de categoría "Deportiva" con un presupuesto tope de `$5000`. El sistema discriminó la *Yamaha R3* (por costosa) y entregó con éxito la *Suzuki Gixxer*.
2. **Caso de Flexibilidad (Comodín):** Se solicitó la categoría "Todas" limitando el valor a `$7000`. El sistema ignoró el tipo de motocicleta y retornó tres modelos de distintas categorías que se ajustaban al precio.
3. **Caso Borde (Sin Coincidencias):** Al buscar con un presupuesto excesivamente bajo (`$1500`), la condicional de precios funcionó como escudo de seguridad devolviendo una lista vacía `[]`, evitando errores de ejecución o desbordamiento de datos.

---

## 4. Cómo revisar la solución

1. Localiza el archivo de código fuente de la solución (`.py` o `.js`).
2. Ejecútalo desde tu entorno de consola local:
   ```bash
   python nombre-apellido.py