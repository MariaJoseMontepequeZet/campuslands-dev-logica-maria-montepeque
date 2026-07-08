# Resolucion - Logica general 035

## Como pensé el problema
A diferencia del ejercicio 015, aqui no hay un solo recargo aplicado sobre el subtotal original. Definí una secuencia de ajustes que se aplican en orden (descuento por volumen primero, recargo por prioridad despues, tope maximo al final), y cada ajuste se calcula sobre el resultado del ajuste anterior, no sobre el subtotal inicial.

## Reglas aplicadas
- tarifa base: bloqueado 50, pendiente 20, aprobado 0.
- 5 o mas items -> descuento del 10% por volumen, aplicado primero.
- prioridad alta -> recargo del 20%, aplicado sobre el total ya con descuento (no sobre el subtotal original).
- regla contiene "tope maximo" -> el total final nunca puede superar 150, se recorta al final sin importar los calculos previos.
- totalCosto mayor a 100 -> accion "requiere aprobacion de presupuesto"; si no, "dentro de presupuesto normal".
- items vacio -> sin datos, sin costo.


## Casos probados
1. Caso normal: aprobado+pendiente+bloqueado con prioridad alta (3 items, sin volumen alto) -> totalCosto 84.
2. Caso borde: items vacio -> sin datos.
3. Caso especial: 5 items con prioridad alta y regla "tope maximo" -> subtotal 190, descuento por volumen a 171, recargo alta a 205.2, recortado por tope a 150.