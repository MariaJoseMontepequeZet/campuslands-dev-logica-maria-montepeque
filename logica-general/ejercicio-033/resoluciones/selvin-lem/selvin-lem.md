# Resolucion - Logica general 033

## Como pensé el problema
A diferencia del ejercicio 013, aqui el veredicto no depende solo de si hay bloqueados o pendientes. Calcule una proporcion de riesgo sobre el total del lote y agregue dos casos especiales: la cantidad de bloqueados por si sola puede escalar el caso, y una instruccion explicita de cierre en la regla puede sobreescribir la presencia de pendientes.

## Reglas aplicadas
- 2 o mas bloqueados -> caso critico directo, sin importar la prioridad.
- proporcion de riesgo (bloqueados + pendientes) del 50% o mas + prioridad alta -> caso critico.
- regla contiene "cerrar caso" y no hay bloqueados -> caso cerrado, aunque existan pendientes.
- bloqueado presente sin cumplir condiciones de escalamiento -> caso en revision.
- sin bloqueados pero con pendientes -> caso pendiente.
- solo aprobados -> caso cerrado.
- sin items validos -> caso sin datos.
- cada decision se acompaña de una lista de factores que explican el motivo.

## Casos probados
1. Caso normal: proporcion de riesgo 67% con prioridad alta -> caso critico.
2. Caso borde: items vacio -> caso sin datos.
3. Caso especial: 2 bloqueados con prioridad media -> caso critico por cantidad, no por proporcion.
4. Caso especial: regla "cerrar caso" sin bloqueados pero con un pendiente -> caso cerrado por instruccion explicita.