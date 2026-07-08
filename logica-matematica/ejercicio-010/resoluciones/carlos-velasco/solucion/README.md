# Plantilla de solución

## Analisis

* **Entrada**: Tres valores numéricos: `precioBase` (precio original), `impuesto` (porcentaje en formato decimal) y `cambio` (tasa de conversión a moneda destino).
* **Proceso**: Aplicación de la tasa impositiva sobre el precio base, conversión a la moneda destino mediante el factor de cambio y redondeo del resultado final al entero más próximo.
* **Salida**: Un objeto que contiene el `precio_final` (entero), la `moneda` (etiqueta fija) y una `explicacion` detallada del cálculo realizado.

## Reglas identificadas

1. El precio con impuestos se calcula multiplicando el precio base por el factor `(1 + impuesto)`.
2. La conversión a moneda extranjera se realiza multiplicando el precio con impuestos por la tasa de `cambio`.
3. El resultado final debe redondearse siempre al número entero más próximo utilizando el método de redondeo estándar.

## Pruebas

### Caso normal

* **Entrada**: `precioBase: 100, impuesto: 0.15, cambio: 1.05`
* **Resultado esperado**: `{ precio_final: 121, moneda: "USD", explicacion: "Se aplicó un impuesto del 15%, se convirtió a la moneda destino y se redondeó al entero más próximo." }`

### Caso borde

* **Entrada**: `precioBase: 50, impuesto: 0.10, cambio: 0.90`
* **Resultado esperado**: `{ precio_final: 50, moneda: "USD", explicacion: "Se aplicó un impuesto del 10%, se convirtió a la moneda destino y se redondeó al entero más próximo." }`

## Explicacion final

La solución funciona porque sigue una **secuencia lógica de transformaciones financieras**. Primero, escala el valor original para incluir el tributo; segundo, ajusta el valor al mercado extranjero; y finalmente, utiliza `Math.round()` para estandarizar el formato de salida. Esta estructura garantiza precisión en la conversión y una presentación amigable del precio final para el usuario.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `100, 0.15, 1.05` (Cálculo manual)**:
* Precio con impuesto: $100 \times 1.15 = 115$.
* Conversión: $115 \times 1.05 = 120.75$.
* Redondeo: $120.75 \approx 121$.