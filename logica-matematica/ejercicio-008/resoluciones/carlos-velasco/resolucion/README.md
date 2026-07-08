# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de números (`calificaciones`) que representa las puntuaciones otorgadas por los críticos.
* **Proceso**: Cálculo de la suma total mediante `reduce`, determinación del promedio aritmético y clasificación del resultado según umbrales predefinidos.
* **Salida**: Un objeto que contiene el puntaje final redondeado, la clasificación asignada y una breve explicación sobre la cantidad de críticas procesadas.

## Reglas identificadas

1. Si el *array* de calificaciones está vacío, se debe retornar un mensaje indicando que no hay datos disponibles.
2. Si el promedio es mayor o igual a 8.5, la película se clasifica como "Película de Culto".
3. Si el promedio es mayor o igual a 6.0 (y menor a 8.5), la película se clasifica como "Éxito Comercial"; de lo contrario, se marca como "Poco valorada".

## Pruebas

### Caso normal

* **Entrada**: `[9, 8, 9, 9]`
* **Resultado esperado**: `{ puntaje_final: "8.75", clasificacion: "Película de Culto", explicacion: "Promedio calculado de 4 críticas." }`

### Caso borde

* **Entrada**: `[5, 4, 3]`
* **Resultado esperado**: `{ puntaje_final: "4.00", clasificacion: "Poco valorada", explicacion: "Promedio calculado de 3 críticas." }`

## Explicacion final

La solución funciona mediante la **agregación de datos** a través del método `reduce`, lo cual permite obtener la suma de manera eficiente sin necesidad de bucles iterativos manuales. La separación lógica entre el cálculo matemático del promedio y la clasificación categórica permite que el sistema sea fácil de ajustar en el futuro (por ejemplo, si se deseara cambiar los umbrales de puntuación) sin alterar el núcleo del cálculo.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `[9, 8, 9, 9]` (Cálculo manual)**:
* Suma: $9 + 8 + 9 + 9 = 35$
* Promedio: $35 / 4 = 8.75$
* Estado: $8.75 \ge 8.5$ es verdadero (**Película de Culto**).