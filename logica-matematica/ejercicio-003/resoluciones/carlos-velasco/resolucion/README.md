# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de números (`partidas`) que representa una serie de resultados numéricos.
* **Proceso**: Cálculo del promedio aritmético mediante la suma total dividida por la cantidad de elementos; determinación de la mediana mediante el ordenamiento del *array* y selección del punto medio; comparación entre ambos valores para clasificar la estabilidad del conjunto.
* **Salida**: Un objeto que contiene el promedio, la mediana y una etiqueta de clasificación ("Consistente" o "Volátil").

## Reglas identificadas

1. Si el *array* de partidas está vacío, el sistema debe retornar el mensaje "Sin datos".
2. La mediana debe calcularse correctamente tanto para conjuntos de datos con cantidad impar (valor central) como par (promedio de los dos centrales).
3. El rendimiento se clasifica como "Consistente" si la mediana es estrictamente mayor al promedio; de lo contrario, se marca como "Volátil".

## Pruebas

### Caso normal

* **Entrada**: `[10, 15, 100]`
* **Resultado esperado**: `{ promedio: 41.666..., mediana: 15, clasificacion: "Volátil" }`

### Caso borde

* **Entrada**: `[]`
* **Resultado esperado**: `"Sin datos"`

## Explicacion final

La solución funciona porque utiliza métodos nativos de JavaScript para procesar los datos de forma inmutable. Al calcular tanto la media como la mediana, el sistema es capaz de detectar la influencia de valores atípicos (*outliers*) en el conjunto de datos. La comparación lógica final permite clasificar la variabilidad del rendimiento de manera automática y precisa.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso normal (Cálculo manual)**:
* Suma: $10 + 15 + 100 = 125$
* Promedio: $125 / 3 = 41.666...$
* Mediana: Al ordenar `[10, 15, 100]`, el valor central es $15$.
* Clasificación: $15 > 41.666$ es falso (**Volátil**).