# Plantilla de solución

## Analisis

* **Entrada**: `frames` (cantidad de fotogramas), `costoFrame` (valor unitario por frame) y `descVolumen` (porcentaje de descuento expresado en decimal).
* **Proceso**: Cálculo del costo base ($frames \times costoFrame$) y aplicación de un descuento condicional si la cantidad de frames supera los 500, finalizando con la resta del ahorro al total base.
* **Salida**: Un objeto que muestra el `presupuesto_total` final, el `ahorro_aplicado` y una `explicacion` sobre la aplicación del descuento.

## Reglas identificadas

1. El costo base es el resultado de multiplicar el total de frames por el costo individual de cada frame.
2. Si el proyecto contiene más de 500 frames, se aplica un descuento basado en el porcentaje de volumen proporcionado.
3. El resultado final debe mostrarse formateado a dos decimales y el mensaje de explicación debe ser dinámico según la aplicación del descuento.

## Pruebas

### Caso normal

* **Entrada**: `frames: 600, costoFrame: 10, descVolumen: 0.1`
* **Resultado esperado**: `{ presupuesto_total: "$5400.00", ahorro_aplicado: "$600.00", explicacion: "Se aplicó un 10% de descuento por volumen." }`

### Caso borde

* **Entrada**: `frames: 200, costoFrame: 10, descVolumen: 0.1`
* **Resultado esperado**: `{ presupuesto_total: "$2000.00", ahorro_aplicado: "$0.00", explicacion: "No aplica descuento por volumen (mínimo 500 frames)." }`

## Explicacion final

La solución funciona mediante una estructura de control simple (`if`) que actúa como un filtro para determinar si el cliente califica para una reducción de precio. Al centralizar el cálculo del costo base antes de cualquier ajuste, garantizamos que el descuento se aplique únicamente sobre el monto correcto. La combinación del operador ternario para la explicación y el método `toFixed(2)` permite que la salida sea tanto informativa como profesional para el usuario final.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `600 frames` (Cálculo manual)**:
* Costo Base: $600 \times 10 = 6000$.
* Ahorro: $6000 \times 0.1 = 600$.
* Costo Final: $6000 - 600 = 5400$.
* Resultado: `$5400.00` (Descuento aplicado).