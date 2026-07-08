# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de películas de miedo con la siguiente información:
    - Título.
    - Estado de reproducción.

- **Proceso:**
  1. Recorrer la lista de películas.
  2. Leer el estado de cada película.
  3. Comparar el estado con las opciones disponibles.
  4. Mostrar un mensaje correspondiente al estado actual.

- **Salida:**
  - Un mensaje indicando el estado de reproducción de cada película.

---

## Reglas identificadas

1. Si el estado es **Pendiente**, la película aún no ha comenzado.
2. Si el estado es **Reproduciendo**, la película se encuentra en reproducción.
3. Si el estado es **Pausada**, la reproducción está detenida temporalmente.
4. Si el estado es **Finalizada**, la película ya terminó.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "titulo": "It",
    "estado": "Reproduciendo"
}
```

**Resultado esperado**

```text
It: La película se está reproduciendo.
```

---

### Caso borde

**Entrada**

```python
{
    "titulo": "La Monja",
    "estado": "Pausada"
}
```

**Resultado esperado**

```text
La Monja: La reproducción está en pausa.
```

> Este es un caso borde porque el estado **Pausada** representa una situación intermedia: la película inició su reproducción, pero aún no ha finalizado. El programa debe reconocer correctamente este estado.

---

## Explicación final

La solución funciona porque analiza el estado de cada película mediante una estructura `if`, `elif` y `else`. Dependiendo del valor almacenado en el atributo **estado**, el programa muestra un mensaje que representa la situación actual de la reproducción. De esta manera se implementa una **simulación de estados**, donde una misma película puede encontrarse en diferentes fases de reproducción.

---

## Sugerencia

Cuando un problema implique una **simulación de estados**, identifica primero todos los estados posibles del sistema. Luego representa cada uno mediante condiciones para que el programa pueda responder correctamente según el estado actual.