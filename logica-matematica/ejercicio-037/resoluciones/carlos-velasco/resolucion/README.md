# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo de objetos `proyectos` (cada uno con `nombre`, `tiempoRender` y `puntosCalidad`) y un número `factor` de ajuste.
* **Proceso**: Iteración sobre la lista de proyectos para calcular un puntaje de eficiencia y asignar una categoría basada en rangos definidos.
* **Salida**: Un nuevo arreglo de objetos con el `nombre`, `puntaje` (formateado) y `categoria` de cada proyecto.

## Reglas identificadas

1. El puntaje se calcula como: `(puntosCalidad / tiempoRender) * factor`.
2. Categoría "Top tier" si el puntaje es mayor a 10.
3. Categoría "Estándar" si el puntaje está entre 5 y 10 (inclusive); de lo contrario, es "Bajo rendimiento".

## Pruebas

### Caso normal

* **Entrada**: `{ proyectos: [{ nombre: "Casa Rural", tiempoRender: 10, puntosCalidad: 100 }], factor: 1.2 }`
* **Resultado esperado**: `[{ nombre: "Casa Rural", puntaje: "12.00", categoria: "Top tier" }]`

### Caso borde

* **Entrada**: `{ proyectos: [{ nombre: "Edificio", tiempoRender: 50, puntosCalidad: 50 }], factor: 1.2 }`
* **Resultado esperado**: `[{ nombre: "Edificio", puntaje: "1.20", categoria: "Bajo rendimiento" }]`

## Explicacion final

La solución funciona mediante una transformación de datos declarativa utilizando `.map()`. Al separar el cálculo matemático de la lógica de categorización, el código es capaz de estandarizar la evaluación de cualquier número de proyectos, garantizando una salida consistente que permite comparar el rendimiento arquitectónico de forma objetiva basada en la relación calidad-tiempo.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`Casa Rural`: `100 / 10 = 10`, `10 * 1.2 = 12.00`).