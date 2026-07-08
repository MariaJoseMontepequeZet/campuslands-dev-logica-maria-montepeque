# Ejercicio 03

## Explicacion
En el siguiente ejercicio se realizo un recorrido para saber que equipo contaba con un mayor puntuaje asi para saber el ganador las reglas que se utilizaron en este ejercicio fue un calculo de puntos por items haciendo una operacion matematica para calcular el punteo. Ademas de eso de se utilizo otra regla para averiguar si habia un empate hacienndo la verificacion con un if-else.

## Puntos por items
- Victorias = 3 puntos
- Reliquias = 5 puntos 
- Kills = 1 punto

## Caso normal 
```text
   {
    nombre: "Aguilas123",
    victorias: 2,
    reliquias: 5,
    kills: 3
   }
```

Resultado esperado:

   'El equipo ganador es Aguilas123 con un total de puntos 34'

### Caso borde

Supongamos que el equipo Martines12 tiene los siguientes resultados habra un empate 
Entrada:

```text
    {
        nombre: "Martines12",
        victorias: 4,
        reliquias: 4,
        kills: 2
    }
```

Resultado esperado:
`Hay un empate, con un total de 34 puntos , los cuales son los siguientes equipos Martines12, Aguilas123`)