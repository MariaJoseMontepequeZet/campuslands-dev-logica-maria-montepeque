# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de motos con la siguiente información:
    - Marca.
    - Modelo.
    - Año.
    - Estado del motor.

- **Proceso:**
  1. Recorrer la lista de motos.
  2. Evaluar el estado del motor de cada una.
  3. Si el estado es **Excelente** o **Bueno**, indicar que la moto es apta para seguir en uso.
  4. Si el estado es **Regular** o **Malo**, recomendar el cambio del motor.

- **Salida:**
  - Un mensaje indicando si la moto puede seguir utilizándose o si necesita un cambio de motor.

---

## Reglas identificadas

1. Cada moto debe tener marca, modelo, año y estado del motor.
2. Si el estado del motor es **Excelente** o **Bueno**, la moto es apta para seguir en uso.
3. Si el estado del motor es **Regular** o **Malo**, se recomienda cambiar el motor.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "marca": "Honda",
    "modelo": "CB190R",
    "estado_motor": "Bueno"
}
```

**Resultado esperado**

```text
Honda CB190R: Motor apto para seguir en uso.
```

---

### Caso borde

**Entrada**

```python
{
    "marca": "Suzuki",
    "modelo": "Gixxer 150",
    "estado_motor": "Regular"
}
```

**Resultado esperado**

```text
Suzuki Gixxer 150: Se recomienda cambiar el motor.
```

> Este es un caso borde porque el estado **Regular** representa el límite entre un motor que aún funciona y uno que ya requiere reemplazo.

---

## Explicación final

La solución funciona porque recorre la lista de motos y evalúa el estado del motor de cada una mediante una estructura `if...else`. Si el motor está en estado **Excelente** o **Bueno**, la moto puede seguir utilizándose. Si el estado es **Regular** o **Malo**, el programa recomienda cambiar el motor. De esta manera, la decisión se toma aplicando las reglas definidas para el inventario.

---

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar. En este reto, la regla principal consiste en evaluar el estado del motor para decidir si la moto puede seguir en funcionamiento o si necesita un cambio de motor.