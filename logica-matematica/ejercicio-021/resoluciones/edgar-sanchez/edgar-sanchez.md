# Plantilla de solucion

## Analisis
El problema se diseñó para calcular los Puntos de Liga (LP) finales de un jugador en un videojuego competitivo tras finalizar una partida, aplicando operaciones aritméticas controladas. En los sistemas de emparejamiento (Matchmaking), la cantidad de puntos ganados o perdidos no solo depende del resultado de la partida, sino también de condiciones especiales como las rachas de victorias o penalizaciones por inactividad (AFK), requiriendo un control estricto para que los puntajes no desciendan de los límites inferiores del sistema.

- Entrada: Puntos de Liga actuales del jugador (entero), resultado de la partida (booleano: `true` para victoria, `false` para derrota), multiplicador por racha activa (entero) y un indicador de penalización por abandono/AFK (booleano).
- Proceso: 
  1. Si es victoria: Calcular los puntos base ganados (por ejemplo, 20 LP) multiplicados por el factor de racha.
  2. Si es derrota: Restar los puntos base perdidos (por ejemplo, 15 LP). Si además se registra una penalización por AFK, aplicar una resta adicional fija (por ejemplo, 10 LP extra).
  3. Aplicar control de límites: Modificar el puntaje actual asegurando que el resultado nunca sea menor a 0 LP (límite inferior de la liga).
- Salida: Un número entero que representa el nuevo balance de Puntos de Liga (LP) del jugador.

## Reglas identificadas
1. Multiplicador de Racha Eficiente: El beneficio de la racha solo se aplica en caso de victoria ($Puntos = Base \times Multiplicador$). En caso de derrota, el multiplicador se ignora.
2. Penalización Acumulativa por Desconexión: Si el jugador pierde y tiene el indicador AFK en `true`, se le penaliza doblemente (pérdida por derrota + castigo disciplinario). Si gana pero tiene reporte AFK, la victoria se anula y los puntos ganados son 0.
3. Control de Suelo (Límite Cero): Los Puntos de Liga no pueden ser negativos. Si una racha de derrotas o penalizaciones reduce el puntaje por debajo de cero, el sistema debe truncar el resultado a exactamente 0 LP.

## Pruebas

### Caso victoria con racha
Entrada: lpActuales = 45, esVictoria = true, multiplicadorRacha = 2, penalizacionAFK = false
Resultado esperado: 85  *(45 + (20 * 2))*

### Caso derrota con penalización AFK (Límite controlado)
Entrada: lpActuales = 12, esVictoria = false, multiplicadorRacha = 1, penalizacionAFK = true
Resultado esperado: 0   *(12 - 15 - 10 = -13 -> Ajustado a 0)*

## Explicacion final
La solución funciona porque utiliza bifurcaciones condicionales para aplicar las reglas del sistema de clasificación y añade una función de control de mínimos para evitar inconsistencias numéricas en el ranking.