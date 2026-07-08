# Resolucion ejercicio 01

## Analisis

- Entrada: Recibirá un diccionario con los siguientes datos de los jugadores: nombre,estado, diamantes, nivel
- Proceso: Durante el procesos, se le aplicarán ciertas reglas para determinar a los mejores jugadores, en el cual se irán descartando por diamantes, estado y nivel
- Salida: Devolverá a jugadores con nivel leyenda.

## Reglas identificadas

1. Restringir casos por estado.
2. Filtrar soldados por diamantes
3. Filtrar por nivel

## Pruebas

### Caso normal

Entrada:
``` js
const jugadors = [
    { nombre: "Marvel", estado: "Dañado", diamantes: 80, nivel: "Maestro" },
    { nombre: "Dum", estado: "Mejorado", diamantes: 180, nivel: "Leyenda" },
    { nombre: "Alondra", estado: "Sin daño", diamantes: 170, nivel: "Gran maestro" }
  ];
```

Resultado esperado:

diamantes: 180
estado: "Mejorado"
nivel: "Leyenda"​
nombre: "Dum"

### Caso borde

Entrada:
``` js
const jugadors = [
    { nombre: "Marvel", estado: "Dañado", diamantes: 80, nivel: "Maestro" },
    { nombre: "Dum", estado: "Mejorado", diamantes: 180, nivel: "Leyenda" }
  ];
```
Resultado esperado:
No hay jugadores que cumplan con las reglas:
1. Restringir casos por estado.
2. Diamantes > 150
3. Nivel leyenda

## Explicacion final

Se trata de filtrar objetos js para poder encontrar los registros que cumplan con los requisitos de ser leyenda, de que no esté dañado, y que sus diamantes sean mayores a 150


