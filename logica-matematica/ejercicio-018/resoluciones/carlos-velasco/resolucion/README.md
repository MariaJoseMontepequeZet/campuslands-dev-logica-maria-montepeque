# Plantilla de solución

## Analisis

* **Entrada**: `puntajes` (arreglo de números), `bono` (valor a sumar) y `penalizacion` (valor a restar).
* **Proceso**: Aplicación de ajustes aritméticos a cada elemento, normalización de los resultados dentro del rango [0, 100] y asignación de categorías según rangos definidos.
* **Salida**: Un arreglo de objetos que contiene el `puntaje` final ajustado y su `categoria` correspondiente.

## Reglas identificadas

1. El puntaje final se obtiene sumando el bono y restando la penalización al valor original.
2. El puntaje final debe estar contenido estrictamente entre 0 y 100 (si es menor a 0, se vuelve 0; si es mayor a 100, se vuelve 100).
3. Categorización: >= 90 es "Excelente", >= 70 es "Aceptable", y cualquier valor menor es "Reprobado".

## Pruebas

### Caso normal

* **Entrada**: `puntajes: [85], bono: 10, penalizacion: 5`
* **Resultado esperado**: `[{ puntaje: 90, categoria: "Excelente" }]`

### Caso borde

* **Entrada**: `puntajes: [50], bono: 10, penalizacion: 5`
* **Resultado esperado**: `[{ puntaje: 55, categoria: "Reprobado" }]`

## Explicacion final

La solución funciona mediante el uso del método `map`, que permite transformar cada elemento del arreglo de forma independiente y eficiente. La clave de la robustez del código radica en la combinación de `Math.max` y `Math.min`, los cuales actúan como una "cerca" matemática que impide que los puntajes excedan los límites lógicos establecidos, independientemente de qué tan grandes sean el bono o la penalización. Finalmente, el encadenamiento de operadores ternarios proporciona una forma clara y legible de clasificar el desempeño sin añadir complejidad innecesaria al flujo del programa.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `85` (Cálculo manual)**:
* Ajuste: $85 + 10 - 5 = 90$.
* Normalización: `Math.max(0, Math.min(100, 90))` = $90$.
* Categoría: $90 \ge 90$ = `Excelente`.