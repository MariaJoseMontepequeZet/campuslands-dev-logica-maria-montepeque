# Plantilla de solucion

## Analisis

- **Entrada:** Dos objetos representando a los jugadores, conteniendo `nombre` y `puntos`.
- **Proceso:** Evaluación de reglas de victoria del pingpong (mínimo 11 puntos, diferencia de 2).
- **Salida:** Resultado del set (Ganador, Deuce o Continuar).

## Reglas identificadas

1. **Victoria:** Alcanzar 11 puntos con una ventaja de al menos 2 unidades.
2. **Deuce:** Situación donde ambos jugadores tienen 10+ puntos y la diferencia es menor a 2.
3. **Juego en curso:** Estado por defecto cuando no se cumplen los criterios de victoria ni de empate técnico.

## Pruebas

### Caso normal

**Entrada:** `jugador1 = {nombre: "Alex", puntos: 11}, jugador2 = {nombre: "Bruno", puntos: 9}`

**Resultado esperado:** `Ganador: Alex`

### Caso borde

**Entrada:** `jugador1 = {nombre: "Alex", puntos: 10}, jugador2 = {nombre: "Bruno", puntos: 10}`

**Resultado esperado:** `Estado: Deuce (Empate técnico, se requiere diferencia de 2)`

## Explicacion final

La lógica implementada utiliza comparaciones matemáticas para validar las reglas del deporte. El uso de `Math.abs()` permite detectar la diferencia de puntos sin importar qué jugador lleve la delantera, facilitando la identificación del estado de "Deuce" de manera eficiente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para llevar esto al siguiente nivel, podrías crear una función que reciba el historial de puntos y simule el set completo punto por punto.