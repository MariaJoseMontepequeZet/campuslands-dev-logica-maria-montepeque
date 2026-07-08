# Plantilla de solución

## Analisis

* **Entrada**: Tres valores numéricos que representan `ganados`, `empatados` y `perdidos`.
* **Proceso**: Cálculo del total de partidos, determinación del porcentaje de victorias (`ganados / total`) y clasificación del equipo basada en rangos porcentuales.
* **Salida**: Un objeto que contiene el porcentaje formateado, la categoría asignada y una explicación del cálculo realizado.

## Reglas identificadas

1. Si el total de partidos es igual a cero, se debe retornar el mensaje "Sin datos de partidos."
2. El porcentaje de efectividad se calcula exclusivamente sobre las victorias respecto al total de partidos jugados.
3. La clasificación sigue los umbrales: $\ge 70\%$ (Play-offs), $\ge 40\%$ (Zona media), y $< 40\%$ (Fuera de competencia).

## Pruebas

### Caso normal

* **Entrada**: `ganados: 8, empatados: 1, perdidos: 1`
* **Resultado esperado**: `{ porcentaje: "80.00%", categoria: "Clasificado a Play-offs", explicacion: "..." }`

### Caso borde

* **Entrada**: `ganados: 0, empatados: 0, perdidos: 0`
* **Resultado esperado**: `"Sin datos de partidos."`

## Explicacion final

La solución es efectiva porque garantiza la integridad de los datos mediante una validación inicial de división por cero. El uso de `toFixed(2)` asegura una presentación estandarizada del porcentaje, mientras que la estructura de control `if-else if-else` jerarquiza la clasificación de forma clara y eficiente, asegurando que el equipo sea asignado a la categoría correcta de manera excluyente.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso normal (Cálculo manual)**:
* Total: $8 + 1 + 1 = 10$
* Efectividad: $(8 / 10) \times 100 = 80\%$
* Clasificación: $80\% \ge 70\%$ es verdadero (**Clasificado a Play-offs**).