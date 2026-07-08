# Resolucion - Logica general 018

## Como pensé el problema
El objetivo es distribuir items entre turnos de forma rotativa, no clasificar ni decidir una sola accion. Usé el operador modulo para repartir los items en orden ciclico entre tres turnos, y un acumulador por turno para contar la carga critica de cada uno.

## Reglas aplicadas
- los items se asignan a turnos en orden rotativo: mañana, tarde, noche, mañana...
- cada turno acumula cuantos items bloqueados le tocaron.
- el turno con mas bloqueados se marca como turnoActual (requiere mas atencion).
- si ningun turno tiene bloqueados, turnoActual queda null.
- items vacio -> asignaciones vacio, turnoActual null.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado -> bloqueado cae en turno noche, turnoActual "noche".
2. Caso borde: items vacio -> asignaciones vacio, turnoActual null.
3. Caso borde: dos bloqueados que caen en el mismo turno (mañana) -> turnoActual "mañana" con 2 bloqueados.