# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `inventario` donde las claves son los nombres de las sustancias y los valores son cantidades numéricas.
* **Proceso**: Iteración sobre cada propiedad del objeto para comparar las cantidades con rangos establecidos y asignar un estado descriptivo.
* **Salida**: Un nuevo objeto con el mismo conjunto de claves, donde cada valor es una cadena de texto indicando el estado del stock.

## Reglas identificadas

1. Si la cantidad es menor o igual a 5, el estado es "Estado Crítico: Reponer urgente".
2. Si la cantidad es mayor a 5 pero menor o igual a 20, el estado es "Estado Bajo: Programar compra".
3. Si la cantidad es mayor a 20, el estado es "Estado Óptimo: Stock suficiente".

## Pruebas

### Caso normal

* **Entrada**: `{ "Etanol": 15 }`
* **Resultado esperado**: `{ "Etanol": "Estado Bajo: Programar compra" }`

### Caso borde

* **Entrada**: `{ "Ácido Sulfúrico": 3, "Agua Destilada": 50 }`
* **Resultado esperado**: `{ "Ácido Sulfúrico": "Estado Crítico: Reponer urgente", "Agua Destilada": "Estado Óptimo: Stock suficiente" }`

## Explicacion final

La solución funciona mediante la utilización del bucle `for...in`, que permite acceder dinámicamente a cada par clave-valor del objeto de inventario. Al evaluar las cantidades utilizando una estructura de control `if-else if-else` en orden descendente de urgencia, logramos una clasificación precisa. La creación de un nuevo objeto `reporte` asegura que la función sea pura y no modifique el inventario original, permitiendo una gestión de datos limpia y fácil de integrar en otros sistemas de monitoreo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Crítico)**: `cantidad <= 5`
* **Regla 2 (Bajo)**: `cantidad > 5 && cantidad <= 20`
* **Regla 3 (Óptimo)**: `cantidad > 20`