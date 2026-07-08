# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de participantes con:
    - Nombre.
    - Altura del salto en metros.

- **Proceso:**
  1. Recorrer la lista de participantes.
  2. Leer la altura del salto de cada uno.
  3. Comparar la altura con los rangos establecidos.
  4. Mostrar la clasificación correspondiente.

- **Salida:**
  - El nombre del participante.
  - La altura del salto.
  - La clasificación del salto.

---

## Reglas identificadas

1. Si la altura es **4000 metros o más**, el salto es de gran altitud.
2. Si la altura está entre **3000 y 3999 metros**, el salto es de altitud media.
3. Si la altura es menor de **3000 metros**, el salto es de baja altitud.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "participante": "Sofía",
    "altura": 4500
}
```

**Resultado esperado**

```text
Participante: Sofía
Altura del salto: 4500 metros
Resultado: Salto de gran altitud.
```

---

### Caso borde

**Entrada**

```python
{
    "participante": "Andrés",
    "altura": 3000
}
```

**Resultado esperado**

```text
Participante: Andrés
Altura del salto: 3000 metros
Resultado: Salto de altitud media.
```

> Este es un caso borde porque la altura del salto es exactamente **3000 metros**, que corresponde al límite inferior de la categoría de altitud media. El programa debe clasificar correctamente este caso.

---

## Explicación final

La solución funciona porque recorre la lista de participantes y evalúa la altura de cada salto mediante una estructura `if`, `elif` y `else`. Según el rango en el que se encuentre la altura, el programa asigna una clasificación y la muestra junto con los datos del participante. De esta manera se resuelve un caso de **resolución de casos**, donde cada situación recibe una respuesta diferente según las condiciones establecidas.

---

## Sugerencia

Cuando un problema tenga **varios escenarios posibles**, identifica los rangos o condiciones que diferencian cada caso. Después utiliza estructuras condicionales para evaluar cada situación y mostrar el resultado correspondiente.