# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de jugadores con:
    - Nombre.
    - Puntos obtenidos.

- **Proceso:**
  1. Recorrer la lista de jugadores.
  2. Comparar la cantidad de puntos de cada jugador.
  3. Identificar al jugador con la mayor puntuación.
  4. Mostrar el resultado.

- **Salida:**
  - El nombre del jugador con mayor puntuación.
  - La cantidad de puntos obtenidos.

---

## Reglas identificadas

1. Todos los jugadores deben tener un nombre.
2. Todos los jugadores deben tener una puntuación.
3. El jugador con la mayor cantidad de puntos será el ganador de la comparación.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Luis",
    "puntos": 25
}
```

**Resultado esperado**

```text
El jugador con mayor puntuación es Luis con 25 puntos.
```

---

### Caso borde

**Entrada**

```python
jugadores = [
    {
        "nombre": "Ana",
        "puntos": 20
    },
    {
        "nombre": "Sofía",
        "puntos": 20
    }
]
```

**Resultado esperado**

```text
El jugador con mayor puntuación es Ana con 20 puntos.
```

> Este es un caso borde porque dos jugadores tienen exactamente la misma puntuación. El programa conserva como ganador al primero encontrado en la lista, ya que la comparación utiliza el operador `>` y no reemplaza al jugador cuando los puntos son iguales.

---

## Explicación final

La solución funciona porque recorre la lista de jugadores y compara la puntuación de cada uno con la mayor encontrada hasta el momento. Cuando encuentra un jugador con más puntos, actualiza la referencia del ganador. Al finalizar el recorrido, se muestra el jugador con la puntuación más alta. De esta manera se resuelve un caso de **comparación de opciones**.

---

## Sugerencia

Cuando necesites **comparar varias opciones**, guarda inicialmente el primer elemento como referencia y compáralo con los demás durante el recorrido de la lista. Así podrás identificar fácilmente el elemento con el mayor o menor valor.