# Resolucion - Logica general 029

## Como pensé el problema
A diferencia del ejercicio 009, aqui la transicion de un pendiente no depende solo de la prioridad. Agregue dos condiciones especiales que se evaluan antes de aplicar la regla base: una instruccion explicita en la regla que fuerza aprobacion directa, y un limite de saturacion (2 o mas bloqueados previos) que congela los pendientes restantes.

## Reglas aplicadas
- regla contiene "forzar aprobacion" -> todo pendiente transiciona directo a aprobado, ignorando la prioridad.
- sin esa instruccion, si ya hay 2 o mas bloqueados acumulados antes del item actual -> el pendiente se congela (no transiciona).
- sin ninguna de esas condiciones especiales -> se aplica la transicion base: pendiente + prioridad alta -> bloqueado; pendiente + prioridad no alta -> aprobado.
- bloqueado y aprobado son estados finales, nunca cambian.
- se registra en el historial cada transicion real ocurrida (item, estado de origen, estado nuevo).
- items vacio -> estadoFinal y historial vacios.

## Casos probados
1. Caso normal: pendiente con prioridad alta -> transiciona a bloqueado, queda en el historial.
2. Caso borde: items vacio -> sin transiciones.
3. Caso especial: dos bloqueados antes de un pendiente -> el pendiente se congela, no transiciona pese a la prioridad alta.
4. Caso especial: regla "forzar aprobacion de todos" -> todos los pendientes pasan a aprobado sin importar la prioridad.