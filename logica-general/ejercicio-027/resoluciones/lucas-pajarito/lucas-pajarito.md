# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de canciones con la siguiente información:
    - Título.
    - Artista.
    - Duración en segundos.

- **Proceso:**
  1. Recorrer la lista de canciones.
  2. Verificar que el título no esté vacío.
  3. Verificar que el artista esté registrado.
  4. Verificar que la duración sea mayor que cero.
  5. Mostrar si la información es correcta o indicar la inconsistencia encontrada.

- **Salida:**
  - Un mensaje indicando si la información de cada canción es válida o cuál es el error encontrado.

---

## Reglas identificadas

1. Toda canción debe tener un título.
2. Toda canción debe tener un artista registrado.
3. La duración debe ser mayor que cero segundos.
4. Si todas las reglas se cumplen, la información de la canción es correcta.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "titulo": "Levitating",
    "artista": "Dua Lipa",
    "duracion": 203
}
```

**Resultado esperado**

```text
Levitating: Información correcta.
```

---

### Caso borde

**Entrada**

```python
{
    "titulo": "Believer",
    "artista": "Imagine Dragons",
    "duracion": 0
}
```

**Resultado esperado**

```text
Believer: La duración es inválida.
```

> Este es un caso borde porque la duración es exactamente **0 segundos**, lo cual no representa una canción válida. El programa debe detectar esta inconsistencia.

---

## Explicación final

La solución funciona porque recorre la lista de canciones y valida cada uno de los datos registrados. Primero verifica que exista un título, luego que el artista esté registrado y finalmente que la duración sea mayor que cero. Si alguna condición no se cumple, informa el error correspondiente; de lo contrario, indica que la información es correcta. De esta manera se resuelve un problema de **detección de inconsistencias**.

---

## Sugerencia

Cuando debas detectar inconsistencias, identifica primero todos los datos obligatorios y las condiciones que deben cumplir. Después valida cada una mediante estructuras `if`, `elif` y `else` para localizar fácilmente cualquier error en la información.