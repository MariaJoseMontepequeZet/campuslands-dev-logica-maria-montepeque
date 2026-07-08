# Solucion ejercicio 012 - Comparacion de opciones

## Como pense el problema

El objetivo fue comparar el puntaje de varios jugadores de pingpong para identificar al que obtuvo el mejor resultado. Para ello se recorre la lista comparando los puntos de cada jugador.

## Entradas

- Lista de jugadores.

Cada jugador contiene:

- Nombre.
- Puntos.

## Reglas aplicadas

1. La lista debe contener jugadores.
2. Se comparan los puntos de todos los jugadores.
3. Se conserva el jugador con el mayor puntaje.
4. Si la lista esta vacia, se muestra un mensaje.

## Salidas

- Jugador con el mayor puntaje.
- Mensaje indicando que no existen jugadores registrados.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Comparacion entre varios jugadores.

Resultado esperado:

```text
{
  nombre: "Ana",
  puntos: 25
}
```

### Caso borde

Lista vacia.

Resultado esperado:

```text
No hay jugadores registrados.
```