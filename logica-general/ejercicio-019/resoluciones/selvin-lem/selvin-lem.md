# Resolucion - Logica general 019

## Como pensé el problema
El objetivo es manejar un inventario con entradas y transferencias, no solo contar o agrupar. Definí que "bloqueado" no es una entrada independiente sino una transferencia desde "pendiente", y que esa transferencia puede fallar si no hay stock disponible.

## Reglas aplicadas
- aprobado -> entrada directa al stock de aprobado.
- pendiente -> entrada directa al stock de pendiente.
- bloqueado -> transferencia: resta 1 de pendiente y suma 1 a bloqueado, solo si hay pendiente disponible.
- bloqueado sin pendiente disponible -> movimiento invalido, el stock no cambia.
- estado no reconocido -> movimiento invalido.
- items vacio -> stock en cero, sin movimientos.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado -> pendiente entra y luego se transfiere a bloqueado, stock final { aprobado: 1, pendiente: 0, bloqueado: 1 }.
2. Caso borde: items vacio -> stock en cero, sin movimientos.
3. Caso borde: dos bloqueados sin pendiente previo -> ambos movimientos quedan invalidos, stock permanece en cero.