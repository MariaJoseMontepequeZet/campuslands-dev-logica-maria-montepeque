# Plantilla de solución

## Analisis

* **Entrada**: Dos objetos: `aterrizaje` y `objetivo`, cada uno con coordenadas `x` e `y`.
* **Proceso**: Cálculo de la distancia euclidiana entre ambos puntos y clasificación del resultado en categorías según rangos de distancia.
* **Salida**: Un objeto que muestra la `distancia` total calculada (en metros), la `categoria` asignada y una `explicacion` de las coordenadas de origen y destino.

## Reglas identificadas

1. La distancia se calcula mediante el teorema de Pitágoras: $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.
2. Categoría "Aterrizaje perfecto": distancia menor o igual a 10 metros.
3. Categoría "Aterrizaje aceptable": distancia mayor a 10 y menor o igual a 50 metros.
4. Categoría "Fuera de zona": distancia superior a 50 metros.

## Pruebas

### Caso normal

* **Entrada**: `aterrizaje: {x: 0, y: 0}, objetivo: {x: 5, y: 5}`
* **Resultado esperado**: `{ distancia: "7.07 metros", categoria: "Aterrizaje perfecto", explicacion: "Calculado desde (0, 0) hacia (5, 5)." }`

### Caso borde

* **Entrada**: `aterrizaje: {x: 0, y: 0}, objetivo: {x: 60, y: 0}`
* **Resultado esperado**: `{ distancia: "60.00 metros", categoria: "Fuera de zona", explicacion: "Calculado desde (0, 0) hacia (60, 0)." }`

## Explicacion final

La solución funciona aplicando el **teorema de Pitágoras** para transformar diferencias de coordenadas cartesianas en una distancia lineal absoluta. Una vez obtenida la magnitud, una estructura de control condicional (`if-else if-else`) clasifica la precisión del aterrizaje, garantizando que el sistema proporcione una retroalimentación cualitativa inmediata basada en los umbrales de seguridad definidos.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `{0, 0}` hacia `{5, 5}` (Cálculo manual)**:
* $\Delta x = 5, \Delta y = 5$.
* Distancia = $\sqrt{5^2 + 5^2} = \sqrt{25 + 25} = \sqrt{50} \approx 7.071$.
* Resultado: $7.07$ metros (Aterrizaje perfecto).