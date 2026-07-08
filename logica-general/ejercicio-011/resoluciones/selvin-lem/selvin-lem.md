# Resolucion - Logica general 011

## Como pensé el problema
El objetivo es organizar la lista en grupos, no ordenarla ni filtrarla. Usé un ciclo para recorrer los items uno por uno y cuatro acumuladores (uno por categoria) para ir clasificando cada item en su grupo correspondiente.

## Reglas aplicadas
- cada item se acumula en el grupo bloqueado, pendiente o aprobado segun su valor.
- item que no coincide con ningun grupo conocido -> se acumula en "desconocido".
- se genera un resumen con el conteo de items por grupo.
- items vacio -> grupos y resumen vacios.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: un item de cada estado -> cada grupo con 1 item.
2. Caso borde: items vacio -> grupos y resumen vacios.
3. Caso borde: item desconocido y bloqueados repetidos -> grupo desconocido con 1 item, grupo bloqueado con 2 items.