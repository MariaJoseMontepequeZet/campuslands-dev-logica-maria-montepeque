# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `formula` (objetos con `elemento`, `masaAtomica` y `cantidad`) y un número `masaReportada`.
* **Proceso**: Cálculo de la masa molar total mediante la suma del producto de masas atómicas por sus cantidades, seguido de una comparación de diferencia absoluta contra un umbral de tolerancia.
* **Salida**: Objeto que incluye el `estado` de validación, la `masaCalculada` o `diferencia`, y un `motivo` aclaratorio.

## Reglas identificadas

1. La masa molar calculada se obtiene sumando el producto de `masaAtomica` y `cantidad` de cada elemento.
2. Si la diferencia absoluta entre la masa calculada y la reportada es mayor a 0.1, el resultado se marca como "Inválido".
3. Se requiere que el reporte de masa sea preciso, reportando valores con una precisión de dos decimales.

## Pruebas

### Caso normal

* **Entrada**: `formula: agua, masaReportada: 18.015`
* **Resultado esperado**: `{ estado: "Válido", masaCalculada: "18.02", motivo: "La masa molar reportada es correcta." }`

### Caso borde

* **Entrada**: `formula: agua, masaReportada: 20.000`
* **Resultado esperado**: `{ estado: "Inválido", diferencia: "1.98", motivo: "Error de cálculo detectado." }`

## Explicacion final

La solución funciona al consolidar la masa atómica de todos los elementos presentes en la fórmula mediante una función de reducción, lo que permite comparar el valor teórico frente al experimental. La implementación de un umbral de tolerancia del 0.1 asegura que pequeñas variaciones por redondeo estándar no invaliden reportes correctos.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`1.008 * 2 + 15.999 * 1 = 18.015`).