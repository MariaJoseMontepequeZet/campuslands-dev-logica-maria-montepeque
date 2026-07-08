# Resolucion - Logica general 021

## Como pensé el problema
A diferencia del ejercicio 001, aqui no basta con revisar un solo estado critico. Definí varias condiciones booleanas (hayBloqueado, mayoriaBloqueada, prioridadAlta, todosIguales) y las combiné con AND para cubrir casos especiales como "mayoria bloqueada con prioridad alta" o "lote entero homogeneo".

## Reglas aplicadas
- mayoriaBloqueada AND prioridadAlta -> "critico global", detener y escalar.
- hayBloqueado AND prioridadAlta (sin mayoria) -> "riesgo puntual alto".
- hayBloqueado sin prioridad alta -> "riesgo puntual".
- todosIguales y estado "aprobado" -> "lote limpio", sin accion.
- todosIguales y estado "pendiente" -> "lote en espera", monitorear.
- mezcla sin bloqueados y sin ser todos iguales -> "mixto sin riesgo".
- items vacio -> sin datos.

## Casos probados
1. Caso normal: 1 bloqueado de 3 + prioridad alta -> riesgo puntual alto.
2. Caso borde: items vacio -> sin datos.
3. Caso borde: 2 de 3 bloqueados (mayoria) + prioridad alta -> critico global.
4. Caso especial: todos pendientes, sin bloqueados -> lote en espera.