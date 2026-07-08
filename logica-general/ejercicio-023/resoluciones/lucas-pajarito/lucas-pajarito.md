# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de equipos de esports con:
    - Nombre.
    - Cantidad de victorias.
    - Cantidad de derrotas.

- **Proceso:**
  1. Recorrer la lista de equipos.
  2. Evaluar la cantidad de victorias de cada equipo.
  3. Si el equipo tiene 6 o más victorias, clasifica a los playoffs.
  4. En caso contrario, queda eliminado.

- **Salida:**
  - Un mensaje indicando si cada equipo clasifica o no a los playoffs.

---

## Reglas identificadas

1. Todos los equipos deben tener un nombre, victorias y derrotas.
2. Un equipo clasifica si tiene **6 o más victorias**.
3. Si tiene menos de 6 victorias, queda eliminado.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Phoenix",
    "victorias": 6,
    "derrotas": 4
}
```

**Resultado esperado**

```text
Phoenix: Clasifica a los playoffs.
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Titans",
    "victorias": 5,
    "derrotas": 5
}
```

**Resultado esperado**

```text
Titans: No clasifica a los playoffs.
```

> Este es un caso borde porque el equipo se encuentra a una victoria del mínimo requerido para clasificar.

---

## Explicación final

La solución funciona porque recorre la lista de equipos y evalúa la cantidad de victorias de cada uno. Mediante una estructura `if...else`, determina si el equipo alcanza el mínimo de seis victorias para clasificar a los playoffs. Finalmente, muestra un mensaje con el resultado correspondiente para cada equipo.

---

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar. En este reto, la regla principal consiste en verificar si el número de victorias es mayor o igual a seis para decidir si un equipo clasifica o no a los playoffs.