# Resolucion - Logica general 020

## Como pensé el problema
El objetivo es elegir entre estrategias de seleccion, no aplicar siempre la misma regla como en el ejercicio 006. Definí dos estrategias distintas y una condicion que decide cual de las dos se activa segun la prioridad recibida.

## Reglas aplicadas
- prioridad alta -> estrategia "primero_critico": selecciona el primer bloqueado, o si no hay, el primer pendiente.
- prioridad no alta -> estrategia "mas_frecuente": cuenta ocurrencias por estado y selecciona el mas repetido.
- empate en "mas_frecuente" -> gana el estado con mayor riesgo (bloqueado > pendiente > aprobado).
- ningun estado coincide con los conocidos -> seleccionado null.
- items vacio -> sin estrategia aplicada.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: prioridad alta con bloqueado presente -> estrategia primero_critico, seleccionado bloqueado.
2. Caso borde: items vacio -> sin estrategia aplicada.
3. Caso borde: prioridad media con dos aprobados y un pendiente -> estrategia mas_frecuente, seleccionado aprobado.