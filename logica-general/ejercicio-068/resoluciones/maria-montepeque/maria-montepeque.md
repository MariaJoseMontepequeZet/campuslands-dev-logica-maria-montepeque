# Ejercicio 068 - Flujos paso a paso

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente del arreglo aplicando un orden de prioridad, donde `bloqueado` representa el mayor riesgo.
- Salida: un objeto con la `accion` a tomar y el `motivo` que la justifica.

## Reglas identificadas

1. Si existe al menos un item en estado `bloqueado`, ese estado domina sobre cualquier otro.
2. Si no hay bloqueados pero existe algun `pendiente`, ese estado es el mas urgente.
3. Si todos los items estan `aprobado`, no se requiere ninguna accion.
4. Un arreglo vacio o invalido no tiene estado que evaluar.
5. Un estado que no este en el mapa de prioridades no debe tratarse como valido.

## Pruebas

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso borde

Entrada:

```text
items: []
```

Resultado esperado:

```text
accion: sin accion
motivo: no hay items para evaluar.
```

Casos adicionales verificados:

- `["aprobado", "pendiente"]` devuelve `revisar pendiente`, ya que no hay bloqueados.
- `["aprobado", "aprobado"]` devuelve `ninguna accion requerida`.
- `["en-revision", "archivado"]` devuelve `sin accion` por estados no reconocidos.
- `["x", "bloqueado", "aprobado"]` devuelve `revisar bloqueado`, ignorando el estado invalido.

## Explicacion final

La solucion evita condicionales anidados usando un mapa `PRIORIDADES` que asigna un numero de urgencia a cada estado. Con un unico `reduce` se recorre el arreglo y se conserva el estado con mayor prioridad. La accion y el motivo se obtienen de objetos separados (`ACCIONES` y `MOTIVOS`), lo que mantiene la logica de decision independiente del texto que se muestra al usuario. Antes de responder se valida que el arreglo exista y tenga elementos, y que el estado ganador este realmente reconocido, evitando resultados incorrectos con datos vacios o invalidos.