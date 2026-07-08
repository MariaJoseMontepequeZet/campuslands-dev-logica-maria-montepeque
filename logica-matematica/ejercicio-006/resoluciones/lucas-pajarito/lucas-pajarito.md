# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de autos hiperdeportivos con:
    - Marca.
    - Modelo.
    - Velocidad máxima.

- **Proceso:**
  1. Recorrer la lista de autos.
  2. Sumar la velocidad máxima de cada vehículo.
  3. Dividir la suma entre la cantidad de autos para obtener el promedio.
  4. Mostrar la información de cada auto y el promedio de velocidad.

- **Salida:**
  - La información de cada auto.
  - El promedio de velocidad máxima de todos los vehículos.

---

## Reglas identificadas

1. La velocidad máxima de cada auto debe ser un valor numérico.
2. Se deben sumar todas las velocidades máximas.
3. El promedio se obtiene dividiendo la suma de las velocidades entre la cantidad de autos.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "marca": "Bugatti",
    "modelo": "Chiron",
    "velocidad_maxima": 420
}
```

**Resultado esperado**

```text
Marca: Bugatti
Modelo: Chiron
Velocidad máxima: 420 km/h
```

**Cálculo del promedio**

```text
420 + 483 + 350 + 403 + 412 = 2068

2068 ÷ 5 = 413.60 km/h
```

**Resultado esperado**

```text
Promedio de velocidad máxima: 413.60 km/h
```

---

### Caso borde

**Entrada**

```python
autos = [
    {
        "marca": "Bugatti",
        "modelo": "Chiron",
        "velocidad_maxima": 0
    }
]
```

**Resultado esperado**

```text
Promedio de velocidad máxima: 0.00 km/h
```

> Este es un caso borde porque el vehículo tiene una velocidad máxima de **0 km/h**. El programa debe calcular correctamente el promedio sin generar errores.

---

## Explicación final

La solución funciona porque utiliza un **acumulador** para sumar las velocidades máximas de todos los autos hiperdeportivos. Una vez finalizado el recorrido de la lista, divide la suma total entre la cantidad de vehículos para obtener el promedio de velocidad máxima. Finalmente, muestra el promedio con dos decimales, permitiendo conocer el rendimiento promedio de los autos registrados.

---

## Sugerencia

Cuando necesites calcular un **promedio**, primero utiliza un acumulador para sumar todos los valores. Después divide el total entre la cantidad de elementos de la lista para obtener el resultado final. Este procedimiento es uno de los más utilizados en la lógica matemática y aritmética.