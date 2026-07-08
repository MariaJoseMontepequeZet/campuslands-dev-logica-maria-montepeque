# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de viajes con la siguiente información:
    - Destino.
    - Costo del hotel.
    - Costo del transporte.
    - Costo de la alimentación.

- **Proceso:**
  1. Recorrer la lista de viajes.
  2. Sumar el costo del hotel, transporte y alimentación.
  3. Mostrar el costo total de cada viaje.

- **Salida:**
  - El destino.
  - El costo total del viaje.

---

## Reglas identificadas

1. El costo total es la suma del hotel, transporte y alimentación.
2. Todos los costos deben expresarse en quetzales (Q).
3. El resultado corresponde al gasto total estimado para cada destino.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "destino": "Antigua Guatemala",
    "hotel": 850,
    "transporte": 250,
    "alimentacion": 300
}
```

**Resultado esperado**

```text
Destino: Antigua Guatemala
Total del viaje: Q1400
```

**Cálculo**

```text
850 + 250 + 300 = Q1400
```

---

### Caso borde

**Entrada**

```python
{
    "destino": "Viaje local",
    "hotel": 0,
    "transporte": 0,
    "alimentacion": 0
}
```

**Resultado esperado**

```text
Destino: Viaje local
Total del viaje: Q0
```

> Este es un caso borde porque todos los costos son iguales a **0**. El programa debe calcular correctamente el costo total sin producir errores.

---

## Explicación final

La solución funciona porque aplica una suma de los tres gastos principales de un viaje: hotel, transporte y alimentación. Para cada destino, el programa calcula el costo total utilizando operaciones aritméticas básicas y muestra el resultado de forma organizada. Esto permite estimar fácilmente el presupuesto necesario para cada viaje.

---

## Sugerencia

Cuando un problema implique **presupuestos o costos**, identifica todos los gastos que forman parte del cálculo. Después utiliza una suma para obtener el costo total y mostrar el resultado de manera clara.
