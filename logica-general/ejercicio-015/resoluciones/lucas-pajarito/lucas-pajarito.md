# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de proyectos de dibujo digital con la siguiente información:
    - Autor.
    - Nombre del proyecto.
    - Formato del archivo.
    - Resolución en DPI.

- **Proceso:**
  1. Recorrer el arreglo de proyectos.
  2. Verificar que el formato sea **PNG** o **PDF**.
  3. Verificar que la resolución sea de **300 DPI o superior**.
  4. Mostrar si el proyecto cumple o no con las reglas establecidas.

- **Salida:**
  - Un mensaje indicando si cada proyecto puede publicarse o necesita ser corregido.

---

## Reglas identificadas

1. El formato permitido es **PNG** o **PDF**.
2. La resolución mínima permitida es **300 DPI**.
3. Solo los proyectos que cumplan ambas reglas pueden publicarse.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    autor: "Carlos",
    proyecto: "Logo Empresarial",
    formato: "PNG",
    resolucion: 300
}
```

**Resultado esperado:**

```text
Logo Empresarial: Cumple con las reglas de publicación.
```

---

### Caso borde

**Entrada:**

```javascript
{
    autor: "Laura",
    proyecto: "Ilustración",
    formato: "JPG",
    resolucion: 150
}
```

**Resultado esperado:**

```text
Ilustración: No cumple con las reglas de publicación.
```

> Este es un caso borde porque el proyecto incumple dos reglas de negocio: el formato no es permitido y la resolución es inferior a la mínima requerida.

---

## Explicación final

La solución funciona porque evalúa cada proyecto de dibujo digital de acuerdo con las reglas establecidas por la empresa. Primero verifica que el formato del archivo sea válido y luego comprueba que la resolución sea de al menos **300 DPI**. Solo cuando ambas condiciones se cumplen, el proyecto puede publicarse. De esta manera se implementan correctamente las **reglas de negocio** definidas para la entrega de los diseños.

---

## Sugerencia

Antes de programar, identifica todas las reglas de negocio que debe cumplir un proyecto. Después conviértelas en condiciones utilizando operadores lógicos (`&&`, `||`) y estructuras `if...else` para validar automáticamente cada caso.