# Lógica General 001 - Clasificación por reglas

## Estudiante

Stefani Sánchez

---

## ¿Cómo pensé el problema?

Primero identifiqué las entradas y salidas.

### Entradas

- Lista de elementos (`items`).
- Nivel de prioridad.

### Salidas

- Acción.
- Motivo.

Luego convertí las instrucciones en reglas antes de programar.

---

## Reglas aplicadas

1. Si la prioridad es **alta** y existe un elemento **bloqueado**, la acción será **revisar bloqueado**.
2. Si no hay bloqueados pero existe un elemento **pendiente**, la acción será **revisar pendiente**.
3. Si solo existen elementos **aprobados**, se indica que no hay acciones pendientes.
4. Si la lista está vacía, se informa que no existen tareas.

---

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

---

## Casos probados

### Caso normal

Entrada

```text
items = ["aprobado", "pendiente", "bloqueado"]
prioridad = alta
```

Resultado esperado

```text
Acción: revisar bloqueado
```

### Caso borde

Entrada

```text
items = []
prioridad = alta
```

Resultado esperado

```text
Sin acción
No se recibieron tareas.
```

---

## Conclusión

La solución aplica correctamente las reglas del problema y contempla un caso borde cuando la lista de elementos está vacía.