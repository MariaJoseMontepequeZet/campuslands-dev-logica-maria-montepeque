# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de objetos (`inventario`), donde cada objeto contiene `modelo` (string) y `kilometraje` (number).
* **Proceso**: Cálculo del kilometraje máximo mediante `Math.max`, obtención de la moto correspondiente con `find`, cálculo del promedio de kilometraje de toda la flota mediante `reduce`, y evaluación del estado global comparando el promedio con un umbral de 8,000 km.
* **Salida**: Un objeto que contiene la moto más usada, el promedio de kilometraje formateado a dos decimales y el estado del inventario.

## Reglas identificadas

1. Si el *array* de inventario está vacío, el sistema retorna "Inventario vacío".
2. La flota se clasifica como "Alerta de Mantenimiento Masivo" si el promedio de kilometraje es estrictamente mayor a 8,000 km; de lo contrario, se marca como "Inventario Estable".
3. El promedio debe calcularse sumando todos los kilometrajes y dividiendo entre el número total de unidades en la flota.

## Pruebas

### Caso normal

* **Entrada**: `[{ modelo: "Yamaha MT-07", kilometraje: 12000 }, { modelo: "Honda CB500", kilometraje: 4000 }]`
* **Resultado esperado**: `{ moto_mas_usada: "Yamaha MT-07", promedio_km: "8000.00", estado_inventario: "Inventario Estable" }`

### Caso borde

* **Entrada**: `[]`
* **Resultado esperado**: `"Inventario vacío"`

## Explicacion final

La solución funciona mediante una combinación de **métodos de transformación y agregación**. Al aislar primero los valores numéricos (`map`), podemos aplicar cálculos estadísticos como `Math.max` y `reduce` de forma directa y legible. La comparación final del promedio contra un umbral predefinido permite automatizar la detección de necesidades de mantenimiento, proporcionando un reporte estructurado que facilita la toma de decisiones sobre la flota.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso normal (Cálculo manual)**:
* Suma de kilómetros: $12,000 + 4,000 = 16,000$
* Promedio: $16,000 / 2 = 8,000$
* Estado: $8,000 > 8,000$ es falso (**Inventario Estable**).