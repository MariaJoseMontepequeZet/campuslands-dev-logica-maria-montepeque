# Resolucion - Logica general 017

## Como pensé el problema
El objetivo es usar una tabla de decision, no condicionales encadenados sueltos. Armé una estructura de datos (arreglo de filas con estado, prioridad y accion) y la logica se reduce a buscar en esa tabla la fila que coincide con el estado critico y la prioridad recibidos.

## Reglas aplicadas
- se identifica el estado mas critico presente en items (bloqueado > pendiente > aprobado).
- si el estado critico es aprobado -> sin accion (no hay riesgo).
- se busca en la tabla de decision la fila que combine ese estado y la prioridad recibida.
- si la fila existe -> se retorna su accion.
- si no existe combinacion en la tabla -> "prioridad no reconocida".
- items vacio -> sin datos.


## Casos probados
1. Caso normal: bloqueado + prioridad alta -> coincide con la tabla -> accion inmediata.
2. Caso borde: items vacio -> sin datos.
3. Caso borde: pendiente + prioridad "urgente" (no existe en la tabla) -> prioridad no reconocida.