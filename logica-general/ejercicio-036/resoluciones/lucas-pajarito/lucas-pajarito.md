# Plantilla de solución

## Análisis

- **Entrada:**
  - Una matriz que representa un escenario de animación 3D.
  - Cada fila contiene diferentes objetos del escenario.

- **Proceso:**
  1. Recorrer cada fila de la matriz.
  2. Recorrer cada elemento de la fila.
  3. Mostrar todos los elementos respetando su posición dentro de la matriz.

- **Salida:**
  - Una representación organizada de la matriz con todos los objetos del escenario.

---

## Reglas identificadas

1. La información debe almacenarse en una matriz (lista de listas).
2. Se deben recorrer todas las filas de la matriz.
3. Se deben recorrer todos los elementos de cada fila.
4. Los elementos deben mostrarse respetando el orden de la matriz.

---

## Pruebas

### Caso normal

**Entrada**

```python
escenario = [
    ["Cámara", "Luz", "Personaje"],
    ["Árbol", "Casa", "Montaña"],
    ["Auto", "Puente", "Río"]
]
```

**Resultado esperado**

```text
Cámara | Luz | Personaje |
Árbol | Casa | Montaña |
Auto | Puente | Río |
```

---

### Caso borde

**Entrada**

```python
escenario = [
    []
]
```

**Resultado esperado**

```text
=== MATRIZ DEL ESCENARIO 3D ===
```

> Este es un caso borde porque la matriz contiene una fila vacía. El programa debe recorrer la estructura correctamente sin generar errores, aunque no existan elementos para mostrar.

---

## Explicación final

La solución funciona porque utiliza una **matriz simple** (lista de listas) para representar un escenario de animación 3D. Mediante dos ciclos `for`, el primero recorre las filas y el segundo recorre cada elemento de la fila, mostrando toda la información organizada según su posición dentro de la matriz.

---

## Sugerencia

Cuando trabajes con **matrices simples**, utiliza un ciclo para recorrer las filas y otro ciclo anidado para recorrer los elementos de cada fila. Este procedimiento permite acceder a toda la información almacenada en una matriz de forma ordenada.