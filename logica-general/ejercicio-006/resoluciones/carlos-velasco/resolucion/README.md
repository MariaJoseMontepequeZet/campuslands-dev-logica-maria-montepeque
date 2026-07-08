# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de objetos (`autos`) con propiedades `nombre` y `velocidadMaxima`, junto con el nombre del modelo a buscar y la velocidad mínima requerida.
* **Proceso**: Búsqueda del modelo mediante el método `find` normalizando los textos, validación de su existencia y comparación de la `velocidadMaxima` contra el límite requerido.
* **Salida**: Un objeto que contiene una acción (resultado del proceso) y un motivo (explicación de la decisión).

## Reglas identificadas

1. Si el modelo no existe en la base de datos, la acción resultante debe ser "No encontrado".
2. Si el modelo existe, se debe evaluar si su `velocidadMaxima` es mayor o igual a la `velocidadMinima` solicitada.
3. La comparación de nombres debe ignorar mayúsculas y minúsculas para asegurar la precisión de la búsqueda.

## Pruebas

### Caso normal

* **Entrada**: `catalogo, "Bugatti Chiron", 450`
* **Resultado esperado**: `{ accion: "Apto para el catálogo", motivo: "Supera los 450 km/h." }`

### Caso borde

* **Entrada**: `catalogo, "Toyota Corolla", 400`
* **Resultado esperado**: `{ accion: "No encontrado", motivo: "El modelo no existe en la base de datos." }`

## Explicacion final

La solución funciona gracias a la combinación de la **normalización de datos** (utilizando `toLowerCase()`) y el uso de **cláusulas de guardia** (validación temprana). Al verificar la existencia del auto antes de proceder con cualquier cálculo, el código es más eficiente y previene errores en tiempo de ejecución, además de proporcionar una retroalimentación clara al usuario sobre el estado de su solicitud.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Validación)**: `!autoEncontrado`
* **Regla 2 (Éxito)**: `velocidadMaxima >= velocidadMinima`
* **Regla 3 (Fallo)**: `velocidadMaxima < velocidadMinima`