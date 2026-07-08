# Plantilla de solución

## Analisis

* **Entrada**: `inventario` (arreglo de objetos de autos), `criterioPotencia` (número mínimo requerido) y `marcaBusqueda` (cadena).
* **Proceso**: Filtrado del inventario mediante la validación de tres condiciones (coincidencia de marca, potencia mínima y disponibilidad activa), seguido de la estructuración de una respuesta confirmatoria o de error.
* **Salida**: Un objeto que indica el éxito de la búsqueda (`encontrado: true/false`) y contiene los `autos` hallados o un `mensaje` descriptivo en caso contrario.

## Reglas identificadas

1. La búsqueda de marca debe ser insensible a mayúsculas o minúsculas.
2. El auto debe cumplir con una potencia mínima (`>= criterioPotencia`) y estar disponible (`disponible === true`).
3. Si el resultado del filtro es un arreglo vacío, el sistema debe retornar un mensaje específico de "no encontrado".

## Pruebas

### Caso normal

* **Entrada**: `inventario: [...], criterioPotencia: 1200, marcaBusqueda: "Bugatti"`
* **Resultado esperado**: `{ encontrado: true, autos: [{ marca: "Bugatti", modelo: "Chiron", potencia: 1500, disponible: true }] }`

### Caso borde

* **Entrada**: `inventario: [...], criterioPotencia: 1000, marcaBusqueda: "Koenigsegg"`
* **Resultado esperado**: `{ encontrado: false, mensaje: "No se encontraron autos con esos criterios." }` (debido a que la disponibilidad es `false`).

## Explicacion final

La solución funciona mediante el método `.filter()`, que recorre el inventario aplicando una lógica booleana estricta (operador `&&`). La normalización de los nombres de las marcas a minúsculas permite que el usuario no necesite conocer el formato exacto del nombre almacenado, mejorando la experiencia de uso. Al separar la lógica de filtrado de la validación del resultado, el código garantiza que cualquier consulta sea tratada con la misma estructura, facilitando su integración en sistemas de front-end que esperen un formato de respuesta consistente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Marca)**: `auto.marca.toLowerCase() === marcaBusqueda.toLowerCase()`
* **Regla 2 (Potencia)**: `auto.potencia >= criterioPotencia`
* **Regla 3 (Disponibilidad)**: `auto.disponible === true`