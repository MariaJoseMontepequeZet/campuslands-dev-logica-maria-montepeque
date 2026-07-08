# Plantilla de solucion

## Analisis

- Entrada:
  - jugadores:
    - { nombre: "Laura", puntos: 18, faltas: 1 }
    - { nombre: "Diego", puntos: 18, faltas: 3 }

- Proceso:
  - Comparar la cantidad de puntos de ambos jugadores.
  - Si existe empate en puntos, comparar la cantidad de faltas.
  - Declarar ganador al jugador con menos faltas.
  - Si también empatan en faltas, declarar empate.

- Salida:
  - ganador: Laura
  - motivo: Empataron en puntos, pero cometió menos faltas.

## Reglas identificadas

1. Gana el jugador con mayor cantidad de puntos.
2. Si hay empate en puntos, gana quien tenga menos faltas.
3. Si también empatan en faltas, el resultado es un empate.

## Pruebas

### Caso normal

Entrada:

jugadores:
- { nombre: "Laura", puntos: 18, faltas: 1 }
- { nombre: "Diego", puntos: 18, faltas: 3 }

Resultado esperado:

ganador: Laura
motivo: Empataron en puntos, pero cometió menos faltas.

### Caso borde

Entrada:

jugadores:
- { nombre: "Laura", puntos: 15, faltas: 2 }
- { nombre: "Diego", puntos: 15, faltas: 2 }

Resultado esperado:

ganador: Empate
motivo: Ambos jugadores tienen los mismos puntos y la misma cantidad de faltas.

## Explicacion final

La solución funciona porque compara primero la cantidad de puntos, que es el criterio principal para determinar al ganador. Si ambos jugadores empatan, aplica una segunda regla comparando el número de faltas. Finalmente, si ambas condiciones son iguales, declara un empate, obteniendo un resultado claro, consistente y verificable.