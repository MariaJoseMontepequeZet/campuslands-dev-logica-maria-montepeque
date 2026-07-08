# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de platillos con:
    - Nombre.
    - Categoría.
    - Disponibilidad.

- **Proceso:**
  1. Recorrer la lista de comidas.
  2. Leer la disponibilidad de cada platillo.
  3. Determinar si el platillo puede ser seleccionado.
  4. Mostrar el estado correspondiente.

- **Salida:**
  - El nombre del platillo.
  - La categoría.
  - El estado de disponibilidad.

---

## Reglas identificadas

1. Todo platillo debe pertenecer a una categoría.
2. Si el platillo está disponible, puede ser seleccionado.
3. Si el platillo no está disponible, no puede ser seleccionado.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Pizza Personal",
    "categoria": "Pizza",
    "disponible": True
}
```

**Resultado esperado**

```text
Platillo: Pizza Personal
Categoría: Pizza
Estado: Disponible para la venta.
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Hot Dog Especial",
    "categoria": "Hot Dog",
    "disponible": False
}
```

**Resultado esperado**

```text
Platillo: Hot Dog Especial
Categoría: Hot Dog
Estado: No disponible.
```

> Este es un caso borde porque el platillo existe en el menú, pero no está disponible para la venta. El programa debe identificar correctamente esta condición y evitar seleccionarlo.

---

## Explicación final

La solución funciona porque recorre la lista de platillos y evalúa la disponibilidad de cada uno mediante una estructura `if...else`. Si el platillo está disponible, el programa indica que puede ser seleccionado; de lo contrario, informa que no está disponible. De esta manera se implementa una **estrategia de selección**, permitiendo elegir únicamente los platillos que pueden ofrecerse al cliente.

---

## Sugerencia

Antes de aplicar una **estrategia de selección**, identifica el criterio que utilizarás para decidir entre las opciones disponibles. Luego evalúa ese criterio mediante una estructura condicional para seleccionar únicamente los elementos que cumplen con la condición establecida.