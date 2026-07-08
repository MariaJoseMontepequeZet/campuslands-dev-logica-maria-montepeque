# Plantilla de solucion

## Analisis

- **Entrada:**
  - Distancia recorrida.
  - Cantidad de combustible consumido.

- **Proceso:**
  - Calcular el rendimiento dividiendo la distancia entre el combustible consumido.
  - Redondear el resultado al entero más cercano.
  - Comparar el valor redondeado con el límite establecido.
  - Determinar la categoría del viaje.

- **Salida:**
  - Rendimiento.
  - Rendimiento redondeado.
  - Categoría.
  - Explicación del resultado.

## Reglas identificadas

1. El rendimiento se calcula dividiendo la distancia recorrida entre el combustible consumido.
2. El rendimiento debe redondearse al entero más cercano utilizando `Math.round()`.
3. Si el rendimiento redondeado es mayor o igual a 25, la categoría es **viaje eficiente**; de lo contrario, es **viaje estandar**.

## Pruebas

### Caso normal

**Entrada:**

distancia: 348.76

consumo: 13.45

**Resultado esperado:**

rendimiento: 25.93085501858736

rendimiento_redondeado: 26

categoria: viaje eficiente

explicacion: se calculo el rendimiento del viaje y se redondeo al entero mas cercano.

### Caso borde

**Entrada:**

distancia: 120.5

consumo: 5

**Resultado esperado:**

rendimiento: 24.1

rendimiento_redondeado: 24

categoria: viaje estandar

explicacion: se calculo el rendimiento del viaje y se redondeo al entero mas cercano.

## Explicacion final

La solucion recibe la distancia recorrida y el combustible consumido para calcular el rendimiento del viaje. Luego utiliza `Math.round()` para obtener el valor entero mas cercano y compara ese resultado con el limite establecido. Finalmente determina la categoria correspondiente y muestra todos los datos solicitados.