# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de películas de ciencia ficción con:
    - Título.
    - Duración en minutos.

- **Proceso:**
  1. Recorrer la lista de películas.
  2. Sumar la duración de todas las películas.
  3. Convertir el tiempo total de minutos a horas y minutos.
  4. Calcular la duración promedio de las películas.
  5. Mostrar los resultados.

- **Salida:**
  - El tiempo total de reproducción.
  - La duración promedio de las películas.

---

## Reglas identificadas

1. El tiempo total corresponde a la suma de las duraciones de todas las películas.
2. Las horas se obtienen mediante división entera (`//`).
3. Los minutos restantes se calculan utilizando el operador módulo (`%`).
4. El promedio se obtiene dividiendo el total de minutos entre la cantidad de películas.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "titulo": "Interestelar",
    "duracion": 169
}
```

**Resultado esperado**

```text
Título: Interestelar
Duración: 169 minutos
```

**Cálculo**

```text
169 + 162 + 136 + 155 + 144 = 766 minutos

766 // 60 = 12 horas

766 % 60 = 46 minutos

766 ÷ 5 = 153.20 minutos
```

**Resultado esperado**

```text
Tiempo total: 12 horas y 46 minutos

Duración promedio: 153.20 minutos
```

---

### Caso borde

**Entrada**

```python
peliculas = [
    {
        "titulo": "Película corta",
        "duracion": 0
    }
]
```

**Resultado esperado**

```text
Tiempo total: 0 horas y 0 minutos

Duración promedio: 0.00 minutos
```

> Este es un caso borde porque la película tiene una duración de **0 minutos**. El programa debe realizar correctamente todos los cálculos sin generar errores.

---

## Explicación final

La solución funciona porque utiliza un acumulador para sumar la duración de todas las películas. Posteriormente convierte el tiempo total de minutos a horas y minutos mediante los operadores `//` y `%`. Finalmente, calcula la duración promedio dividiendo el total de minutos entre la cantidad de películas, mostrando los resultados de forma clara y organizada.

---

## Sugerencia

Cuando trabajes con **duraciones de tiempo**, realiza primero todos los cálculos utilizando una sola unidad (minutos). Después convierte el resultado a horas y minutos mediante la división entera y el operador módulo para presentar la información de manera más comprensible.