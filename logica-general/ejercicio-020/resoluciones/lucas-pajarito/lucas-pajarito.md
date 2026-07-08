# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de comidas urbanas con la siguiente información:
    - Nombre del producto.
    - Precio.
    - Disponibilidad.
  - El presupuesto disponible del cliente.

- **Proceso:**
  1. Recorrer el arreglo de comidas.
  2. Verificar si cada producto está disponible.
  3. Comparar el precio con el presupuesto del cliente.
  4. Determinar cuáles son las mejores opciones de compra.

- **Salida:**
  - Un mensaje indicando si la comida puede comprarse, no está disponible o supera el presupuesto.

---

## Reglas identificadas

1. La comida debe estar disponible para poder seleccionarse.
2. El precio debe ser menor o igual al presupuesto del cliente.
3. Si ambas condiciones se cumplen, la comida es una opción recomendada.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    nombre: "Arepa Mixta",
    precio: 40,
    disponible: true
}

Presupuesto = 40
```

**Resultado esperado:**

```text
Arepa Mixta: Es una buena opción para comprar.
```

---

### Caso borde

**Entrada:**

```javascript
{
    nombre: "Pizza Personal",
    precio: 55,
    disponible: true
}

Presupuesto = 40
```

**Resultado esperado:**

```text
Pizza Personal: Supera el presupuesto disponible.
```

> Este es un caso borde porque la comida está disponible, pero su precio excede el presupuesto del cliente. El programa debe descartarla como opción de compra.

---

## Explicación final

La solución funciona porque analiza cada comida urbana considerando dos criterios: la disponibilidad del producto y el presupuesto del cliente. Mediante una estructura `if...else if...else`, determina si la comida puede seleccionarse, si no está disponible o si su precio supera el presupuesto. De esta manera se implementa una **estrategia de selección**, donde se eligen únicamente las opciones que cumplen con las condiciones establecidas.

---

## Sugerencia

Cuando un problema requiera una **estrategia de selección**, identifica los criterios que debe cumplir cada opción antes de tomar una decisión. Después evalúa esos criterios mediante condiciones lógicas para seleccionar únicamente las alternativas más adecuadas.