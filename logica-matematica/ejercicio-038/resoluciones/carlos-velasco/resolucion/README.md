# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `resultados` (números) y un valor `maximo` (número) que define la escala de referencia.
* **Proceso**: Conversión de cada puntaje a una escala porcentual (0-100) y calificación binaria (aprobado/rechazado) basada en un umbral del 60%.
* **Salida**: Un arreglo de objetos con el `valorOriginal`, `valorNormalizado` (string) y `calificacion` (string).

## Reglas identificadas

1. El valor normalizado se obtiene mediante la fórmula: `(valorOriginal / maximo) * 100`.
2. Se requiere un umbral de aprobación de al menos 60.00 para obtener la calificación "Aprobado".
3. El resultado final debe presentar el puntaje normalizado formateado a dos posiciones decimales.

## Pruebas

### Caso normal

* **Entrada**: `resultados: [45, 80, 20], maximo: 100`
* **Resultado esperado**: `[{ valorOriginal: 45, valorNormalizado: "45.00", calificacion: "Rechazado" }, { valorOriginal: 80, valorNormalizado: "80.00", calificacion: "Aprobado" }, { valorOriginal: 20, valorNormalizado: "20.00", calificacion: "Rechazado" }]`

### Caso borde

* **Entrada**: `resultados: [15], maximo: 25`
* **Resultado esperado**: `[{ valorOriginal: 15, valorNormalizado: "60.00", calificacion: "Aprobado" }]`

## Explicacion final

La solución funciona al mapear cada elemento del arreglo original a una nueva estructura estandarizada. La normalización matemática permite comparar resultados de diferentes escalas, mientras que la estructura lógica de condicionales garantiza una evaluación uniforme y consistente para todos los datos de entrada.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`15 / 25 = 0.6`, `0.6 * 100 = 60.00`).