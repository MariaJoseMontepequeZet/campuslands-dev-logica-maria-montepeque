# Resolución: Lógica General 006 - Búsqueda de Elementos

Este archivo detalla la estructura lógica, el análisis y los criterios aplicados para el desarrollo del módulo de búsqueda en el inventario de autos hiperdeportivos.

---

## 1. Cómo se pensó el problema (Análisis)

El objetivo central de este reto consiste en inspeccionar una colección estructurada de datos para localizar un elemento específico basado en un criterio textual. El programa debe ser capaz de discriminar de forma óptima y retornar una respuesta controlada tanto si encuentra el registro como si no existe.

### Tabla de Estructura de Búsqueda

| Entrada | Proceso (Reglas de Búsqueda) | Salida |
| :--- | :--- | :--- |
| **garaje** (Lista de Diccionarios)<br>**modelo_buscado** (Texto) | Limpiar espacios en blanco, estandarizar texto a minúsculas, recorrer secuencialmente y comparar con llaves de marca o modelo. | **encontrado** (Booleano)<br>**auto** (Diccionario o None)<br>**mensaje** (Texto) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución fue programada utilizando principios de eficiencia y robustez en el software:

* **Retorno Temprano (Early Return):** Al utilizar un ciclo `for`, si la condicional detecta que el modelo buscado coincide con el vehículo actual, la función ejecuta un `return` de inmediato. Esto rompe el bucle, evitando que la computadora siga analizando el resto de la lista innecesariamente (optimización de recursos).
* **Flexibilidad Multicriterio:** El filtro no se limita solo al modelo; permite buscar también por marca (por ejemplo, buscar "Bugatti" dará coincidencia), ampliando las posibilidades del usuario.
* **Control de Formato Extremo:** Se aplicaron de forma combinada los métodos `.strip()` y `.lower()`. Esto elimina espacios accidentales al inicio/final del texto ingresado y unifica las cadenas, asegurando que variaciones como `" CHIRON  "` se procesen correctamente como `"chiron"`.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Éxito):** Se buscó el vehículo `"jEsKo"`. El sistema ignoró las mayúsculas/minúsculas locas, localizó el registro en la lista y devolvió el objeto completo con sus especificaciones de velocidad y precio.
2. **Caso Normal (Fallo Controlado):** Al buscar un modelo inexistente (`"Ferrari LaFerrari"`), la función completó el recorrido limpiamente sin romperse y notificó que el auto no forma parte del garaje.
3. **Caso Borde (Inyección Vacía):** Al enviar una cadena compuesta de puros espacios en blanco (`"   "`), el escudo de validación inicial detuvo el proceso inmediatamente, retornando `False` y evitando comparaciones vacías con la base de datos.

---

## 4. Cómo revisar la solución

1. Abre el archivo principal de la solución (`.py` o `.js`).
2. Corre el script utilizando tu terminal local:
   ```bash
   python nombre-apellido.py