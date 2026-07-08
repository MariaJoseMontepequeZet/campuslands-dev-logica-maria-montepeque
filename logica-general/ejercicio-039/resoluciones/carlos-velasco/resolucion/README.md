# Plantilla de solución

## Analisis

* **Entrada**: Un `inventario` (arreglo de objetos) y una lista de nombres de reactivos `requeridos` (arreglo de strings).
* **Proceso**: Verificación de disponibilidad en el inventario y conteo de componentes peligrosos para determinar el nivel de riesgo de la mezcla.
* **Salida**: Objeto con el `estado` (Reacción suspendida, Precaución o Aprobado) y un `motivo` descriptivo.

## Reglas identificadas

1. Si un reactivo requerido no existe o su cantidad es 0, la reacción se suspende.
2. Si la cantidad de reactivos peligrosos en la mezcla es mayor a 1, se genera una alerta de "Precaución".
3. Si todos los reactivos están disponibles y no hay riesgo elevado, la mezcla es "Aprobada".

## Pruebas

### Caso normal

* **Entrada**: `inventario: stock, requeridos: ["Acido", "Agua"]`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "Todos los reactivos listos." }`

### Caso borde

* **Entrada**: `inventario: stock, requeridos: ["Acido", "Base"]`
* **Resultado esperado**: `{ estado: "Precaución", motivo: "Alerta: Mezcla de alto riesgo" }`

## Explicacion final

La solución funciona mediante una validación secuencial que prioriza la disponibilidad del inventario y, posteriormente, evalúa la interacción de seguridad entre componentes. Esto asegura que solo se procesen mezclas seguras y físicamente posibles con los recursos actuales.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Disponibilidad**: `!item || item.cantidad <= 0`
* **Riesgo**: `peligrososEncontrados > 1`