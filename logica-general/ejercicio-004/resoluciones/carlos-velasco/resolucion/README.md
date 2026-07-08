# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de objetos (`inventario`), donde cada objeto contiene `modelo` (string), `kilometraje` (number) y `estado` (string).
* **Proceso**: Iteración sobre cada elemento del inventario utilizando `map()`, aplicando reglas de clasificación jerárquicas basadas en kilometraje y estado operativo para generar un nuevo objeto con el modelo y su clasificación.
* **Salida**: Un nuevo *array* de objetos que contiene el `modelo` y su `clasificacion` correspondiente.

## Reglas identificadas

1. Cualquier motocicleta con un `kilometraje` mayor a 10,000 km se clasifica automáticamente como "Mantenimiento requerido".
2. Si no cumple la regla de kilometraje, pero su `estado` es "disponible", se clasifica como "Lista para venta".
3. Si no se cumplen las dos reglas anteriores, la motocicleta recibe la clasificación de "Revisión general".

## Pruebas

### Caso normal

* **Entrada**: `{ modelo: "Honda CB500", kilometraje: 5000, estado: "disponible" }`
* **Resultado esperado**: `{ modelo: "Honda CB500", clasificacion: "Lista para venta" }`

### Caso borde

* **Entrada**: `{ modelo: "Yamaha MT-07", kilometraje: 12000, estado: "disponible" }`
* **Resultado esperado**: `{ modelo: "Yamaha MT-07", clasificacion: "Mantenimiento requerido" }`

## Explicacion final

La solución es efectiva porque aplica un enfoque de **transformación funcional** (mediante `.map()`), lo cual asegura que el inventario original se mantenga intacto mientras se genera la nueva información clasificada. La jerarquía de las condiciones `if/else` garantiza que el mantenimiento preventivo tenga prioridad sobre el estado comercial de la unidad, lo cual es fundamental para una gestión de inventario segura y eficiente.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Mantenimiento)**: `kilometraje > 10000`
* **Regla 2 (Venta)**: `estado === "disponible"`
* **Regla 3 (Revisión)**: `else` (ninguna de las anteriores).