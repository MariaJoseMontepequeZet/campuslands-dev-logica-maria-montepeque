# Plantilla de solución

## Análisis

- **Entrada:**
  - Una matriz donde cada fila representa un elemento de la animación.
  - Cada fila contiene:
    - Nombre del elemento.
    - Estado del elemento.

- **Proceso:**
  1. Recorrer la matriz utilizando un ciclo.
  2. Leer el nombre y el estado de cada elemento.
  3. Mostrar la información de cada fila de la matriz.

- **Salida:**
  - Una lista con todos los elementos de la animación y su estado actual.

---

## Reglas identificadas

1. Cada fila de la matriz representa un elemento de la animación.
2. La primera columna almacena el nombre del elemento.
3. La segunda columna almacena el estado del elemento.
4. Todos los elementos deben mostrarse en el orden en que aparecen en la matriz.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
["Personaje", "Completada"]
```

**Resultado esperado:**

```text
Elemento: Personaje
Estado: Completada
```

---

### Caso borde

**Entrada:**

```javascript
["Render Final", "Pendiente"]
```

**Resultado esperado:**

```text
Elemento: Render Final
Estado: Pendiente
```

> Este es un caso borde porque representa un elemento que aún no ha sido finalizado. El programa debe mostrar correctamente su estado sin generar errores.

---

## Explicación final

La solución funciona porque utiliza una **matriz simple**, donde cada fila almacena la información de un elemento de la animación 3D. Mediante un ciclo `for`, el programa recorre cada fila, accede a sus columnas y muestra el nombre del elemento junto con su estado. De esta manera se resuelve correctamente un problema de manejo de matrices simples.

---

## Sugerencia

cuando trabajes con matrices simples, identifica qué representa cada fila y cada columna antes de programar. Luego utiliza un ciclo para recorrer la matriz y acceder a cada posición mediante sus índices (`fila` y `columna`), facilitando la lectura y organización de la información.