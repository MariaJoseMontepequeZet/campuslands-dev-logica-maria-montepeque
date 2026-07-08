# Resolucion - Logica general 025

## Como pensé el problema
A diferencia del ejercicio 005, aqui el orden no depende de un solo peso fijo con desempate por posicion original. Combine el peso base con dos condiciones especiales: una instruccion en la regla que invierte toda la tabla de pesos, y un criterio secundario que invierte el orden interno de los bloqueados empatados cuando la prioridad es alta.

## Reglas aplicadas
- peso base: bloqueado 0, pendiente 1, aprobado 2 (menor peso va primero).
- regla contiene "aprobados primero" -> se invierte la tabla completa de pesos.
- empate entre dos bloqueados y prioridad alta -> se invierte su orden interno (el ultimo reportado va primero).
- empate en cualquier otro caso -> se conserva el orden original.
- items vacio -> ordenados vacio.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado con prioridad alta -> bloqueado, pendiente, aprobado.
2. Caso borde: items vacio -> ordenados vacio.
3. Caso especial: dos bloqueados empatados con prioridad alta -> se invierte su orden interno segun posicion original.
4. Caso especial: regla "aprobados primero en el reporte" -> se invierte la tabla de pesos completa.