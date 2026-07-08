# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de peleadores con la siguiente información:
    - Nombre.
    - Categoría.
    - Edad.

- **Proceso:**
  1. Recorrer la lista de peleadores.
  2. Leer la información de cada participante.
  3. Mostrar los datos organizados.

- **Salida:**
  - Una lista organizada con el nombre, la categoría y la edad de cada peleador.

---

## Reglas identificadas

1. Cada peleador debe tener un nombre.
2. Cada peleador debe pertenecer a una categoría.
3. La lista debe mostrarse en el mismo orden en que fue registrada.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Carlos Pérez",
    "categoria": "Peso Ligero",
    "edad": 22
}
```

**Resultado esperado**

```text
Nombre: Carlos Pérez
Categoría: Peso Ligero
Edad: 22 años
```

---

### Caso borde

**Entrada**

```python
peleadores = []
```

**Resultado esperado**

```text
=== LISTA DE PELEADORES ===
```

> Este es un caso borde porque no existen peleadores registrados. El programa debe ejecutarse correctamente sin producir errores, aunque no haya información para mostrar.

---

## Explicación final

La solución funciona porque utiliza una lista de diccionarios para almacenar la información de los peleadores. Mediante un ciclo `for`, recorre cada elemento de la lista y muestra sus datos de forma organizada. De esta manera se resuelve un problema de **organización de listas**, ya que toda la información se presenta siguiendo el orden en que fue registrada.

---

## Sugerencia

Cuando trabajes con **organización de listas**, almacena la información en una estructura ordenada, como una lista de diccionarios. Después recórrela utilizando un ciclo para mostrar los datos de manera clara y organizada.
