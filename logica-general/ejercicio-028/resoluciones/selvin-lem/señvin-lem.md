# Resolucion - Logica general 028

## Como pensé el problema
A diferencia del ejercicio 008, aqui el flujo no es puramente lineal item por item. Cree funciones auxiliares para detectar grupos de pendientes consecutivos, y combine eso con dos reglas especiales sobre el comportamiento del bloqueado: una que depende de la prioridad y otra que depende del texto de la regla.

## Reglas aplicadas
- aprobado -> paso "avanzar".
- pendiente aislado -> paso "esperar".
- 2 o mas pendientes consecutivos -> se agrupan en un solo paso de "reintento agrupado", se registran en la lista de reintentos.
- bloqueado + prioridad alta -> detiene el flujo y descarta cualquier reintento pendiente registrado.
- bloqueado + regla "continuar pese a bloqueo" -> no detiene el flujo, solo lo marca y sigue.
- bloqueado sin ninguna de esas condiciones -> detiene el flujo normalmente.
- items vacio -> pasos y reintentos vacios.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado con prioridad alta -> avanza, espera, se detiene y descarta reintentos.
2. Caso borde: items vacio -> pasos vacio.
3. Caso especial: dos pendientes consecutivos + bloqueado con regla "continuar pese a bloqueo" -> reintento agrupado y el flujo continua tras el bloqueo.