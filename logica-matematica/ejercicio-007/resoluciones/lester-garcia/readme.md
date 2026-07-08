# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de canciones.
  - Valor de incremento para generar la secuencia.

- **Proceso:**
  - Generar una secuencia numérica utilizando el incremento indicado.
  - Obtener el último valor de la secuencia.
  - Comparar el último valor con el límite establecido.
  - Determinar el estado de la playlist.

- **Salida:**
  - Secuencia generada.
  - Último valor.
  - Estado.
  - Explicación del resultado.

## Reglas identificadas

1. La secuencia se genera multiplicando cada posición por el incremento.
2. El último valor corresponde al último elemento de la secuencia.
3. Si el último valor es mayor o igual a 16, el estado es **playlist completa**; de lo contrario, es **playlist corta**.

## Pruebas

### Caso normal

**Entrada:**

canciones: 8

incremento: 2

**Resultado esperado:**

secuencia: [2, 4, 6, 8, 10, 12, 14, 16]

ultimo_valor: 16

estado: playlist completa

explicacion: se genero una secuencia numerica aumentando la cantidad indicada en cada posicion.

### Caso borde

**Entrada:**

canciones: 3

incremento: 2

**Resultado esperado:**

secuencia: [2, 4, 6]

ultimo_valor: 6

estado: playlist corta

explicacion: se genero una secuencia numerica aumentando la cantidad indicada en cada posicion.

## Explicacion final

La solucion recibe la cantidad de canciones y el incremento con el que se debe formar la secuencia numerica. Mediante un ciclo genera cada valor de la secuencia, obtiene el ultimo elemento y lo compara con el limite definido para determinar el estado de la playlist. Finalmente muestra la secuencia y los resultados obtenidos.