# Resolucion - Logica general 022

## Como pensé el problema
A diferencia del ejercicio 002, aqui no basta con validar cada campo aislado. Cruce informacion entre items, prioridad y regla para detectar casos especiales, y separe el resultado en errores (invalidan el dato) y advertencias (casos raros que no invalidan pero deben revisarse).

## Reglas aplicadas
- items debe ser arreglo no vacio con estados validos -> error si falla.
- prioridad debe ser alta/media/baja -> error si falla.
- regla debe ser texto no vacio -> error si falla.
- item repetido de forma consecutiva -> advertencia (posible error de captura).
- prioridad alta sin bloqueado ni pendiente presentes -> advertencia (inconsistencia logica).
- regla que no menciona ningun estado conocido -> advertencia (falta de contexto claro).
- valido se calcula solo con base en errores, no en advertencias.

## Casos probados
1. Caso normal: items validos, prioridad alta con riesgo real, regla con estado mencionado -> valido true, sin advertencias.
2. Caso borde: items vacio y regla vacia -> valido false, dos errores.
3. Caso especial: tres aprobados repetidos consecutivos, prioridad alta sin riesgo, regla sin estado mencionado -> valido true, tres advertencias.