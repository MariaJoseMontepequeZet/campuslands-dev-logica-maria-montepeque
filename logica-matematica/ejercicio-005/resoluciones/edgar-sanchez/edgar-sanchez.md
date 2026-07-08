# Plantilla de solucion

## Analisis
El problema se estructuró para optimizar el inventario crítico de repuestos en un taller mecánico, identificando qué componentes están por debajo del límite mínimo de seguridad y seleccionando el producto con la cantidad más baja para priorizar su reabastecimiento urgente.

- Entrada: Una lista de objetos que representan las refacciones, donde cada uno contiene el nombre del repuesto (texto), la cantidad actual en almacén (entero) y el límite mínimo de seguridad permitido (entero).
- Proceso: Recorrer linealmente las refacciones para comparar la cantidad actual frente a su propio límite mínimo. Si la cantidad es menor, se añade a un listado de alertas. Simultáneamente, se rastrea el repuesto con el menor stock absoluto para marcarlo como prioridad uno.
- Salida: Un objeto con el listado de nombres de repuestos que requieren pedido y el nombre del artículo más crítico.

## Reglas identificadas
1. Condición de Alerta de Stock: Un repuesto requiere reabastecimiento estricto únicamente si su cantidad actual en el almacén es estrictamente menor que su límite mínimo de seguridad.
2. Identificación de la Prioridad Crítica: El artículo más crítico se define como aquel con el menor número absoluto de unidades actuales, independientemente de su límite de seguridad.
3. Almacén Vacío o Estable: Si la lista de refacciones está vacía, la lista de alertas se devuelve vacía y el artículo más crítico se reporta como una cadena de texto vacía.

## Pruebas

### Caso normal
Entrada: refaccionesTaller = [{ "repuesto": "Pastillas de freno", "cantidad": 3, "limiteMinimo": 5 }, { "repuesto": "Filtro de aceite", "cantidad": 12, "limiteMinimo": 10 }, { "repuesto": "Bujias", "cantidad": 1, "limiteMinimo": 8 }]
Resultado esperado: { "repuestosParaPedido": ["Pastillas de freno", "Bujias"], "articuloMasCritico": "Bujias" }

### Caso borde
Entrada: refaccionesTaller = []
Resultado esperado: { "repuestosParaPedido": [], "articuloMasCritico": "" }

## Explicacion final
La solución funciona porque evalúa de forma lineal los umbrales de seguridad de cada pieza y calcula el mínimo absoluto de existencias para activar la cadena de suministro del taller.