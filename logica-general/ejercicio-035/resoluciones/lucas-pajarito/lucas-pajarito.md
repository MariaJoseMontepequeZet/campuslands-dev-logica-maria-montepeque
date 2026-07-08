# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de dibujos digitales con la siguiente información:
    - Autor.
    - Cantidad de capas utilizadas.

- **Proceso:**
  1. Recorrer la lista de dibujos.
  2. Leer la cantidad de capas utilizadas.
  3. Comparar la cantidad de capas con el límite permitido.
  4. Mostrar si el dibujo cumple o no con la regla establecida.

- **Salida:**
  - El nombre del autor.
  - La cantidad de capas utilizadas.
  - El resultado de la validación.

---

## Reglas identificadas

1. Cada dibujo debe registrar la cantidad de capas utilizadas.
2. El número máximo permitido es de **10 capas**.
3. Si el dibujo utiliza **10 capas o menos**, cumple la regla.
4. Si utiliza **más de 10 capas**, no cumple con la regla del proyecto.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "autor": "Carlos",
    "capas": 8
}
```

**Resultado esperado**

```text
Autor: Carlos
Capas utilizadas: 8
Resultado: El dibujo cumple con las reglas del proyecto.
```

---

### Caso borde

**Entrada**

```python
{
    "autor": "Miguel",
    "capas": 10
}
```

**Resultado esperado**

```text
Autor: Miguel
Capas utilizadas: 10
Resultado: El dibujo cumple con las reglas del proyecto.
```

> Este es un caso borde porque el dibujo utiliza exactamente el número máximo de capas permitido. El programa debe considerar este caso como válido, ya que la regla acepta **10 capas o menos**.

---

## Explicación final

La solución funciona porque recorre la lista de dibujos digitales y compara la cantidad de capas utilizadas con el límite permitido. Mediante una estructura `if...else`, determina si cada dibujo cumple o no con la regla de negocio establecida. De esta forma se garantiza que todos los proyectos respeten la cantidad máxima de capas definida.

---

## Sugerencia

Antes de programar una **regla de negocio**, identifica claramente cuál es el límite o condición que debe cumplirse. Luego utiliza una estructura condicional para validar cada registro y mostrar si cumple o no con la política establecida.