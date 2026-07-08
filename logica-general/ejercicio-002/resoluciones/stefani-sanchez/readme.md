# Solucion ejercicio 002 - Validacion de datos

## Como pense el problema

Primero identifique los datos que necesita un jugador para entrar en un ranking de futbol sala. 
Luego defini reglas para revisar si esos datos son correctos antes de aceptar al jugador.

La idea principal fue separar la validacion de datos del resultado final.

## Entradas

Los datos que recibe la solucion son:

- Nombre del jugador.
- Cantidad de partidos jugados.
- Cantidad de goles.
- Cantidad de tarjetas rojas.
- Estado del jugador (activo o inactivo).

## Reglas aplicadas

1. El jugador debe tener un nombre valido.
2. Los partidos jugados no pueden ser negativos.
3. Los goles no pueden ser negativos.
4. Un jugador con mas de 3 tarjetas rojas no puede ser aceptado.
5. El jugador debe estar activo para participar en el ranking.

## Salidas

La solucion devuelve:

- Estado: aprobado o rechazado.
- Motivo de la validacion.

## Como ejecutar

Abrir una terminal dentro de la carpeta donde esta el archivo y ejecutar:

```bash
node stefani-sanchez.js