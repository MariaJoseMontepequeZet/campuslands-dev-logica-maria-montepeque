# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `criticas` (números), un `bono` (número) y una `penalizacion` (número).
* **Proceso**: Cálculo del promedio aritmético de las críticas, suma del bono y resta de la penalización al resultado, seguido de una clasificación basada en rangos de puntaje.
* **Salida**: Un objeto que contiene el `puntaje_final`, una `clasificacion` textual y una `explicacion` desglosada del cálculo.

## Reglas identificadas

1. Si no hay críticas registradas, el sistema retorna un mensaje de error.
2. La clasificación depende del puntaje final: $\ge 8$ ("Obra maestra"), $\ge 5$ ("Buena producción"), de lo contrario ("Cine de culto (o fracaso)").
3. El resultado final se presenta formateado a dos decimales de precisión.

## Pruebas

### Caso normal

* **Entrada**: `criticas: [7, 8, 9], bono: 2, penalizacion: 1`
* **Resultado esperado**: `{ puntaje_final: "9.00", clasificacion: "Obra maestra", explicacion: "Promedio base de 8.00 más bono de 2 menos penalización de 1." }`

### Caso borde

* **Entrada**: `criticas: [4, 5], bono: 0, penalizacion: 2`
* **Resultado esperado**: `{ puntaje_final: "2.50", clasificacion: "Cine de culto (o fracaso)", explicacion: "Promedio base de 4.50 más bono de 0 menos penalización de 2." }`

## Explicacion final

La solución funciona mediante una secuencia lógica que primero condensa los datos de entrada en un único promedio base, permitiendo luego aplicar ajustes de calidad de forma sencilla. La estructura de control condicional asegura una categorización precisa, mientras que la generación de una cadena de texto dinámica proporciona al usuario final una trazabilidad clara de cómo se alcanzó la calificación final.

## Sugerencia

Verifica cada operación con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual** (`[4, 5], bono: 0, penalizacion: 2`):
* Promedio base: $(4 + 5) / 2 = 4.50$.
* Ajuste: $4.50 + 0 - 2 = 2.50$.
* Clasificación: $2.50 < 5$, por lo tanto es "Cine de culto (o fracaso)".