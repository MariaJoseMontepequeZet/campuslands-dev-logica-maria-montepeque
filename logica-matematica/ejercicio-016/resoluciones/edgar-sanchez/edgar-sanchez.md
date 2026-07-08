# Plantilla de solucion

## Analisis
El problema se estructuró para calcular el presupuesto final de un proyecto de animación 3D, aplicando un descuento escalonado basado en la cantidad de segundos de renderizado contratados. Esta lógica permite a los estudios de animación automatizar las cotizaciones para los clientes de forma comercialmente atractiva y transparente, ofreciendo tarifas competitivas a mayor volumen de producción.

- Entrada: El costo base por segundo de animación (flotante) y la cantidad total de segundos a animar (entero).
- Proceso: Multiplicar la cantidad de segundos por el costo base para obtener el presupuesto bruto. Evaluar la cantidad de segundos para determinar el porcentaje de descuento correspondiente. Calcular el valor del descuento y restarlo del presupuesto bruto.
- Salida: Un número de tipo flotante que representa el costo neto final del proyecto de animación.

## Reglas identificadas
1. Descuento por Volumen de Segundos: Si el proyecto tiene más de 60 segundos de animación se aplica un 15% de descuento sobre el costo base; de lo contrario, no se aplica ningún descuento (0%).
2. Restricción de Valores Negativos: Si el costo base o los segundos de animación son menores o iguales a cero, el presupuesto total es automáticamente de 0.0 para evitar saldos inválidos.
3. Precisión de Facturación: El presupuesto neto final devuelto debe estar redondeado estrictamente a dos cifras decimales para la correcta emisión de comprobantes financieros.

## Pruebas

### Caso normal
Entrada: costoPorSegundo = 50.00, segundosTotales = 80
Resultado esperado: 3400.0

### Caso borde
Entrada: costoPorSegundo = 50.00, segundosTotales = 0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque determina linealmente el costo bruto de la animación y aplica de forma condicional las tasas de descuento por volumen establecidas.