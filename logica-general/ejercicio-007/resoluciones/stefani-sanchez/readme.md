# Solucion ejercicio 007 - Deteccion de inconsistencias

## Como pense el problema

Analice que una playlist debe contener informacion completa y correcta para cada cancion. La solucion revisa cada elemento y detecta datos incompletos o invalidos.

## Entradas

- Lista de canciones.

Cada cancion contiene:

- Titulo.
- Artista.
- Duracion.

## Reglas aplicadas

1. La playlist no debe estar vacia.
2. Cada cancion debe tener un titulo.
3. Cada cancion debe tener un artista.
4. La duracion debe ser mayor que cero.

## Salidas

- Lista de inconsistencias encontradas.
- Mensaje indicando que no existen inconsistencias.
- Mensaje si la playlist esta vacia.

## Como ejecutar

Ejecutar el siguiente comando:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Playlist con canciones que contienen errores.

Resultado esperado:

```text
[
  'Cancion 2: titulo vacio.',
  'Cancion 3: artista vacio.',
  'Cancion 4: duracion invalida.'
]
```

### Caso borde

Playlist vacia.

Resultado esperado:

```text
La playlist esta vacia.
```