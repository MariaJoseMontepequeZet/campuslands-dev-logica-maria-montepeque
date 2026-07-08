# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de vehículos con la siguiente información:
    - Propietario.
    - Vehículo.
    - Problema reportado.
    - Nivel de prioridad (Alta, Media o Baja).

- **Proceso:**
  1. Recorrer la lista de vehículos.
  2. Evaluar el nivel de prioridad de cada reparación.
  3. Determinar el orden en que debe atenderse cada vehículo.
  4. Mostrar un mensaje indicando la prioridad asignada.

- **Salida:**
  - Un mensaje indicando si el vehículo debe atenderse inmediatamente, después de las prioridades altas o puede esperar su turno.

---

## Reglas identificadas

1. Si la prioridad es **Alta**, el vehículo debe atenderse inmediatamente.
2. Si la prioridad es **Media**, el vehículo debe atenderse después de los casos de prioridad alta.
3. Si la prioridad es **Baja**, el vehículo puede esperar su turno.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "propietario": "Ana López",
    "vehiculo": "Honda Civic",
    "problema": "Frenos desgastados",
    "prioridad": "Alta"
}
```

**Resultado esperado**

```text
Honda Civic: Atención inmediata.
```

---

### Caso borde

**Entrada**

```python
{
    "propietario": "Luis Gómez",
    "vehiculo": "Mazda 3",
    "problema": "Revisión del motor",
    "prioridad": "Media"
}
```

**Resultado esperado**

```text
Mazda 3: Atender después de las prioridades altas.
```

> Este es un caso borde porque la prioridad **Media** representa el nivel intermedio entre una reparación urgente y una que puede esperar.

---

## Explicación final

La solución funciona porque recorre la lista de vehículos y analiza la prioridad asignada a cada reparación. Mediante una estructura `if`, `elif` y `else`, determina el orden de atención y muestra un mensaje indicando cuándo debe atenderse cada vehículo. De esta manera se implementa un sistema sencillo de **ordenamiento de prioridades** para un taller mecánico.

---

## Sugerencia

Antes de programar, identifica los niveles de prioridad y define qué acción corresponde a cada uno. Luego convierte esas reglas en condiciones utilizando `if`, `elif` y `else` para que el programa pueda decidir automáticamente el orden de atención.