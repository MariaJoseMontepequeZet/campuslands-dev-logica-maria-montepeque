# Resolucion - Logica general 015

## Como pensé el problema
El objetivo es aplicar una regla de negocio con costos, no clasificar ni diagnosticar. Definí una tarifa base por estado, un recargo condicional por prioridad, y un limite de presupuesto que decide la accion final.

## Reglas aplicadas
- bloqueado -> tarifa base 50.
- pendiente -> tarifa base 20.
- aprobado -> tarifa base 0.
- prioridad alta -> recargo del 20% sobre el total acumulado.
- totalCosto mayor a 100 -> accion "requiere aprobacion de presupuesto".
- totalCosto de 100 o menos -> accion "dentro de presupuesto normal".
- items vacio -> sin datos, sin costo.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: aprobado+pendiente+bloqueado con prioridad alta -> totalCosto 84, dentro de presupuesto normal.
2. Caso borde: items vacio -> sin datos.
3. Caso borde: dos bloqueados + pendiente con prioridad alta -> totalCosto 144, requiere aprobacion de presupuesto.