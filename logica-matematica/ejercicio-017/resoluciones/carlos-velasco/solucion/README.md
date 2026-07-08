# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `tiempos` (duraciones en minutos), y dos valores umbrales: `excelente` y `regular`.
* **Proceso**: Cálculo del promedio de tiempos mediante la suma acumulada (`reduce`) dividida por la cantidad de elementos, seguido de una categorización condicional basada en los umbrales definidos.
* **Salida**: Un objeto que muestra el `promedio` formateado, la `clasificacion` asignada y un mensaje de `explicacion`.

## Reglas identificadas

1. Si el arreglo de tiempos está vacío, se debe retornar un mensaje de error o aviso.
2. El rendimiento se clasifica como "Eficiencia Alta" si el promedio es menor o igual al umbral `excelente`.
3. El rendimiento se clasifica como "Eficiencia Media" si el promedio es mayor al umbral `excelente` pero menor o igual al `regular`; de lo contrario, es "Bajo Rendimiento".

## Pruebas

### Caso normal

* **Entrada**: `tiempos: [45, 55, 60], excelente: 50, regular: 70`
* **Resultado esperado**: `{ promedio: "53.33 min", clasificacion: "Eficiencia Media", explicacion: "El promedio de 3 artistas se categoriza según los umbrales definidos." }`

### Caso borde

* **Entrada**: `tiempos: [120, 150], excelente: 50, regular: 70`
* **Resultado esperado**: `{ promedio: "135.00 min", clasificacion: "Bajo Rendimiento", explicacion: "El promedio de 2 artistas se categoriza según los umbrales definidos." }`

## Explicacion final

La solución funciona mediante el procesamiento secuencial de datos numéricos. Primero, garantiza la integridad de los datos validando que el arreglo no esté vacío. Luego, utiliza el método `reduce` para calcular una suma total precisa, lo que permite obtener un promedio matemático exacto. La estructura de control `if-else` jerarquiza el resultado obtenido frente a los parámetros configurables, asegurando una categorización lógica y coherente del desempeño artístico.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `[45, 55, 60]` (Cálculo manual)**:
* Suma: $45 + 55 + 60 = 160$.
* Promedio: $160 / 3 \approx 53.33$.
* Comparación: $53.33 > 50$ (excelente) pero $53.33 \le 70$ (regular).
* Resultado: `Eficiencia Media`.