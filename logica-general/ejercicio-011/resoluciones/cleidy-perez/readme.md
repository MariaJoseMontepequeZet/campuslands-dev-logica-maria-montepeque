# Lógica Matemática 011- coteo combinatorio simple
## Analisis
- Entrada: se realiza una lista con los nombres de los jugadores de kickboxing.

- Proceso: recorre el array, pero se utiliza "soft" para que lo ordene alfeticamente y se le coloca +1 debido a que le sumamos 1 cada posicion del nombre.

- Salida: una lista organizada de los nombres de los jugadores y cuantos jugadores hay en total.

## Reglas identificadas

Aplicamos el  `forEach` para que interpretará las intrucciones de cada nombre del jugador y aplicamos  `++` y la variable  `let con el nombre total` para contar los jugadores.

Pruebas
Caso normal
Entrada:me da los nombre de los jugadores por orden y el total-4


Resultado esperado:
| posicion | nombre | posicion debida|
|----------|--------|----------------|
|   0      |  Ana   |      1         |
|   1      | Angel  |      2         |
|   2      | Juan   |      3         |
|   3      | Norma  |      4         |

Caso borde
Entrada: se creo una array vacio cuando alquien pueda ingresar un dato o nombre que no existe no le salga nada.

Resultado esperado:
[]

Explicacion final
Esto funciona debido a que se utiliza el forEach para recorrer el array de los jugadores, se utiliza let vacio para que no haya error futuros.

