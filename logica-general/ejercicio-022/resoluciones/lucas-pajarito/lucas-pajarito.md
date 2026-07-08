# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de equipos de fútbol sala con la siguiente información:
    - Nombre.
    - Partidos jugados.
    - Victorias.
    - Empates.
    - Derrotas.
    - Puntos.

- **Proceso:**
  1. Ordenar los equipos de mayor a menor según la cantidad de puntos.
  2. Recorrer la lista ordenada.
  3. Asignar la posición correspondiente en el ranking.
  4. Mostrar el Top 1 hasta el Top 5.

- **Salida:**
  - Un ranking de equipos ordenados según la cantidad de puntos obtenidos.

---

## Reglas identificadas

1. Todos los equipos deben tener un nombre y una cantidad de puntos.
2. El equipo con más puntos ocupa el **Top 1**.
3. Los demás equipos se organizan de forma descendente según sus puntos.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Tigres FS",
    "puntos": 19
}
```

**Resultado esperado**

```text
Top 1: Tigres FS - 19 puntos
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Tigres FS",
    "puntos": 19
},
{
    "nombre": "Leones FS",
    "puntos": 19
}
```

**Resultado esperado**

```text
Top 1: Tigres FS - 19 puntos
Top 2: Leones FS - 19 puntos
```

> Este es un caso borde porque dos equipos tienen la misma cantidad de puntos. El programa mantiene el orden de aparición de los equipos con puntuaciones iguales.

---

## Explicación final

La solución funciona porque utiliza el método `sort()` para ordenar la lista de equipos según la cantidad de puntos en orden descendente. Luego, mediante un ciclo `for` y la función `enumerate()`, asigna automáticamente la posición de cada equipo en el ranking y muestra el Top 1 hasta el Top 5. Así se obtiene un resultado claro y verificable.

---

## Sugerencia

Antes de programar, identifica cuál será el criterio de ordenamiento. En este reto, el criterio es la cantidad de puntos obtenidos por cada equipo. Una vez ordenados, solo queda recorrer la lista para mostrar las posiciones del ranking.