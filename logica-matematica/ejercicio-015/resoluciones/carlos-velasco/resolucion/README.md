# Plantilla de solución

## Analisis

* **Entrada**: `pixelesM` (millones de píxeles), `velocidad` (píxeles por minuto) y `complejidad` (factor multiplicador).
* **Proceso**: Conversión de píxeles, cálculo del tiempo total en minutos mediante la fórmula $T = (\text{píxeles} / \text{velocidad}) \times \text{complejidad}$, conversión a formato de horas/minutos y clasificación por rangos.
* **Salida**: Un objeto con el `tiempo_estimado` (h/m), la `clasificacion` (Rápido, Estándar, Extenso) y una `explicacion` contextual.

## Reglas identificadas

1. El tiempo total en minutos se obtiene dividiendo los píxeles totales por la velocidad y aplicando el factor de complejidad.
2. Conversión de formato: las horas son el resultado entero de dividir los minutos entre 60, y los minutos son el residuo.
3. Clasificación: Rápido (< 60 min), Estándar (60-239 min), Extenso (≥ 240 min).

## Pruebas

### Caso normal

* **Entrada**: `pixelesM: 2, velocidad: 50000, complejidad: 1.2`
* **Resultado esperado**: `{ tiempo_estimado: "0h 48m", clasificacion: "Rápido", explicacion: "Basado en 2M px y una velocidad de 50000 px/min." }`

### Caso borde

* **Entrada**: `pixelesM: 5, velocidad: 20000, complejidad: 2.0`
* **Resultado esperado**: `{ tiempo_estimado: "8h 20m", clasificacion: "Extenso", explicacion: "Basado en 5M px y una velocidad de 20000 px/min." }`

## Explicacion final

La solución funciona mediante la estandarización de las unidades de entrada (millones de píxeles) para realizar cálculos aritméticos precisos. Al emplear `Math.floor` y el operador módulo (`%`), logramos una conversión exacta al formato de tiempo humano (h/m). Finalmente, una estructura condicional jerárquica categoriza el esfuerzo necesario, lo que permite al usuario gestionar su carga de trabajo de manera efectiva basándose en datos cuantificables.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `5M, 20000, 2.0` (Cálculo manual)**:
* Píxeles: $5,000,000$.
* Minutos: $(5,000,000 / 20,000) \times 2 = 250 \times 2 = 500$.
* Conversión: $500 / 60 = 8$ horas y $20$ minutos ($500 \pmod{60} = 20$).
* Resultado: `8h 20m` (Extenso).