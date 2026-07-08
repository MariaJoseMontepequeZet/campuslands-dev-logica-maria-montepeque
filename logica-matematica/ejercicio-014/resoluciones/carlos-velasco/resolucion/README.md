# Plantilla de solución

## Analisis

* **Entrada**: Dimensiones del tatuaje (`ancho`, `alto`) y tarifas (`costoCm2`, `costoPExtra`).
* **Proceso**: Cálculo del área ($ancho \times alto$) y perímetro ($2 \times (ancho + alto)$), seguido de la aplicación del costo base y un posible recargo si el perímetro supera los 30 cm.
* **Salida**: Un objeto que detalla el área total, el perímetro, el costo final formateado y una explicación del cálculo realizado.

## Reglas identificadas

1. El costo base se obtiene multiplicando el área total por la tarifa por centímetro cuadrado.
2. Si el perímetro es mayor a 30 cm, se aplica un recargo adicional calculado como el perímetro multiplicado por la tarifa extra.
3. El resultado final debe presentarse en formato de moneda (dos decimales).

## Pruebas

### Caso normal

* **Entrada**: `ancho: 5, alto: 4, costoCm2: 10, costoPExtra: 2`
* **Resultado esperado**: `{ area: "20 cm2", perimetro: "18 cm", costo_total: "$200.00", explicacion: "Costo calculado por área más recargo por perímetro no aplicado." }`

### Caso borde

* **Entrada**: `ancho: 10, alto: 10, costoCm2: 10, costoPExtra: 2`
* **Resultado esperado**: `{ area: "100 cm2", perimetro: "40 cm", costo_total: "$1080.00", explicacion: "Costo calculado por área más recargo por perímetro aplicado." }`

## Explicacion final

La solución funciona porque segmenta el costo en dos partes: una fija basada en la superficie ocupada (área) y una variable basada en la complejidad del contorno (perímetro). Al verificar el umbral de 30 cm, el código aplica lógicamente el recargo necesario, y el uso de `toFixed(2)` junto con plantillas de cadenas permite generar una respuesta clara y profesional que informa al usuario exactamente cómo se compuso su presupuesto.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `10, 10` (Cálculo manual)**:
* Área: $10 \times 10 = 100$.
* Perímetro: $2 \times (10 + 10) = 40$.
* Costo: $(100 \times 10) + (40 \times 2) = 1000 + 80 = 1080$.
* Resultado: `$1080.00` (Recargo aplicado).