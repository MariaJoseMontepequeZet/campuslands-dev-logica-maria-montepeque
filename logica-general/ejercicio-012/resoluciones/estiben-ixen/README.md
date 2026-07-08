# Resolución: Marcador de Pingpong

## Pensamiento Lógico
El problema se dividió en dos grandes escenarios:
1. **Escenario Estándar:** Si el juego termina antes de llegar a los 10 puntos (es decir, un jugador domina rápidamente).
2. **Escenario de Desempate (Deuce):** Si ambos jugadores alcanzan los 10 puntos, el límite de 11 puntos se anula y la victoria requiere una diferencia estricta de 2 puntos, siguiendo el reglamento oficial de la ITTF.

## Reglas Aplicadas
- **Victoria:** 11 puntos con 2 de ventaja.
- **Deuce:** Al llegar a 10-10, se juega hasta que la ventaja sea de 2.

## Cómo ejecutar
`node pingpong-juego.js`

## Casos Probados
- **Victoria rápida:** (11-9) -> Jugador A gana.
- **Deuce activo:** (10-10) -> "El partido continúa".
- **Victoria tras Deuce:** (12-10) -> Jugador A gana tras superar el desempate.