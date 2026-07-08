# Solucion ejercicio 008 - Flujos paso a paso

## Como pense el problema

Identifique las acciones necesarias para que un usuario pueda reproducir una pelicula. Cada paso depende de que el anterior se cumpla correctamente.

## Entradas

- Informacion de la pelicula.
- Edad del usuario.

La pelicula contiene:

- Titulo.
- Duracion.
- Disponibilidad.
- Edad minima.

## Reglas aplicadas

1. Verificar que exista una pelicula.
2. Comprobar que este disponible.
3. Validar que el usuario tenga la edad requerida.
4. Si todas las condiciones se cumplen, mostrar el flujo de reproduccion.

## Salidas

- Lista de pasos para reproducir la pelicula.
- Mensaje indicando el motivo por el cual no puede reproducirse.

## Como ejecutar

Ejecutar:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Usuario mayor de edad y pelicula disponible.

Resultado esperado:

```text
[
  'Paso 1: Buscar la pelicula.',
  'Paso 2: Verificar disponibilidad.',
  'Paso 3: Validar edad del usuario.',
  'Paso 4: Reproducir la pelicula.'
]
```

### Caso borde

Usuario menor que la edad permitida.

Resultado esperado:

```text
El usuario no cumple con la edad minima.
```