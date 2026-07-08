# Logica matemática 011 - conteo combiantiro simple

## Descripción

Este programa procesa una lista de jugadores con su puntaje de pelea. Recorre el arreglo para mostrar la información de cada jugador, calcula la suma y el promedio de los puntajes, cuenta cuántos jugadores tienen un puntaje alto y determina cuál obtuvo el mayor puntaje.

## Cómo pensé el problema

1. Leí las instrucciones para comprender el objetivo.
2. Identifiqué que la entrada es un arreglo de objetos llamado `jugadores`.
3. Definí que la salida debía mostrar la información de cada jugador, la suma de los puntajes, el promedio, la cantidad de jugadores con puntaje alto y el mejor jugador.
4. Utilicé un ciclo `for...of` para recorrer el arreglo.
5. Empleé acumuladores para sumar los puntajes y contar los jugadores con puntaje alto.
6. Usé condicionales para identificar los puntajes altos y encontrar el mayor puntaje.
7. Realicé los cálculos necesarios y mostré los resultados.

## Reglas aplicadas

* **Leer instrucciones:** Comprender qué debía resolver el programa.
* **Identificar entradas:** El arreglo `jugadores`.
* **Definir salidas:** Mostrar la información de cada jugador, el total de puntajes, el promedio, la cantidad de jugadores con puntaje alto y el mejor jugador.
* **Usar condicionales:** Evaluar si un jugador tiene un puntaje mayor o igual a 60 y determinar cuál tiene el mayor puntaje.
* **Ciclos:** Recorrer el arreglo utilizando `for...of`.
* **Acumuladores:** Sumar los puntajes y contar los jugadores con puntaje alto.
* **Cálculo numérico:** Calcular la suma y el promedio de los puntajes.
* **Razonamiento cuantitativo:** Analizar los puntajes para identificar el mejor jugador y obtener estadísticas.

## Cómo ejecutar o revisar la solución

1. Guardar el código en un archivo llamado `index.js`.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar el siguiente comando:

```bash
node index.js
```

4. Revisar la salida que aparece en la consola.

## Casos probados

### Caso 1

Entrada:

* Juan: 50
* María: 60
* Ana: 60

Resultado esperado:

* Total de puntajes: 170
* Promedio: 56.67
* Jugadores con puntaje alto: 2
* Mejor jugador: María

### Caso 2

Todos los jugadores con puntaje mayor o igual a 60.

Resultado esperado:

* Todos son identificados con puntaje alto.
* El promedio es mayor o igual a 60.

### Caso 3

Un solo jugador.

Resultado esperado:

* El total y el promedio son iguales al puntaje del jugador.

### Caso 4

Arreglo vacío.

Resultado esperado:

* El programa debe validar que no hay jugadores antes de calcular el promedio para evitar dividir entre cero.
