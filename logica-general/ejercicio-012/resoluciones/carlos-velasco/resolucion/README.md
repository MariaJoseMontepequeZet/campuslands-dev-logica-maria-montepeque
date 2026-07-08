# Plantilla de solución

## Analisis

* **Entrada**: Dos valores numéricos: `intentos` (número total de intentos) y `aciertos` (número de intentos exitosos).
* **Proceso**: Validación de datos, cálculo de la probabilidad porcentual mediante división y asignación de una categoría (nivel) basada en umbrales predefinidos.
* **Salida**: Un objeto que detalla la `efectividad` (porcentaje), la `clasificacion` (nivel de jugador) y una `explicacion` textual.

## Reglas identificadas

1. Si `intentos` es 0, no se puede realizar el análisis.
2. Si `aciertos` es mayor que `intentos`, se considera un error de datos.
3. La clasificación depende del porcentaje obtenido: $\ge 70\%$ (Élite), $\ge 50\%$ (Competitivo), $< 50\%$ (Entrenamiento).

## Pruebas

### Caso normal

* **Entrada**: `intentos: 10, aciertos: 8`
* **Resultado esperado**: `{ efectividad: "80.0%", clasificacion: "Jugador de élite", explicacion: "De 10 intentos, tuviste 8 aciertos." }`

### Caso borde

* **Entrada**: `intentos: 10, aciertos: 3`
* **Resultado esperado**: `{ efectividad: "30.0%", clasificacion: "Requiere entrenamiento", explicacion: "De 10 intentos, tuviste 3 aciertos." }`

## Explicacion final

La solución funciona mediante la implementación de **cláusulas de guardia** que blindan el código contra errores lógicos (como la división por cero o resultados imposibles), seguido de un cálculo directo de porcentaje formateado a un decimal. La lógica condicional jerárquica permite clasificar eficazmente al jugador comparando la tasa de éxito contra umbrales establecidos, garantizando una respuesta estructurada y fácil de interpretar.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Datos faltantes)**: `intentos === 0`
* **Regla 2 (Error lógico)**: `aciertos > intentos`
* **Regla 3 (Niveles)**:
* Élite: `probabilidad >= 0.7`
* Competitivo: `probabilidad >= 0.5`
* Entrenamiento: Restante.