# Plantilla de solución

## Analisis

* **Entrada**: `ancho` (número), `alto` (número), `precioCm2` (número) y `precioPerimetro` (número).
* **Proceso**: Cálculo del área y perímetro, aplicación de tarifas base por dimensiones y evaluación de un recargo fijo si el área es menor a 5 unidades.
* **Salida**: Un objeto con el `costo_total` (string formateado), `area`, `perimetro` y la `explicacion` del cálculo realizado.

## Reglas identificadas

1. Si el ancho o el alto son menores o iguales a 0, las dimensiones se consideran inválidas.
2. El costo base se obtiene sumando el producto del área por su precio y el perímetro por su precio.
3. Se aplica un recargo fijo de 20 unidades monetarias si el área del diseño es estrictamente menor a 5.

## Pruebas

### Caso normal

* **Entrada**: `ancho: 10, alto: 10, precioCm2: 10, precioPerimetro: 5`
* **Resultado esperado**: `{ costo_total: "1200.00", area: 100, perimetro: 40, explicacion: "Cálculo basado en área y perímetro, incluyendo recargo mínimo si aplica." }`

### Caso borde

* **Entrada**: `ancho: 2, alto: 2, precioCm2: 10, precioPerimetro: 5`
* **Resultado esperado**: `{ costo_total: "100.00", area: 4, perimetro: 8, explicacion: "Cálculo basado en área y perímetro, incluyendo recargo mínimo si aplica." }`

## Explicacion final

La solución funciona porque realiza una segmentación clara entre los costos variables (basados en las dimensiones de la superficie y contorno) y los costos fijos (recargos por diseño pequeño). Al calcular el área y perímetro de forma dinámica, la función se adapta a cualquier tamaño de diseño, asegurando que el precio refleje proporcionalmente el esfuerzo del trabajo mientras protege la rentabilidad del servicio mediante el recargo mínimo.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`ancho: 2, alto: 2, precioCm2: 10, precioPerimetro: 5`):
* Área: $2 \times 2 = 4$.
* Perímetro: $2 \times (2 + 2) = 8$.
* Costo base: $(4 \times 10) + (8 \times 5) = 40 + 40 = 80$.
* Recargo (ya que $4 < 5$): $80 + 20 = 100$.