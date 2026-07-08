# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de pasos para visualizar una película de ciencia ficción.
  - Cada paso contiene:
    - Título de la película.
    - Número del paso.
    - Acción que debe realizar el usuario.

- **Proceso:**
  1. Recorrer la lista de pasos.
  2. Leer el número de cada paso.
  3. Mostrar la acción correspondiente respetando el orden establecido.
  4. Continuar hasta completar todo el flujo.

- **Salida:**
  - Una secuencia ordenada de instrucciones para visualizar la película.

---

## Reglas identificadas

1. Los pasos deben ejecutarse en el orden indicado.
2. Cada paso debe contener una acción clara.
3. No se debe omitir ningún paso del flujo.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "paso": 3,
    "accion": "Presionar el botón de reproducir."
}
```

**Resultado esperado**

```text
Paso 3: Presionar el botón de reproducir.
```

---

### Caso borde

**Entrada**

```python
peliculas = []
```

**Resultado esperado**

```text
=== FLUJO PARA VER UNA PELÍCULA DE CIENCIA FICCIÓN ===
```

> Este es un caso borde porque no existen pasos registrados. El programa debe ejecutarse correctamente sin generar errores, aunque no haya acciones para mostrar.

---

## Explicación final

La solución funciona porque recorre la lista de pasos utilizando un ciclo `for` y muestra cada acción siguiendo el orden establecido. De esta manera se representa un **flujo paso a paso**, donde cada instrucción depende de la anterior y todas deben ejecutarse de forma secuencial para completar correctamente el proceso.

---

## Sugerencia

Cuando trabajes con **flujos paso a paso**, organiza las acciones en el orden en que deben realizarse. Luego recorre la lista secuencialmente para garantizar que cada paso se ejecute sin alterar el proceso.