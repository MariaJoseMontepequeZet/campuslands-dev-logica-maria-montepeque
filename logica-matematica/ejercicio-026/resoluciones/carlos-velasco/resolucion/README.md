# Plantilla de solución

## Analisis

* **Entrada**: `stockActual` (cantidad en existencia), `min` (límite mínimo), `max` (límite máximo).
* **Proceso**: Validación de los límites configurados, evaluación de la necesidad de compra mediante comparación con el stock mínimo y cálculo de la cantidad necesaria para alcanzar el stock máximo.
* **Salida**: Objeto con la `accion` (Comprar/Esperar), `cantidad_a_comprar` y una `explicacion` técnica del estado actual.

## Reglas identificadas

1. Si `max` es menor o igual a `min`, el sistema retorna un error de configuración.
2. Si el `stockActual` es menor al `min`, la acción es "Comprar" y la cantidad a adquirir es `max - stockActual`.
3. Si el `stockActual` es mayor o igual al `min`, la acción es "Esperar" y la cantidad a comprar es 0.

## Pruebas

### Caso normal

* **Entrada**: `stockActual: 5, min: 10, max: 50`
* **Resultado esperado**: `{ accion: "Comprar", cantidad_a_comprar: 45, explicacion: "Stock actual 5. Límite mínimo 10. Límite máximo 50." }`

### Caso borde

* **Entrada**: `stockActual: 15, min: 10, max: 50`
* **Resultado esperado**: `{ accion: "Esperar", cantidad_a_comprar: 0, explicacion: "Stock actual 15. Límite mínimo 10. Límite máximo 50." }`

## Explicacion final

La solución funciona mediante una lógica condicional que utiliza valores por defecto ("Esperar", 0) para minimizar la complejidad del código. Solo cuando se dispara la condición de alerta (`stockActual < min`), el sistema procede a realizar el cálculo de reposición necesario para alcanzar el nivel máximo permitido. Esto garantiza que el inventario se mantenga siempre operativo de manera automatizada y eficiente.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual**: Con un stock de 5 y mínimo de 10, la diferencia es crítica. El cálculo `50 - 5` resulta exactamente en 45 unidades a adquirir para restaurar el máximo.