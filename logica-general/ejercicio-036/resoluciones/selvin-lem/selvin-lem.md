# Resolucion - Logica general 036

## Como pensé el problema
A diferencia del ejercicio 016, aqui no basta con recorrer la matriz fila por fila. Agregue una funcion que recorre por columna para detectar bloqueos sistemicos (una columna bloqueada en todas las filas), y combine ese hallazgo con la prioridad para escalar la accion de las filas afectadas. Tambien agregue una instruccion de la regla que puede omitir filas cortas del procesamiento.

## Reglas aplicadas
- se cuenta cada fila por estado, igual que en la version basica.
- una columna es critica si tiene "bloqueado" en todas las filas de la matriz.
- fila con bloqueado en una columna critica + prioridad alta -> accion "detener animacion".
- fila con bloqueado sin columna critica o sin prioridad alta -> accion "revisar fila" normal.
- regla contiene "ignorar filas cortas" -> las filas con menos de 2 elementos se omiten del resultado.
- matriz vacia -> resultadoPorFila vacio.


## Casos probados
1. Caso normal: columna 0 bloqueada en ambas filas, prioridad alta -> ambas filas "detener animacion".
2. Caso borde: matriz vacia -> resultadoPorFila vacio.
3. Caso especial: fila con 1 solo elemento y regla "ignorar filas cortas" -> esa fila no aparece en el resultado.