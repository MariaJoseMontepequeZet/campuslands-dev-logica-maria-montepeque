# Resolucion - Logica general 013

## Como pensé el problema
El objetivo es resolver un caso completo combinando conteo y condicionales, no solo comparar categorias. Conté cada estado con un ciclo y un acumulador, y con esos totales mas la prioridad definí un veredicto final en orden de gravedad.

## Reglas aplicadas
- bloqueado presente + prioridad alta -> caso critico.
- bloqueado presente + prioridad no alta -> caso en revision.
- sin bloqueados pero con pendientes -> caso pendiente.
- solo aprobados -> caso cerrado.
- sin items validos -> caso sin datos.

## Casos probados
1. Caso normal: bloqueado presente + prioridad alta -> caso critico.
2. Caso borde: items vacio -> caso sin datos.
3. Caso borde: solo aprobados -> caso cerrado.