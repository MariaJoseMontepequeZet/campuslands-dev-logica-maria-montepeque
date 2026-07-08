# Solucion ejercicio 009 - Simulacion de estados

## Como pense el problema

El problema consiste en representar los diferentes estados por los que pasa una pelicula. Cada accion cambia el estado solamente si cumple las reglas establecidas.

## Entradas

- Informacion de la pelicula.
- Accion que se desea realizar.

La pelicula contiene:

- Titulo.
- Estado.

## Reglas aplicadas

1. La pelicula debe existir.
2. Una pelicula disponible puede pasar a reservada.
3. Una pelicula reservada puede pasar a reproduccion.
4. Una pelicula en reproduccion puede marcarse como vista.
5. Si la accion no corresponde al estado actual, se muestra un mensaje de error.

## Salidas

- Pelicula con su nuevo estado.
- Mensaje indicando que la accion no es valida.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Estado esperado:

```text
Disponible
↓
Reservada
↓
En reproduccion
↓
Vista
```

### Caso borde

Resultado esperado:

```text
La pelicula no existe.
```