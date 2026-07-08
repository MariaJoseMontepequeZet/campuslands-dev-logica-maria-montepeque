# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de reactivos químicos con la siguiente información:
    - Nombre del reactivo.
    - Cantidad disponible.
    - Cantidad mínima requerida.

- **Proceso:**
  1. Recorrer el arreglo de reactivos.
  2. Comparar la cantidad disponible con la cantidad mínima requerida.
  3. Determinar si el inventario es suficiente o si es necesario reabastecer.

- **Salida:**
  - Un mensaje indicando si cada reactivo tiene suficiente stock o necesita ser reabastecido.

---

## Reglas identificadas

1. Cada reactivo debe tener una cantidad disponible y una cantidad mínima requerida.
2. Si la cantidad disponible es mayor o igual a la cantidad mínima, el inventario es suficiente.
3. Si la cantidad disponible es menor que la cantidad mínima, se debe reabastecer el inventario.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    nombre: "Ácido Clorhídrico",
    cantidad: 8,
    minimo: 5
}
```

**Resultado esperado:**

```text
Ácido Clorhídrico: Stock suficiente.
```

---

### Caso borde

**Entrada:**

```javascript
{
    nombre: "Hidróxido de Sodio",
    cantidad: 5,
    minimo: 5
}
```

**Resultado esperado:**

```text
Hidróxido de Sodio: Stock suficiente.
```

> Este es un caso borde porque la cantidad disponible es **exactamente igual** al mínimo requerido. El programa debe considerar que el inventario aún es suficiente.

---

## Explicación final

La solución funciona porque analiza el inventario de cada reactivo químico comparando la cantidad disponible con la cantidad mínima requerida. Mediante una estructura `if...else`, determina si el stock es suficiente o si es necesario realizar un reabastecimiento. De esta manera se implementa un **inventario lógico**, donde las decisiones se toman a partir de reglas de comparación entre cantidades.

---

## Sugerencia

Cuando trabajes con **inventarios lógicos**, define primero el valor mínimo que debe mantenerse en existencia. Luego compara la cantidad disponible con ese mínimo utilizando operadores de comparación (`>=`, `<`) para decidir si el inventario es suficiente o necesita reposición.