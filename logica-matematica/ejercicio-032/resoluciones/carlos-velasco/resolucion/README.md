# Plantilla de solución

## Analisis

* **Entrada**: `servicio` (número decimal entre 0 y 1) y `devolucion` (número decimal entre 0 y 1).
* **Proceso**: Validación del rango de entrada, cálculo de la probabilidad conjunta mediante producto de eventos independientes y categorización del resultado en niveles de confianza.
* **Salida**: Un objeto que contiene el `probabilidad_porcentaje` (string con formato %), `clasificacion` (nivel de probabilidad) y una `explicacion` del cálculo.

## Reglas identificadas

1. Los valores de entrada deben estar estrictamente en el rango $[0, 1]$; de lo contrario, se retorna un error.
2. El resultado es el producto de ambos factores (`servicio * devolucion`).
3. La clasificación es: "Probabilidad alta" (> 0.70), "Probabilidad media" (0.40 - 0.70) o "Probabilidad baja" (< 0.40).

## Pruebas

### Caso normal

* **Entrada**: `servicio: 0.9, devolucion: 0.85`
* **Resultado esperado**: `{ probabilidad_porcentaje: "76.50%", clasificacion: "Probabilidad alta", explicacion: "Multiplicando efectividad de servicio (0.9) por devolución (0.85)." }`

### Caso borde

* **Entrada**: `servicio: 0.5, devolucion: 0.3`
* **Resultado esperado**: `{ probabilidad_porcentaje: "15.00%", clasificacion: "Probabilidad baja", explicacion: "Multiplicando efectividad de servicio (0.5) por devolución (0.3)." }`

## Explicacion final

La solución funciona aplicando la teoría de probabilidad para eventos independientes. Al multiplicar las tasas de éxito individuales, obtenemos la probabilidad combinada de que ambos eventos ocurran simultáneamente. El uso de validaciones iniciales asegura que el sistema sea coherente con las leyes de la probabilidad, y la lógica de clasificación permite transformar datos estadísticos en información táctica comprensible para cualquier usuario del sistema.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`0.9, 0.85`):
* Producto: $0.9 \times 0.85 = 0.765$.
* Porcentaje: $0.765 \times 100 = 76.50\%$.
* Clasificación: $0.765 > 0.70$, por lo tanto, "Probabilidad alta".