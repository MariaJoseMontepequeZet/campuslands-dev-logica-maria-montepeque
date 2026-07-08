# Resolucion - Logica general 040

## Como pensé el problema
A diferencia del ejercicio 020, aqui el empate en la estrategia "mas_frecuente" ya no se resuelve automaticamente por riesgo. Agregue una tercera estrategia de desempate ("mas_reciente") y una condicion previa que puede excluir un estado completo del analisis segun lo que pida la regla.

## Reglas aplicadas
- regla con "excluir [estado]" -> ese estado se elimina de la lista antes de aplicar cualquier estrategia.
- prioridad alta -> se intenta primero la estrategia "primero_critico" (primer bloqueado, luego primer pendiente).
- si "primero_critico" no aplica o la prioridad no es alta -> se usa "mas_frecuente" (conteo por estado).
- si "mas_frecuente" produce empate entre 2 o mas estados -> se usa "mas_reciente": el ultimo item de esos estados empatados en aparecer en la lista.
- si todos los items fueron excluidos por la regla -> sin seleccion posible.
- items vacio -> sin estrategia aplicada.

## Casos probados
1. Caso normal: prioridad alta con bloqueado presente -> primero_critico, seleccionado bloqueado.
2. Caso borde: items vacio -> sin estrategia aplicada.
3. Caso especial: empate 2-2 entre aprobado y pendiente -> desempate por mas_reciente, selecciona pendiente.
4. Caso especial: regla "excluir bloqueado del analisis" con prioridad alta -> bloqueado se excluye, cae a mas_frecuente.