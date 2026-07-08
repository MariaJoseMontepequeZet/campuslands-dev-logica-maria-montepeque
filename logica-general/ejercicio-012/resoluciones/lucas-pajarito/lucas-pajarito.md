# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de jugadores con la siguiente información:
    - Nombre.
    - Puntos obtenidos.
    - Sets ganados.

- **Proceso:**
  1. Recorrer la lista de jugadores.
  2. Comparar la cantidad de puntos de cada jugador.
  3. Identificar al jugador con la mayor cantidad de puntos.
  4. Mostrar la información del mejor jugador.

- **Salida:**
  - El nombre del jugador con más puntos, junto con sus puntos y sets ganados.

---

## Reglas identificadas

1. Todos los jugadores deben tener un nombre, puntos y sets ganados.
2. El jugador con mayor cantidad de puntos será considerado el mejor del torneo.
3. Al finalizar la comparación, se debe mostrar la información del jugador con mejor puntuación.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    nombre: "María",
    puntos: 25,
    setsGanados: 3
}
```

**Resultado esperado:**

```text
=== MEJOR JUGADOR DEL TORNEO ===
Nombre: María
Puntos: 25
Sets ganados: 3
```

---

### Caso borde

**Entrada:**

```javascript
{
    nombre: "Carlos",
    puntos: 21,
    setsGanados: 2
},
{
    nombre: "Pedro",
    puntos: 21,
    setsGanados: 2
}
```

**Resultado esperado:**

```text
El programa selecciona al primer jugador encontrado con la mayor cantidad de puntos.
```

> Este es un caso borde porque dos jugadores obtienen exactamente la misma puntuación. El algoritmo mantiene como mejor jugador al primero que encontró con ese valor.

---

## Explicación final

La solución funciona porque recorre el arreglo de jugadores comparando la cantidad de puntos de cada uno. Utiliza una variable para almacenar al jugador con la mayor puntuación encontrada hasta el momento. Al finalizar el recorrido, muestra la información del jugador con el mejor desempeño. De esta manera se resuelve un problema de **comparación de opciones**, donde se selecciona la mejor alternativa entre varias disponibles.

---

## Sugerencia

Cuando un problema consiste en comparar opciones, identifica el criterio principal de comparación. En este reto, el criterio es la cantidad de puntos obtenidos. Recorre todas las opciones y conserva aquella que tenga el mejor valor para obtener el resultado final.