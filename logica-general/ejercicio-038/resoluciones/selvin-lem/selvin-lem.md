# Resolucion - Logica general 038

## Como pensé el problema
A diferencia del ejercicio 018, aqui la rotacion no es ciega. Agregue un limite de saturacion por turno: si un turno acumula demasiados bloqueados, el siguiente bloqueado se reasigna al turno con menos carga en vez de seguir el orden rotativo normal. Tambien agregue una instruccion de la regla que puede fijar todos los bloqueados en un turno especifico.

## Reglas aplicadas
- los items se asignan a turnos en orden rotativo: mañana, tarde, noche, mañana...
- un turno con 2 o mas bloqueados acumulados se considera saturado.
- si el turno que le toca a un bloqueado esta saturado, se reasigna al turno con menos bloqueados hasta ese momento, y se registra como rebalanceo.
- regla con "fijar en [turno]" -> todos los bloqueados se asignan directo a ese turno, ignorando rotacion y rebalanceo.
- turnoActual es el turno con mas bloqueados al finalizar.
- items vacio -> asignaciones y rebalanceos vacios.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado sin saturacion -> turnoActual "noche".
2. Caso borde: items vacio -> asignaciones vacio, turnoActual null.
3. Caso especial: 3 bloqueados que caerian todos en "mañana" -> el tercero se rebalancea a otro turno.
4. Caso especial: regla "fijar en tarde" con 2 bloqueados -> ambos se asignan directo a tarde.