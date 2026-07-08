# Plantilla de solucion

## Analisis
El problema se diseñó para estandarizar y normalizar las puntuaciones de calidad obtenidas en las pruebas de resistencia de un taller de soldadura industrial. Debido a que las pruebas se realizan bajo diferentes escalas operativas, la normalización lineal permite transformar una puntuación directa a una escala estándar de 0 a 100, facilitando la comparación equitativa de los cordones de soldadura evaluados.

- Entrada: Puntuación directa obtenida (flotante), puntuación mínima posible de la escala (flotante) y puntuación máxima posible de la escala (flotante).
- Proceso: Validar que el rango de la escala sea mayor a cero. Restar la puntuación mínima al valor directo y dividirlo entre la diferencia del rango total ($máximo - mínimo$). Multiplicar el factor resultante por 100 para obtener la puntuación normalizada en porcentaje.
- Salida: Un número de tipo flotante que representa la puntuación de calidad normalizada en una escala de 0 a 100.

## Reglas identificadas
1. Fórmula de Normalización Lineal (Min-Max): La puntuación transformada se rige bajo la relación matemática: $P_{norm} = \frac{P_{directa} - P_{min}}{P_{max} - P_{min}} \times 100$.
2. Prevención de Escala Inválida: Si el valor máximo es menor o igual al valor mínimo (rango menor o igual a cero), la escala carece de consistencia física y el sistema retorna 0.0 de inmediato.
3. Precisión Industrial: El resultado final indexado en el ranking de soldadura debe devolverse redondeado de forma estricta a dos cifras decimales.

## Pruebas

### Caso normal
Entrada: puntuacionDirecta = 75.0, puntuacionMin = 50.0, puntuacionMax = 150.0
Resultado esperado: 25.0

### Caso borde
Entrada: puntuacionDirecta = 80.0, puntuacionMin = 100.0, puntuacionMax = 100.0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque mapea un intervalo numérico variable a un dominio porcentual estandarizado (0-100), previniendo divisiones matemáticas inválidas causadas por rangos nulos.