# Analisis del problema.
- para poder resolver este problema realice una validacion de acumulacion de tarjetas amarillas y rojas por cada jugador.

## reglas aplicadas

1. **VAlidacon de tarjetas:** antes de todo se tiene que validar las faltas y tarjetas acumuladas, si `tarjetas.amarillas >= 3`entonces se le saca una tarjeta roja y queda sancionado del juego. 
2. **Sancion del jugador con tarjeta roja**: si `tarjetas_rojas >= 1`el jugador queda automaticamente sancionado del juego por cometer una falta grave.

## casos probados:

**Juan perez**: devuelve `jugador no sancionado`.
**Carlos López**: devuelve `jugador sancionado`. por vencer limite de amarillas.
**Luis Martinez**: devuelve `jugador sancionado.