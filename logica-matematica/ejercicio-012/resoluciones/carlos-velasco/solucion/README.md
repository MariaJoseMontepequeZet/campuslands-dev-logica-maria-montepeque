# Plantilla de solución

## Analisis

* **Entrada**: Dos números enteros: `totales` (número total de saques) y `exitosos` (número de saques exitosos).
* **Proceso**: Validación de los intentos, cálculo del porcentaje de efectividad mediante una regla de tres simple y asignación de una categoría basada en umbrales definidos.
* **Salida**: Un objeto que detalla la `efectividad` (porcentaje con formato), la `categoria` asignada y una `explicacion` textual sobre el desempeño.

## Reglas identificadas

1. Los intentos totales deben ser estrictamente mayores a 0 para proceder con el análisis.
2. La efectividad se calcula como: (exitosos / totales) * 100.
3. La categorización se define por rangos: $\ge 80\%$ (Profesional), $\ge 50\%$ (Intermedio), $< 50\%$ (Entrenamiento).

## Pruebas

### Caso normal

* **Entrada**: `totales: 10, exitosos: 9`
* **Resultado esperado**: `{ efectividad: "90.00%", categoria: "Nivel Profesional", explicacion: "De 10 saques, 9 fueron exitosos." }`

### Caso borde

* **Entrada**: `totales: 10, exitosos: 4`
* **Resultado esperado**: `{ efectividad: "40.00%", categoria: "En Entrenamiento", explicacion: "De 10 saques, 4 fueron exitosos." }`

## Explicacion final

La solución funciona mediante una **evaluación condicional secuencial** que transforma datos brutos en métricas comprensibles. El uso de `toFixed(2)` garantiza la precisión necesaria para reportes estadísticos, mientras que la estructura de control de flujo (`if-else`) permite clasificar al usuario de forma rápida y eficiente, asegurando que cada resultado sea entregado con su contexto correspondiente.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `10, 9` (Cálculo manual)**:
* Efectividad: $(9 / 10) \times 100 = 90.00\%$.
* Categoría: $90 \ge 80$, por lo tanto, "Nivel Profesional".