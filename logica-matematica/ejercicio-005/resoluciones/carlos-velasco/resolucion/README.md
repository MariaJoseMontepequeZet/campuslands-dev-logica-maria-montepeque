# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `inventario` donde las llaves son nombres de repuestos (string) y los valores son sus cantidades actuales (number).
* **Proceso**: Conversión del objeto a un formato de *array* procesable, identificación del repuesto con menor cantidad mediante el método `reduce`, y evaluación de dicha cantidad contra umbrales predefinidos para asignar una acción de reabastecimiento.
* **Salida**: Un objeto que resume el repuesto crítico, la cantidad actual y la acción requerida.

## Reglas identificadas

1. Si la cantidad es menor o igual a 5, la acción es "Pedido Urgente".
2. Si la cantidad es mayor a 5 pero menor o igual a 15, la acción es "Pedido Programado".
3. Si la cantidad es mayor a 15, la acción es "Stock Óptimo".

## Pruebas

### Caso normal

* **Entrada**: `{ "Frenos": 3, "Aceite": 20, "Bujías": 10 }`
* **Resultado esperado**: `{ repuesto_critico: "Frenos", cantidad_actual: 3, accion_requerida: "Pedido Urgente" }`

### Caso borde

* **Entrada**: `{ "Frenos": 10, "Aceite": 15 }`
* **Resultado esperado**: `{ repuesto_critico: "Frenos", cantidad_actual: 10, accion_requerida: "Pedido Programado" }`

## Explicacion final

La solución funciona mediante el uso eficiente de `Object.entries()` para convertir datos no estructurados en una matriz iterativa, lo que facilita el uso de `reduce()` para encontrar el mínimo global. Al separar la lógica de búsqueda de la lógica de negocio (los condicionales `if/else`), el código es fácil de leer y permite ajustar los niveles críticos de inventario sin afectar la estructura principal de procesamiento.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso normal (Cálculo manual)**:
* Inventario: `Frenos: 3`, `Aceite: 20`, `Bujías: 10`.
* Mínimo: $3$ (Frenos).
* Comparación: $3 \le 5$ es verdadero (**Pedido Urgente**).