# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de juegos competitivos con la siguiente información:
    - Nombre del juego.
    - Categoría.
    - Clasificación.

- **Proceso:**
  1. Recorrer la lista de juegos.
  2. Leer la información de cada juego.
  3. Mostrar el nombre, la categoría y la clasificación de cada uno en el mismo orden en que aparecen.

- **Salida:**
  - Una lista organizada con la información de todos los juegos competitivos.

---

## Reglas identificadas

1. Cada juego debe tener un nombre.
2. Cada juego debe pertenecer a una categoría.
3. Cada juego debe mostrar su clasificación.
4. La información debe mostrarse respetando el orden de la lista.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Valorant",
    "categoria": "FPS Táctico",
    "clasificacion": "Competitivo"
}
```

**Resultado esperado**

```text
Juego 1
Nombre: Valorant
Categoría: FPS Táctico
Clasificación: Competitivo
```

---

### Caso borde

**Entrada**

```python
juegos = []
```

**Resultado esperado**

```text
=== CLASIFICACIÓN DE JUEGOS COMPETITIVOS ===
```

> Este es un caso borde porque la lista de juegos está vacía. El programa debe ejecutarse correctamente sin mostrar errores, aunque no existan juegos para listar.

---

## Explicación final

La solución funciona porque recorre la lista de juegos competitivos utilizando un ciclo `for` junto con `enumerate()`. En cada iteración lee la información de un juego y la muestra de forma ordenada. Este ejercicio representa un caso de **lectura de instrucciones**, ya que el programa sigue una secuencia de pasos para presentar la información de cada elemento de la lista.

---

## Sugerencia

Cuando un problema consista en **leer instrucciones o mostrar información**, organiza los datos en una lista y recórrela de forma secuencial. De esta manera, cada elemento se procesa en el orden correcto y la información se presenta de forma clara y organizada.