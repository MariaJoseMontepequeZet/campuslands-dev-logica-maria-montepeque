# logica matemática 020 - simulaciones con formulas

## Análisis

**Entrada:**

* Un arreglo con comidas urbanas, su precio y la cantidad vendida.

**Proceso:**

* Recorrer la lista de comidas.
* Calcular el total de cada venta usando la fórmula **precio × cantidad**.
* Sumar el total de todas las ventas.
* Clasificar cada venta como alta o baja.

**Salida:**

* Mostrar el total de cada venta.
* Mostrar si la venta es alta o baja.
* Mostrar el total general de ventas.

## Reglas identificadas

* Si no hay comidas, mostrar un mensaje.
* El total de la venta se calcula con la fórmula **precio × cantidad**.
* Si la venta es de **Q100 o más**, se considera alta.
* Si la venta es menor de **Q100**, se considera baja.
* Sumar todas las ventas para obtener el total general.

## Pruebas

### Caso normal

**Entrada:**

* Hamburguesa: Q40 × 2.
* Tacos: Q25 × 3.
* Pizza: Q60 × 1.

**Resultado esperado:**

* Hamburguesa: Venta baja Q80.
* Tacos: Venta baja Q75.
* Pizza: Venta baja Q60.
* Total de ventas: Q215.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay ventas para calcular."

## Explicación final

La solución funciona porque recorre todas las comidas, aplica la fórmula **precio × cantidad** para calcular el total de cada venta, acumula el total general y clasifica las ventas según las reglas establecidas.
