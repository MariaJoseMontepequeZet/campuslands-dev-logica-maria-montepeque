# Logica matemática 016 - presupuestos y descuentos

## Análisis

**Entrada:**

* Un arreglo de proyectos de animación 3D con su presupuesto y tipo de proyecto.

**Proceso:**

* Recorrer la lista de proyectos.
* Aplicar un descuento según el tipo de proyecto.
* Calcular el precio final de cada uno.
* Sumar el total con y sin descuento.

**Salida:**

* Mostrar el precio final de cada proyecto.
* Mostrar el total general con y sin descuentos.

## Reglas identificadas

* Si no hay proyectos, mostrar un mensaje.
* Si el proyecto es **básico**, tiene 5% de descuento.
* Si es **medio**, tiene 10% de descuento.
* Si es **avanzado**, tiene 15% de descuento.
* El descuento se aplica sobre el presupuesto original.

## Pruebas

### Caso normal

**Entrada:**

* Intro 3D: $500 (básico)
* Logo animado: $800 (medio)
* Corto 3D: $1500 (avanzado)

**Resultado esperado:**

* Intro 3D: $475
* Logo animado: $720
* Corto 3D: $1275
* Total sin descuento: $2800
* Total con descuento: $2470

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`)

**Resultado esperado:**

* Mostrar el mensaje: "No hay proyectos registrados."

## Explicación final

La solución funciona porque recorre todos los proyectos de animación 3D, aplica el descuento según el tipo de proyecto, calcula el precio final y acumula los totales con y sin descuento. Al final, muestra un resumen general de los resultados.
