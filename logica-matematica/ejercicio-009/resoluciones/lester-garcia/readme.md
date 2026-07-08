# Plantilla de solucion

## Analisis

- **Entrada:**
  - La duracion de una pelicula en minutos.

- **Proceso:**
  - Calcular el residuo al dividir la duracion entre 10.
  - Verificar si el residuo es igual a cero.
  - Determinar el estado segun el resultado.

- **Salida:**
  - Duracion.
  - Residuo.
  - Estado.
  - Explicacion del resultado.

## Reglas identificadas

1. El residuo se obtiene utilizando el operador modulo (%).
2. Si el residuo es igual a 0, la duracion es divisible entre 10 y el estado es **duracion exacta**.
3. Si el residuo es diferente de 0, el estado es **duracion ajustada**.

## Pruebas

### Caso normal

**Entrada:**

duracion: 126

**Resultado esperado:**

duracion: 126

residuo: 6

estado: duracion ajustada

explicacion: se utilizo el operador modulo para verificar si la duracion es divisible entre 10.

### Caso borde

**Entrada:**

duracion: 120

**Resultado esperado:**

duracion: 120

residuo: 0

estado: duracion exacta

explicacion: se utilizo el operador modulo para verificar si la duracion es divisible entre 10.

## Explicacion final

La solucion recibe la duracion de una pelicula y utiliza el operador modulo para calcular el residuo de la division entre 10. Si el residuo es cero significa que la duracion es divisible exactamente entre 10; en caso contrario, no lo es. Con esta comprobacion se determina el estado correspondiente y se muestran todos los resultados solicitados.