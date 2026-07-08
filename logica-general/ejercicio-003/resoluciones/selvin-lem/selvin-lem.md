# Resolucion - Logica general 003

## Como pensé el problema
El objetivo es tomar una decision, no solo clasificar. Combiné dos entradas: el estado mas critico de los items y la prioridad, para definir cuatro niveles de decision distintos mas el caso sin riesgo.

## Reglas aplicadas
- bloqueado + prioridad alta -> accion inmediata.
- bloqueado + prioridad media/baja -> revisar bloqueado.
- pendiente + prioridad alta -> revisar pendiente.
- pendiente + prioridad media/baja -> monitorear pendiente.
- aprobado (sin riesgo) -> sin accion.
- items vacio -> sin datos.

## Casos probados
1. Caso normal: bloqueado + alta -> accion inmediata.
2. Caso borde: items vacio -> sin datos.
3. Caso borde: pendiente + baja -> monitorear pendiente. 