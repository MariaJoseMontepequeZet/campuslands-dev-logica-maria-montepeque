# Plantilla de solucion

## Analisis
El problema se diseñó para calcular la probabilidad básica de que un jugador de pingpong gane un punto de servicio basándose en sus estadísticas previas de saques efectuados y saques ganados. Esto permite al cuerpo técnico cuantificar la efectividad matemática del servicio del jugador de manera ordenada y predecible antes de un enfrentamiento competitivo.

- Entrada: Cantidad de saques ganados (entero) y cantidad total de saques ejecutados (entero).
- Proceso: Validar que el total de saques ejecutados sea mayor que cero para evitar errores matemáticos. Dividir los saques ganados entre el total de saques ejecutados para obtener la probabilidad en formato decimal, y opcionalmente multiplicarla por cien para expresarla como porcentaje.
- Salida: Un número de tipo flotante que representa el porcentaje de probabilidad de éxito del saque.

## Reglas identificadas
1. Relación de Probabilidad Clásica: La probabilidad se calcula mediante la regla de Laplace (casos favorables dividido entre casos totales).
2. Control de Indeterminación: Si el jugador no ha realizado ningún saque (saques ejecutados igual a cero), el sistema detiene la operación y devuelve 0.0 de probabilidad.
3. Consistencia Numérica: El porcentaje de probabilidad final debe devolverse redondeado a dos cifras decimales para estandarizar los tableros analíticos del torneo.

## Pruebas

### Caso normal
Entrada: saquesGanados = 15, saquesEjecutados = 20
Resultado esperado: 75.0

### Caso borde
Entrada: saquesGanados = 0, saquesEjecutados = 0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque aplica la ley de Laplace para frecuencias relativas y bloquea fallos lógicos de división por cero ante la falta de historial de juego.# Plantilla de solucion

## Analisis
El problema se diseñó para calcular la probabilidad básica de que un jugador de pingpong gane un punto de servicio basándose en sus estadísticas previas de saques efectuados y saques ganados. Esto permite al cuerpo técnico cuantificar la efectividad matemática del servicio del jugador de manera ordenada y predecible antes de un enfrentamiento competitivo.

- Entrada: Cantidad de saques ganados (entero) y cantidad total de saques ejecutados (entero).
- Proceso: Validar que el total de saques ejecutados sea mayor que cero para evitar errores matemáticos. Dividir los saques ganados entre el total de saques ejecutados para obtener la probabilidad en formato decimal, y opcionalmente multiplicarla por cien para expresarla como porcentaje.
- Salida: Un número de tipo flotante que representa el porcentaje de probabilidad de éxito del saque.

## Reglas identificadas
1. Relación de Probabilidad Clásica: La probabilidad se calcula mediante la regla de Laplace (casos favorables dividido entre casos totales).
2. Control de Indeterminación: Si el jugador no ha realizado ningún saque (saques ejecutados igual a cero), el sistema detiene la operación y devuelve 0.0 de probabilidad.
3. Consistencia Numérica: El porcentaje de probabilidad final debe devolverse redondeado a dos cifras decimales para estandarizar los tableros analíticos del torneo.

## Pruebas

### Caso normal
Entrada: saquesGanados = 15, saquesEjecutados = 20
Resultado esperado: 75.0

### Caso borde
Entrada: saquesGanados = 0, saquesEjecutados = 0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque aplica la ley de Laplace para frecuencias relativas y bloquea fallos lógicos de división por cero ante la falta de historial de juego.