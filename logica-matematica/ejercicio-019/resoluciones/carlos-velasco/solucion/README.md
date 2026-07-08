# Plantilla de solución

## Analisis

* **Entrada**: `reactivoA` (cantidad), `reactivoB` (cantidad) y `factorIdeal` (proporción deseada).
* **Proceso**: Validación de divisor no nulo, cálculo de la proporción real ($A / B$), establecimiento de un margen de error del 5% sobre el factor ideal y comparación para determinar la estabilidad de la mezcla.
* **Salida**: Un objeto que contiene un `estado` descriptivo de la mezcla y la `proporcion` calculada con dos decimales.

## Reglas identificadas

1. El `reactivoB` no puede ser cero para evitar errores de división.
2. Una mezcla es "Reacción Estable" si la diferencia absoluta entre la proporción real y el `factorIdeal` es menor o igual al 5% del factor ideal.
3. Si la mezcla es inestable, se clasifica como "Déficit de reactivo A" (si la proporción es menor al ideal) o "Exceso de reactivo A" (si es mayor).

## Pruebas

### Caso normal

* **Entrada**: `reactivoA: 10, reactivoB: 5, factorIdeal: 2`
* **Resultado esperado**: `{ estado: "Reacción Estable", proporcion: "2.00" }`

### Caso borde

* **Entrada**: `reactivoA: 5, reactivoB: 5, factorIdeal: 2`
* **Resultado esperado**: `{ estado: "Inestable: Déficit de reactivo A", proporcion: "1.00" }`

## Explicacion final

La solución funciona mediante el uso de la función `Math.abs`, que permite evaluar la cercanía de la proporción real respecto al valor ideal, independientemente de la dirección de la desviación. Al establecer un margen de tolerancia basado en el 5% del factor ideal, el sistema es capaz de ignorar pequeñas variaciones matemáticas irrelevantes, clasificando solo las desviaciones significativas. Esta lógica garantiza una evaluación precisa y profesional del estado de la reacción química.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `10 / 5` (Cálculo manual)**:
* Proporción real: $2$.
* Margen: $2 \times 0.05 = 0.1$.
* Estabilidad: $|2 - 2| = 0$. Como $0 \le 0.1$, la mezcla es **Estable**.