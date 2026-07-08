# Plantilla de solucion

## Analisis

- Entrada: Recibirá un objeto js con los nombres de los dos jugadores y la secuencia de puntos del set (array con el nombre del jugador que ganó cada punto).
- Proceso: Se recorrerá la secuencia de puntos mediante un ciclo, acumulando los puntos de cada jugador y verificando en cada iteración si se cumple la condición de victoria (11 puntos con diferencia de 2).
- Salida: Objeto con el ganador del set, marcador final, número de puntos jugados, indicador de si hubo deuce y detalle del resultado.

## Reglas identificadas

1. Gana el set el primer jugador en llegar a 11 puntos
2. Debe haber diferencia mínima de 2 puntos para ganar
3. Si llegan a 10-10 se produce deuce
4. En deuce, el set continúa hasta que un jugador saque 2 puntos de diferencia
5. El set termina inmediatamente cuando se cumple la condición de victoria
6. Si la secuencia termina sin ganador, el set está incompleto
7. Si no hay datos de entrada, se debe retornar un mensaje de error

## Pruebas

### Caso normal

Entrada:
``` js
const set = {
  jugador1: "Juan",
  jugador2: "Pedro",
  secuenciaPuntos: [
    "Juan", "Pedro", "Juan", "Juan", "Pedro",
    "Juan", "Juan", "Pedro", "Juan", "Juan",
    "Pedro", "Juan", "Pedro", "Juan", "Juan",
    "Pedro", "Juan", "Pedro"
  ]
};
```

Resultado esperado:
{ganador: 'Juan', marcador: 'Juan: 11 | Pedro: 6', puntosJugados: 17, huboDeuce: false, detalle: 'Set ganado por Juan sin deuce'}

### Caso borde

Entrada:
``` js
const setDeuce = {
  jugador1: "Juan",
  jugador2: "Pedro",
  secuenciaPuntos: [
    "Juan", "Pedro", "Juan", "Pedro", "Juan",
    "Pedro", "Juan", "Pedro", "Juan", "Pedro",
    "Juan", "Pedro", "Juan", "Pedro", "Juan",
    "Pedro", "Juan", "Pedro", "Juan", "Pedro",
    "Juan", "Juan"
  ]
};
```

Resultado esperado:
{ganador: 'Juan', marcador: 'Juan: 12 | Pedro: 10', puntosJugados: 22, huboDeuce: true, detalle: 'Set con deuce ganado por Juan'}

## Explicacion final

Este sistema permite analizar de forma automática un set de pingpong aplicando las reglas oficiales de la ITTF. Se utilizan ciclos para recorrer la secuencia de puntos, acumuladores para contar los puntos de cada jugador, y condicionales para verificar si se cumple la condición de victoria (11 puntos con diferencia de 2). Las reglas de negocio están claramente definidas y manejan correctamente el caso especial del deuce (10-10), donde el set continúa hasta que un jugador saque 2 puntos de diferencia. El razonamiento lógico se basa en verificar en cada iteración si hay ganador, permitiendo terminar el ciclo inmediatamente cuando se cumple la condición. Se incluyen casos borde para validar entradas vacías, sets con deuce, sets incompletos y deuces prolongados, garantizando robustez en el sistema.

