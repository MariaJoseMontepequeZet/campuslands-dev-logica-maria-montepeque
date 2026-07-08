# Plantilla de solucion

## Analisis

- **Entrada:**
  - Una velocidad expresada en kilómetros por hora.

- **Proceso:**
  - Convertir la velocidad de kilómetros por hora a metros por segundo.
  - Comparar la velocidad original con el límite establecido.
  - Asignar la categoría correspondiente.

- **Salida:**
  - Velocidad en kilómetros por hora.
  - Velocidad en metros por segundo.
  - Categoría.
  - Explicación del resultado.

## Reglas identificadas

1. La velocidad en metros por segundo se obtiene dividiendo la velocidad en kilómetros por hora entre 3.6.
2. Si la velocidad es mayor o igual a 300 km/h, la categoría es **hiperdeportivo**.
3. Si la velocidad es menor a 300 km/h, la categoría es **deportivo**.

## Pruebas

### Caso normal

**Entrada:**

velocidadKmh: 360

**Resultado esperado:**

velocidad_kmh: 360

velocidad_ms: 100

categoria: hiperdeportivo

explicacion: se convirtio la velocidad de kilometros por hora a metros por segundo utilizando el factor de conversion.

### Caso borde

**Entrada:**

velocidadKmh: 180

**Resultado esperado:**

velocidad_kmh: 180

velocidad_ms: 50

categoria: deportivo

explicacion: se convirtio la velocidad de kilometros por hora a metros por segundo utilizando el factor de conversion.

## Explicacion final

La solucion recibe una velocidad en kilometros por hora y la transforma a metros por segundo utilizando el factor de conversion correspondiente. Luego compara la velocidad original con el limite establecido para clasificar el vehiculo y presenta todos los resultados solicitados.