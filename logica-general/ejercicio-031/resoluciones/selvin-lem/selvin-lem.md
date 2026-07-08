# Resolucion - Logica general 031

## Como pensé el problema
A diferencia del ejercicio 011, aqui no basta con agrupar. Ademas de organizar los items en categorias, cruce esa informacion para detectar casos especiales: concentracion desbalanceada en un grupo, prioridad alta sin bloqueados, y una instruccion de la regla que cambia como se agrupan los items desconocidos.

## Reglas aplicadas
- cada item se agrupa en bloqueado, pendiente, aprobado o desconocido segun su valor.
- regla contiene "compactar" -> el grupo desconocido se fusiona dentro de pendiente.
- un grupo (sin contar desconocido) que supera el 60% del total -> alerta de desbalance.
- prioridad alta con el grupo bloqueado vacio -> alerta de inconsistencia.
- items vacio -> grupos y alertas vacios.


## Casos probados
1. Caso normal: un item de cada estado -> grupos balanceados, sin alertas.
2. Caso borde: items vacio -> grupos y alertas vacios.
3. Caso especial: 3 aprobados y 1 pendiente con prioridad alta y regla "compactar reporte" -> alerta de desbalance y alerta de prioridad sin bloqueados.