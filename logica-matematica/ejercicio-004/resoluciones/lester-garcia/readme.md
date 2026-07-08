# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los precios de las motos del inventario.

- **Proceso:**
  - Recorrer el arreglo para encontrar el precio máximo.
  - Recorrer el arreglo para encontrar el precio mínimo.
  - Calcular el rango restando el precio mínimo al máximo.
  - Clasificar el inventario según el precio máximo.

- **Salida:**
  - Precio máximo.
  - Precio mínimo.
  - Rango de precios.
  - Categoría.
  - Explicación del resultado.

## Reglas identificadas

1. El precio máximo corresponde al valor más alto del inventario.
2. El rango se obtiene restando el precio mínimo al precio máximo.
3. Si el precio máximo es mayor o igual a 10000, la categoría es **inventario premium**; en caso contrario, es **inventario estandar**.

## Pruebas

### Caso normal

**Entrada:**

precios: [7800, 9200, 8500, 11000, 9700]

**Resultado esperado:**

precio_maximo: 11000

precio_minimo: 7800

rango: 3200

categoria: inventario premium

explicacion: se identificaron el precio maximo y minimo para calcular el rango de precios.

### Caso borde

**Entrada:**

precios: [9000]

**Resultado esperado:**

precio_maximo: 9000

precio_minimo: 9000

rango: 0

categoria: inventario estandar

explicacion: se identificaron el precio maximo y minimo para calcular el rango de precios.

## Explicacion final

La solucion recorre el arreglo de precios una sola vez para encontrar el valor maximo y el minimo. Con estos dos datos calcula el rango de precios mediante una resta. Finalmente evalua el precio maximo para determinar la categoria del inventario y muestra todos los resultados obtenidos.