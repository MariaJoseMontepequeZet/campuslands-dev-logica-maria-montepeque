# Plantilla de solución

## Analisis

* **Entrada**: `stockActual` (cantidad actual), `min` (límite mínimo permitido), `max` (límite máximo de capacidad).
* **Proceso**: Validación de los límites de inventario, comparación del stock frente al límite mínimo y cálculo de la cantidad a comprar para reponer hasta el nivel máximo.
* **Salida**: Un objeto que define la `accion` (Comprar/Esperar), la `cantidad_a_comprar` y una `explicacion` detallada del estado del inventario.

## Reglas identificadas

1. Si el `max` es menor o igual al `min`, se debe retornar un error de configuración.
2. Si el `stockActual` es menor al `min`, la acción es "Comprar" y la cantidad es `max - stockActual`.
3. Si el `stockActual` es mayor o igual al `min`, la acción es "Esperar" y la cantidad es 0.

## Pruebas

### Caso normal

* **Entrada**: `stockActual: 5, min: 10, max: 50`
* **Resultado esperado**: `{ accion: "Comprar", cantidad_a_comprar: 45, explicacion: "Stock actual 5. Límite mínimo 10. Límite máximo 50." }`

### Caso borde

* **Entrada**: `stockActual: 15, min: 10, max: 50`
* **Resultado esperado**: `{ accion: "Esperar", cantidad_a_comprar: 0, explicacion: "Stock actual 15. Límite mínimo 10. Límite máximo 50." }`

## Explicacion final

La solución funciona mediante una lógica condicional simplificada que permite determinar la necesidad de reposición de forma inmediata. Al establecer valores por defecto (`accion = "Esperar"`, `cantidad = 0`), el sistema solo realiza el cálculo matemático si se detecta una deficiencia en el inventario (`stockActual < min`). Esto no solo evita realizar operaciones innecesarias, sino que también asegura que el inventario se mantenga siempre dentro de los parámetros de seguridad definidos por el usuario, siendo una herramienta eficiente para la gestión de stocks.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `stockActual: 5, min: 10, max: 50` (Cálculo manual)**:
* ¿Stock (5) < Mínimo (10)? Sí.
* Cantidad a comprar: $50 - 5 = 45$.
* Resultado: "Comprar" 45 unidades.
