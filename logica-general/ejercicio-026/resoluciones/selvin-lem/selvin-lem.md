# Resolucion - Logica general 026

## Como pensé el problema
A diferencia del ejercicio 006, aqui la busqueda no siempre depende del criterio fijo por prioridad. Separe la logica en funciones pequeñas y reutilizables sobre arreglos: una extrae el estado mencionado en la regla, otra decide el criterio final (regla por encima de prioridad), y otra recorre el arreglo devolviendo todos los indices que coinciden, no solo el primero.

## Reglas aplicadas
- prioridad alta -> criterio de busqueda "bloqueado"; media -> "pendiente"; baja -> "aprobado".
- regla que contiene "buscar" seguido de un estado valido -> sobreescribe el criterio de la prioridad.
- se devuelven todos los indices que coinciden con el criterio, no solo el primero.
- ningun item coincide con el criterio -> encontrados vacio, primero -1.
- prioridad no reconocida y regla sin estado valido -> sin criterio, sin busqueda posible.
- items vacio -> encontrados vacio.


## Casos probados
1. Caso normal: prioridad alta busca bloqueado -> encontrado en indice 2.
2. Caso borde: items vacio -> encontrados vacio.
3. Caso especial: regla "buscar bloqueado en el lote" con prioridad media -> la regla sobreescribe el criterio y encuentra 2 coincidencias.