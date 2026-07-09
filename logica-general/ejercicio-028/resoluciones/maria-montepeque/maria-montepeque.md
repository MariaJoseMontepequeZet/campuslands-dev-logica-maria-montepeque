# Solución Ejercicio 028 - Patrones de puntuación

## Análisis
- **Entrada**: Un arreglo de números (`participantes`), un valor de `bono` y una `penalización`.
- **Proceso**: Calcular la suma de los participantes, añadir el bono y restar la penalización para obtener el puntaje final.
- **Salida**: Un objeto que muestra el resultado final, la clasificación y la explicación del cálculo.

## Reglas identificadas
1. **Validación**: Si el arreglo `participantes` está vacío, el sistema debe retornar un mensaje de error.
2. **Cálculo**: Se aplica la fórmula `(suma de participantes + bono) - penalizacion`.
3. **Clasificación**: Puntajes > 50 se marcan como "Competitivo", de lo contrario son "En desarrollo".

## Pruebas

### Caso normal
- **Entrada**: `participantes: [12, 18, 25, 30], bono: 8, penalización: 3`
- **Resultado esperado**: `puntaje_final: 90, clasificacion: "Competitivo"`

### Caso borde
- **Entrada**: `participantes: [], bono: 5, penalización: 2`
- **Resultado esperado**: `{ error: "No hay datos de participantes." }`

## Explicación final
El algoritmo utiliza `reduce` para acumular los valores de forma limpia. Al realizar las operaciones matemáticas después de la validación, garantizamos que el sistema siempre devuelva resultados predecibles y fáciles de auditar.