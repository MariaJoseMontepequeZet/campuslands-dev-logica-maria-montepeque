# Resolucion - Logica general 014

## Como pensé el problema
El objetivo es diagnosticar, no solo listar inconsistencias como en el ejercicio 007. Ademas de detectar errores individuales, use la frecuencia de esos errores para determinar una causa raiz general del problema.

## Reglas aplicadas
- item con estado fuera de aprobado/pendiente/bloqueado -> error de estado invalido.
- prioridad fuera de alta/media/baja -> error de prioridad invalida.
- errores de estado invalido en la mitad o mas de los items -> causa raiz "datos de entrada corruptos".
- solo prioridad invalida, sin errores de estado -> causa raiz "configuracion de prioridad incorrecta".
- pocos errores de estado sin superar la mitad -> causa raiz "errores puntuales de estado".
- sin errores -> causa raiz "ninguna".
- items vacio -> causa raiz "datos de entrada corruptos" directo.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: items y prioridad validos -> sin errores, causa raiz "ninguna".
2. Caso borde: items vacio -> causa raiz "datos de entrada corruptos".
3. Caso borde: mayoria de items invalidos y prioridad invalida -> causa raiz "datos de entrada corruptos".