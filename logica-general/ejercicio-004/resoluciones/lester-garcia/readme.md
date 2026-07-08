# Plantilla de solucion

## Analisis

- Entrada:
  - Marca de la moto.
  - Año del modelo.
  - Estado de disponibilidad.

- Proceso:
  - Leer los datos de la moto.
  - Verificar si la moto está disponible.
  - Verificar si el modelo es del año 2020 o superior.
  - Si ambas condiciones se cumplen, indicar que la moto está disponible para la venta.
  - En caso contrario, indicar que no está disponible para la venta.

- Salida:
  - Un mensaje indicando si la moto está disponible para la venta o no.

## Reglas identificadas

1. La moto debe estar disponible.
2. El modelo debe ser del año 2020 o superior.
3. Solo si ambas condiciones se cumplen, la moto se considera disponible para la venta.

## Pruebas

### Caso normal

Entrada:

Marca: Yamaha

Modelo: 2022

Disponible: true

Resultado esperado:

La moto está disponible para la venta.

### Caso borde

Entrada:

Marca: Honda

Modelo: 2020

Disponible: true

Resultado esperado:

La moto está disponible para la venta.

## Explicacion final

La solución funciona porque recibe la información de la moto, verifica las dos condiciones establecidas mediante el operador lógico AND (&&) y determina si puede mostrarse como disponible para la venta. De esta forma, únicamente las motos que cumplen ambas reglas son aceptadas, garantizando un resultado correcto y verificable.