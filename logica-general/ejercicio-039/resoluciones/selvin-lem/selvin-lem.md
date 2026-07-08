# Resolucion - Logica general 039

## Como pensé el problema
A diferencia del ejercicio 019, aqui el stock no crece sin limite. Agregue una capacidad maxima por estado, y cuando el stock de bloqueado se satura con prioridad alta, se activa una reversa de emergencia que libera espacio automaticamente en vez de simplemente rechazar el movimiento.

## Reglas aplicadas
- aprobado y pendiente -> entrada directa, rechazada si el estado ya esta en su capacidad maxima (3).
- bloqueado -> transferencia desde pendiente, rechazada si no hay pendiente disponible o si bloqueado ya esta al maximo.
- bloqueado al maximo + prioridad alta -> reversa de emergencia: se libera 1 bloqueado a pendiente antes de intentar la transferencia, y se registra como alerta.
- regla con "reiniciar stock" -> se documenta en el motivo que el stock parte en cero (comportamiento estandar, con bandera informativa).
- estado no reconocido -> movimiento invalido.
- items vacio -> stock en cero, sin movimientos.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado sin saturacion -> stock final { aprobado: 1, pendiente: 0, bloqueado: 1 }.
2. Caso borde: items vacio -> stock en cero, sin movimientos.
3. Caso especial: 4 pendientes y 4 bloqueados con prioridad alta -> el 4to pendiente se rechaza por capacidad, y al saturarse bloqueado se activa una reversa de emergencia.