# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de canciones con:
    - Título.
    - Artista.
    - Duración en segundos.

- **Proceso:**
  1. Recorrer la lista de canciones.
  2. Sumar la duración de todas las canciones.
  3. Calcular la duración promedio.
  4. Convertir el tiempo total de segundos a minutos y segundos.
  5. Mostrar los resultados.

- **Salida:**
  - La duración total de la playlist.
  - La duración promedio de las canciones.

---

## Reglas identificadas

1. La duración total corresponde a la suma de todas las canciones.
2. El promedio se obtiene dividiendo el total de segundos entre la cantidad de canciones.
3. Los minutos se calculan mediante división entera (`//`).
4. Los segundos restantes se obtienen utilizando el operador módulo (`%`).

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "titulo": "Blinding Lights",
    "duracion": 200
}
```

**Resultado esperado**

```text
Título: Blinding Lights
Duración: 200 segundos
```

**Cálculo**

```text
200 + 233 + 204 + 203 + 242 = 1082 segundos

1082 // 60 = 18 minutos

1082 % 60 = 2 segundos

1082 ÷ 5 = 216.40 segundos
```

**Resultado esperado**

```text
Duración total: 18 minutos y 2 segundos
Duración promedio: 216.40 segundos
```

---

### Caso borde

**Entrada**

```python
playlist = [
    {
        "titulo": "Canción corta",
        "artista": "Autor",
        "duracion": 0
    }
]
```

**Resultado esperado**

```text
Duración total: 0 minutos y 0 segundos
Duración promedio: 0.00 segundos
```

> Este es un caso borde porque la canción tiene una duración de **0 segundos**. El programa debe realizar correctamente los cálculos sin generar errores.

---

## Explicación final

La solución funciona porque utiliza un acumulador para sumar la duración de todas las canciones de la playlist. Después calcula el promedio dividiendo el total entre la cantidad de canciones. Finalmente, convierte el tiempo total de segundos a minutos y segundos utilizando los operadores `//` y `%`, mostrando la información de manera clara y organizada.

---

## Sugerencia

Cuando trabajes con **tiempos**, primero realiza todos los cálculos en segundos. Después convierte el resultado a minutos y segundos utilizando la **división entera (`//`)** y el **operador módulo (`%`)**, ya que facilitan la representación del tiempo de forma comprensible.