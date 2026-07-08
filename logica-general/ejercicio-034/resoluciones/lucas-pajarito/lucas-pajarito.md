# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de tatuajes con la siguiente información:
    - Nombre del cliente.
    - Estado del tatuaje.

- **Proceso:**
  1. Recorrer la lista de tatuajes.
  2. Leer el estado de cada tatuaje.
  3. Comparar el estado con los posibles errores.
  4. Mostrar el diagnóstico correspondiente.

- **Salida:**
  - El nombre del cliente.
  - El estado del tatuaje.
  - El diagnóstico del resultado.

---

## Reglas identificadas

1. Si el estado es **Correcto**, el tatuaje no presenta errores.
2. Si el estado es **Color incompleto**, se recomienda un retoque de color.
3. Si el estado es **Líneas irregulares**, se deben corregir las líneas del diseño.
4. Si el estado es **Exceso de tinta**, se recomienda retirar el exceso de tinta.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "cliente": "Laura",
    "estado": "Color incompleto"
}
```

**Resultado esperado**

```text
Cliente: Laura
Estado: Color incompleto
Diagnóstico: Es necesario realizar un retoque de color.
```

---

### Caso borde

**Entrada**

```python
{
    "cliente": "Carlos",
    "estado": "Correcto"
}
```

**Resultado esperado**

```text
Cliente: Carlos
Estado: Correcto
Diagnóstico: No presenta errores.
```

> Este es un caso borde porque el tatuaje no presenta ninguna anomalía. El programa debe reconocer correctamente el estado **Correcto** y evitar mostrar un diagnóstico de error.

---

## Explicación final

La solución funciona porque recorre la lista de tatuajes y analiza el estado registrado para cada cliente. Mediante una estructura `if`, `elif` y `else`, compara el estado con los posibles errores definidos y muestra el diagnóstico correspondiente. De esta manera se implementa un **diagnóstico de errores**, donde cada condición tiene una respuesta específica según el problema detectado.

---

## Sugerencia

Cuando trabajes con un **diagnóstico de errores**, identifica primero todos los estados posibles del sistema. Después utiliza estructuras condicionales para evaluar cada caso y mostrar el diagnóstico adecuado para cada situación.