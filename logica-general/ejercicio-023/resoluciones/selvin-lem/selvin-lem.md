# Resolucion - Logica general 023

## Como pensé el problema
A diferencia del ejercicio 003, aqui la decision no depende de un solo estado critico mas la prioridad. Conte los tres estados con un ciclo y cruce esos totales para detectar casos especiales: empate entre bloqueados y pendientes, saturacion del lote, y una instruccion explicita de "escalar" dentro del texto de la regla.

## Reglas aplicadas
- empate entre bloqueados y pendientes (ambos > 0) + prioridad alta -> revision doble urgente.
- riesgo total (bloqueados + pendientes) mayor o igual a aprobados + prioridad alta -> escalamiento total.
- riesgo total saturado sin prioridad alta -> revision extendida.
- regla contiene "escalar" y hay al menos un bloqueado (sin las combinaciones anteriores) -> escalamiento manual.
- bloqueado presente sin combinaciones especiales -> riesgo controlado.
- solo pendientes -> en espera.
- solo aprobados -> sin riesgo.
- items vacio -> sin datos.

## Casos probados
1. Caso normal: 1 bloqueado y 1 pendiente en empate + prioridad alta -> revision doble urgente.
2. Caso borde: items vacio -> sin datos.
3. Caso especial: 2 bloqueados + 1 pendiente contra 1 aprobado (lote saturado) + prioridad media -> revision extendida.