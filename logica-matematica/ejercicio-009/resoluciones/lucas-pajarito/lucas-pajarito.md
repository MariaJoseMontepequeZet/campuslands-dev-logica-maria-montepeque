# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de películas de miedo con:
    - Título.
    - Calificación.

- **Proceso:**
  1. Recorrer la lista de películas.
  2. Sumar todas las calificaciones.
  3. Dividir la suma entre la cantidad de películas.
  4. Mostrar el promedio de calificaciones.

- **Salida:**
  - La calificación de cada película.
  - El promedio de calificaciones.

---

## Reglas identificadas

1. Cada película debe tener una calificación numérica.
2. Se deben sumar todas las calificaciones.
3. El promedio se obtiene dividiendo la suma entre la cantidad de películas.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "titulo": "El Conjuro",
    "calificacion": 9.2
}
```

**Resultado esperado**

```text
Título: El Conjuro
Calificación: 9.2
```

**Cálculo**

```text
9.2 + 8.5 + 7.8 + 8.9 + 8.1 = 42.5

42.5 ÷ 5 = 8.50
```

**Resultado esperado**

```text
Promedio de calificaciones: 8.50
```

---

### Caso borde

**Entrada**

```python
peliculas = [
    {
        "titulo": "Película nueva",
        "calificacion": 0
    }
]
```

**Resultado esperado**

```text
Promedio de calificaciones: 0.00
```

> Este es un caso borde porque la película tiene una calificación de **0**. El programa debe calcular correctamente el promedio sin generar errores.

---

## Explicación final

La solución funciona porque utiliza un acumulador para sumar las calificaciones de todas las películas de miedo. Después divide la suma entre la cantidad de películas para obtener el promedio. Finalmente, muestra la calificación de cada película y el promedio general, permitiendo conocer la valoración promedio de la colección.

---

## Sugerencia

Cuando debas calcular un **promedio**, utiliza un acumulador para sumar todos los valores y luego divide el resultado entre la cantidad de elementos. Este procedimiento es una de las operaciones aritméticas más utilizadas en programación.