# Plantilla de solución

## Analisis

* **Entrada**: `costoTotal` (número), `numPersonas` (número), `tasaImpuesto` (número decimal).
* **Proceso**: Cálculo del valor total con impuestos, división equitativa entre los integrantes del grupo y aplicación de redondeo hacia arriba para asegurar la cobertura total del gasto.
* **Salida**: Un objeto que contiene el `costo_por_persona` (entero) y una `explicacion` desglosada del cálculo.

## Reglas identificadas

1. Si el número de personas es 0 o negativo, el sistema debe retornar un mensaje de error.
2. Se debe aplicar el IVA al `costoTotal` antes de realizar la división (`costoTotal * (1 + tasaImpuesto)`).
3. El costo por persona debe redondearse siempre al entero superior usando `Math.ceil()`.

## Pruebas

### Caso normal

* **Entrada**: `costoTotal: 1000, numPersonas: 3, tasaImpuesto: 0.19`
* **Resultado esperado**: `{ costo_por_persona: 397, explicacion: "Total con IVA: 1190.00. Dividido entre 3 personas y redondeado al entero superior." }`

### Caso borde

* **Entrada**: `costoTotal: 500, numPersonas: 5, tasaImpuesto: 0.10`
* **Resultado esperado**: `{ costo_por_persona: 110, explicacion: "Total con IVA: 550.00. Dividido entre 5 personas y redondeado al entero superior." }`

## Explicacion final

La solución funciona mediante una progresión matemática lineal: primero determina el pasivo total incluyendo la carga impositiva, luego segmenta este valor de forma igualitaria. La elección de `Math.ceil()` es fundamental para la gestión financiera, ya que al dividir montos con posibles decimales, el redondeo hacia arriba garantiza que la suma de todas las partes cubra la totalidad del monto original, eliminando pérdidas por truncamiento.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`1000, 3, 0.19`):
* Total con IVA: $1000 * 1.19 = 1190$.
* División: $1190 / 3 = 396.666...$
* Redondeo (`Math.ceil`): $397$.