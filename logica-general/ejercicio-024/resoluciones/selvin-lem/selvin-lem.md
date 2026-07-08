# Resolucion - Logica general 024

## Como pensé el problema
A diferencia del ejercicio 004, aqui el filtro no depende solo de la prioridad. Combine el criterio base por prioridad con dos casos especiales: lotes pequeños que fuerzan revision de bloqueados, y una instruccion explicita en la regla para excluir aprobados.

## Reglas aplicadas
- prioridad alta -> filtra bloqueado y pendiente.
- prioridad media -> filtra solo bloqueado.
- prioridad baja -> no filtra, salvo el caso especial de lote pequeño.
- lote de 2 items o menos con prioridad baja -> se fuerza el filtro de bloqueado igual.
- regla que contiene "excluir" y "aprobado" -> saca los aprobados del resultado sin importar el criterio base.
- todos los items bloqueados -> no se filtra nada, se devuelven todos.
- items vacio -> filtrados y excluidos vacios.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: prioridad alta con items mixtos -> filtrados pendiente y bloqueado, excluido aprobado.
2. Caso borde: items vacio -> filtrados y excluidos vacios.
3. Caso especial: lote de 2 items con prioridad baja y regla "excluir aprobados" -> se filtra bloqueado y se excluye aprobado por la regla.
4. Caso especial: todos bloqueados -> se devuelven todos, sin exclusiones.