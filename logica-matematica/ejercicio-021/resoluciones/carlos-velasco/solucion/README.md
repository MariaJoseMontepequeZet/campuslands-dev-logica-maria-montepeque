# Plantilla de solución

## Analisis

* **Entrada**: `puntajeBase` (numérico), `racha` (cantidad de victorias) y `penalizacion` (factor multiplicador).
* **Proceso**: Cálculo de bono limitado (máx. 50 puntos), cálculo de penalización (factor x 25), suma algebraica de componentes y normalización del resultado final para evitar valores negativos.
* **Salida**: Un objeto que muestra el `puntaje_final`, la `clasificacion` asignada y un resumen de la `explicacion` de los cálculos.

## Reglas identificadas

1. El bono es igual a la `racha` multiplicada por 10, pero nunca puede superar los 50 puntos.
2. La penalización total es igual al factor de `penalizacion` multiplicado por 25.
3. El puntaje final no puede ser menor a 0; si el cálculo resulta negativo, se ajusta a 0.

## Pruebas

### Caso normal

* **Entrada**: `puntajeBase: 120, racha: 3, penalizacion: 0`
* **Resultado esperado**: `{ puntaje_final: 150, clasificacion: "Élite", explicacion: "Base: 120, Bono: +30, Penalización: -0." }`

### Caso borde

* **Entrada**: `puntajeBase: 50, racha: 0, penalizacion: 1`
* **Resultado esperado**: `{ puntaje_final: 25, clasificacion: "Novato", explicacion: "Base: 50, Bono: +0, Penalización: -25." }`

## Explicacion final

La solución funciona mediante la aplicación estricta de límites matemáticos (`Math.min` para el tope del bono y `Math.max` para el suelo del puntaje final). Al procesar cada variable por separado antes de realizar la suma, se garantiza que el flujo de datos sea predecible y fácil de depurar. La clasificación final mediante operadores ternarios permite categorizar al usuario de manera instantánea, facilitando que el sistema responda a cambios en el rendimiento del jugador de forma coherente.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `120, 3, 0` (Cálculo manual)**:
* Bono: $3 \times 10 = 30$ (es menor que 50, se mantiene).
* Penalización: $0 \times 25 = 0$.
* PR: $120 + 30 - 0 = 150$.
* Categoría: $150 \ge 150$ = `Élite`.