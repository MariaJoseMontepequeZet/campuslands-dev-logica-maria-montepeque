# Resolucion - Logica general 032

## Como pensé el problema
A diferencia del ejercicio 012, aqui el empate no siempre se resuelve automaticamente. Separe la deteccion de empate real (dos o mas categorias compartiendo el maximo) del desempate en si, y agregue una instruccion explicita en la regla que puede forzar un ganador sin importar los conteos.

## Reglas aplicadas
- se cuenta cada categoria (bloqueado, pendiente, aprobado) con un ciclo.
- regla contiene "forzar ganador" seguido de un estado -> ese estado gana directo, sobreescribe todo lo demas.
- empate real (2+ categorias con el mismo maximo) y prioridad alta -> se resuelve automaticamente por mayor riesgo, marcando empateDetectado true.
- empate real y prioridad no alta -> no se resuelve, ganador queda null, se reporta el empate.
- sin empate -> gana la categoria con mayor conteo, sin marcas especiales.
- items vacio -> sin comparacion posible.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: empate 1-1-1 con prioridad alta -> ganador bloqueado, empateDetectado true.
2. Caso borde: items vacio -> ganador null, sin empate.
3. Caso especial: empate 1-1 con prioridad media -> ganador null, empate sin resolver.
4. Caso especial: regla "forzar ganador bloqueado" -> gana bloqueado aunque no aparezca en items.