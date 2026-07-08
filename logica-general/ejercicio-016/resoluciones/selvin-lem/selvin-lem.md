# Resolucion - Logica general 016

## Como pensé el problema
El objetivo es trabajar con una matriz (estructura de dos dimensiones), no con una lista plana como en los ejercicios anteriores. Usé un ciclo anidado: uno recorre las filas y otro recorre las columnas de cada fila, acumulando conteos por fila y un total general.

## Reglas aplicadas
- fila con al menos 1 bloqueado -> accion "revisar fila".
- fila sin bloqueado pero con al menos 1 pendiente -> accion "monitorear fila".
- fila solo con aprobados -> accion "fila lista".
- fila vacia o sin estados validos -> accion "fila sin datos validos".
- totalGeneral acumula el conteo de bloqueado/pendiente/aprobado de toda la matriz.
- matriz vacia -> resultadoPorFila vacio.

## Casos probados
1. Caso normal: matriz con dos filas mixtas -> fila 0 "revisar fila", fila 1 "fila lista".
2. Caso borde: matriz vacia -> resultadoPorFila vacio.
3. Caso borde: fila vacia dentro de la matriz -> "fila sin datos validos" para esa fila.