# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de instrucciones del viaje con la siguiente información:
    - Número del paso.
    - Descripción de la instrucción.

- **Proceso:**
  1. Recorrer la lista de instrucciones.
  2. Leer el número de cada paso.
  3. Mostrar la instrucción correspondiente respetando el orden establecido.
  4. Continuar hasta completar todos los pasos del viaje.

- **Salida:**
  - Una lista organizada con las instrucciones que el viajero debe seguir antes de abordar su vuelo.

---

## Reglas identificadas

1. Las instrucciones deben mostrarse en el orden de los pasos.
2. Cada paso debe contener una descripción clara de la acción a realizar.
3. No se debe omitir ninguna instrucción durante el recorrido.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "paso": 3,
    "instruccion": "Pasar por el control de seguridad."
}
```

**Resultado esperado**

```text
Paso 3: Pasar por el control de seguridad.
```

---

### Caso borde

**Entrada**

```python
itinerario = []
```

**Resultado esperado**

```text
=== INSTRUCCIONES DEL VIAJE ===
```

> Este es un caso borde porque el itinerario no contiene instrucciones. El programa debe ejecutarse correctamente sin generar errores, aunque no existan pasos para mostrar.

---

## Explicación final

La solución funciona porque recorre la lista de instrucciones utilizando un ciclo `for` y muestra cada paso en el orden en que fue registrado. De esta manera se implementa un caso de **lectura de instrucciones**, donde el objetivo es presentar una secuencia organizada de acciones para que el usuario complete correctamente el proceso de viaje.

---

## Sugerencia

Cuando un problema consista en **leer instrucciones**, organiza primero las acciones en el orden en que deben ejecutarse. Después recorre la lista de forma secuencial para mostrar cada paso de manera clara y facilitar el seguimiento del procedimiento.