# Plantilla de solucion

## Analisis

- Entrada: Resivirá un objete js con los registros de los equipos
- Proceso: Se filtará el equipo con mayor cantidad de goles
- Salida: Si es verdadero, muestra el equipo, pero sino muestra ambos equipos y dice que hay un empate.

## Reglas identificadas

1. 1 solo equipo con mayor goles
2. No se permite mas de un equipo

## Pruebas

### Caso normal

Entrada: 
``` js
const equipos = [
    { nombreEquipo: "Los demonios", goles: 4 },
    { nombreEquipo: "Las gaviotas", goles: 6 },
    { nombreEquipo: "Los gatunos", goles: 9 }
  ];
  
```

Resultado esperado:
accion: "1 Equipo con más goles -> Los gatunos: 9 goles"
motivo: "1 con la Mayor cantidad de goles: 9"

### Caso borde

Entrada: Si hay mas de 2 equipos con mayores goles
``` js
const equipos = [
    { nombreEquipo: "Los demonios", goles: 4 },
    { nombreEquipo: "Las gaviotas", goles: 6 },
    { nombreEquipo: "Los gatunos", goles: 9 },
    { nombreEquipo: "Las panteras", goles: 9}
  ];
```

Resultado esperado:
accion: "Equipos empatados (9 goles) -> Los gatunos: 9 goles, Las panteras: 9 goles"
motivo: "Hay más de un equipo con la Mayor cantidad de goles: 9"

## Explicacion final

Se utiliza para poder saber cual es el equipo con la mayor cantidad de goles para poder darle el premio de la bota de oro, sin embargo debido a que si hay 2 equipos con la misma cantidad de goles, la bota de oro no se entregará a ningun equipo.

