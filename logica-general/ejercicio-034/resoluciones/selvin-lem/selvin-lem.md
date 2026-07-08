# Resolucion - Logica general 034

## Como pensé el problema
A diferencia del ejercicio 014, aqui la causa raiz no depende solo de contar cuantos errores de estado hay. Agregue un tercer detector (patron alternado sospechoso) y combine los tres resultados para calcular una severidad segun cuantos tipos de error ocurren simultaneamente, ademas de permitir que la regla desactive uno de los detectores explicitamente.

## Reglas aplicadas
- item con estado fuera de aprobado/pendiente/bloqueado -> error de estado invalido.
- prioridad fuera de alta/media/baja -> error de prioridad invalida.
- items alterna estrictamente entre solo dos estados sin repetir consecutivos (4+ items) -> patron sospechoso, se reporta como error salvo que la regla diga "ignorar patron".
- error de estado Y error de prioridad a la vez -> severidad alta, causa raiz "doble falla simultanea".
- solo un tipo de error (estado, prioridad o patron) -> severidad media.
- sin errores -> severidad ninguna.
- items vacio -> severidad alta directa.

## Casos probados
1. Caso normal: items y prioridad validos, sin patron sospechoso -> sin errores, severidad ninguna.
2. Caso borde: items vacio -> severidad alta, causa raiz datos de entrada corruptos.
3. Caso especial: patron alternado bloqueado-pendiente-bloqueado-pendiente -> severidad media, causa raiz "patron de datos sospechoso".
4. Caso especial: mismo patron pero regla "ignorar patron detectado" -> el patron no se reporta, sin errores.