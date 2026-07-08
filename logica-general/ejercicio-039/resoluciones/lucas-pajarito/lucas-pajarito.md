# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de reactivos químicos con:
    - Nombre.
    - Cantidad disponible.
    - Stock mínimo.

- **Proceso:**
  1. Recorrer la lista de reactivos.
  2. Comparar la cantidad disponible con el stock mínimo.
  3. Determinar si el inventario es suficiente.
  4. Mostrar el estado de cada reactivo.

- **Salida:**
  - El nombre del reactivo.
  - La cantidad disponible.
  - El estado del inventario.

---

## Reglas identificadas

1. Cada reactivo debe registrar una cantidad disponible.
2. Cada reactivo debe tener definido un stock mínimo.
3. Si la cantidad disponible es mayor o igual al stock mínimo, el inventario es suficiente.
4. Si la cantidad disponible es menor al stock mínimo, debe reabastecerse el inventario.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Etanol",
    "cantidad": 15,
    "stock_minimo": 10
}
```

**Resultado esperado**

```text
Reactivo: Etanol
Cantidad disponible: 15
Stock mínimo: 10
Estado: Inventario suficiente.
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Hidróxido de Sodio",
    "cantidad": 6,
    "stock_minimo": 6
}
```

**Resultado esperado**

```text
Reactivo: Hidróxido de Sodio
Cantidad disponible: 6
Stock mínimo: 6
Estado: Inventario suficiente.
```

> Este es un caso borde porque la cantidad disponible es exactamente igual al stock mínimo requerido. El programa debe considerar que el inventario sigue siendo suficiente y no solicitar un reabastecimiento.

---

## Explicación final

La solución funciona porque recorre la lista de reactivos y compara la cantidad disponible con el stock mínimo establecido. Mediante una estructura `if...else`, determina si cada reactivo cuenta con existencias suficientes o si es necesario reabastecerlo. De esta manera se implementa un **inventario lógico**, permitiendo controlar el estado de los materiales utilizados en un laboratorio químico.

---

## Sugerencia

Cuando desarrolles un **inventario lógico**, establece primero un stock mínimo para cada elemento. Después compara la cantidad disponible con ese valor para decidir si el inventario es suficiente o si es necesario realizar un reabastecimiento.