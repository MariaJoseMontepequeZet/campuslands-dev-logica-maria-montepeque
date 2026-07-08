# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de proyectos de arquitectura 3D con la siguiente información:
    - Nombre del proyecto.
    - Presupuesto aprobado (Sí o No).
    - Terreno disponible (Sí o No).

- **Proceso:**
  1. Recorrer el arreglo de proyectos.
  2. Evaluar si existe presupuesto aprobado.
  3. Evaluar si el terreno está disponible.
  4. Tomar una decisión según la combinación de ambas condiciones.

- **Salida:**
  - Un mensaje indicando el estado de cada proyecto.

---

## Reglas identificadas

1. Si hay presupuesto y terreno disponible, el proyecto es aprobado.
2. Si hay presupuesto pero no hay terreno, el proyecto queda en espera.
3. Si no hay presupuesto pero sí terreno, debe aprobarse el presupuesto.
4. Si no hay presupuesto ni terreno, el proyecto es rechazado.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    nombre: "Casa Moderna",
    presupuesto: true,
    terrenoDisponible: true
}
```

**Resultado esperado:**

```text
Casa Moderna: Proyecto aprobado para iniciar la construcción.
```

---

### Caso borde

**Entrada:**

```javascript
{
    nombre: "Hotel Boutique",
    presupuesto: false,
    terrenoDisponible: false
}
```

**Resultado esperado:**

```text
Hotel Boutique: Proyecto rechazado. No cumple con los requisitos.
```

> Este es un caso borde porque ninguna de las condiciones necesarias se cumple. El programa debe identificar correctamente esta combinación y rechazar el proyecto.

---

## Explicación final

La solución funciona porque utiliza una **tabla de decisión**, donde cada combinación de condiciones produce un resultado diferente. El programa evalúa si el proyecto cuenta con presupuesto aprobado y si el terreno está disponible. Dependiendo de esas dos condiciones, determina si el proyecto puede iniciar, debe esperar, necesita presupuesto o debe rechazarse.

---

## Sugerencia

Cuando un problema utiliza una **tabla de decisión**, primero identifica todas las combinaciones posibles de las condiciones. Después implementa cada combinación con `if`, `else if` y `else`, asegurándote de que todos los escenarios tengan una respuesta.