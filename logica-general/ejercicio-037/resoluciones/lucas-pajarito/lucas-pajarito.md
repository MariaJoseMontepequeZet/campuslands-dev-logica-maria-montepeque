# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de proyectos de arquitectura 3D con:
    - Nombre del proyecto.
    - Estado del presupuesto.
    - Disponibilidad del terreno.

- **Proceso:**
  1. Recorrer la lista de proyectos.
  2. Evaluar si existe presupuesto disponible.
  3. Evaluar si el terreno está disponible.
  4. Tomar una decisión según la combinación de ambas condiciones.
  5. Mostrar el resultado para cada proyecto.

- **Salida:**
  - El nombre del proyecto.
  - La decisión correspondiente según las condiciones evaluadas.

---

## Reglas identificadas

1. Si hay presupuesto y terreno, el proyecto puede iniciar.
2. Si hay presupuesto pero no hay terreno, primero debe adquirirse el terreno.
3. Si no hay presupuesto pero existe terreno, primero debe aprobarse el presupuesto.
4. Si no hay presupuesto ni terreno, el proyecto no puede iniciar.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Casa Familiar",
    "presupuesto": True,
    "terreno": True
}
```

**Resultado esperado**

```text
Proyecto: Casa Familiar
Resultado: El proyecto puede iniciar.
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Hotel",
    "presupuesto": False,
    "terreno": False
}
```

**Resultado esperado**

```text
Proyecto: Hotel
Resultado: El proyecto no puede iniciar.
```

> Este es un caso borde porque ninguna de las condiciones necesarias se cumple. El programa debe identificar correctamente esta combinación y mostrar que el proyecto no puede comenzar.

---

## Explicación final

La solución funciona porque utiliza una **tabla de decisión** basada en dos condiciones: la disponibilidad de presupuesto y la existencia de un terreno. Mediante operadores lógicos (`and` y `not`) y estructuras condicionales (`if`, `elif` y `else`), el programa analiza cada combinación posible y muestra la decisión correspondiente para cada proyecto.

---

## Sugerencia

Cuando resuelvas problemas con **tablas de decisión**, identifica primero todas las combinaciones posibles de las condiciones. Después implementa cada combinación utilizando operadores lógicos y estructuras condicionales para obtener una respuesta correcta en cada caso.