# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con las calificaciones de una pelicula.

- **Proceso:**
  - Recorrer cada calificacion.
  - Asignar una letra segun el valor de la calificacion.
  - Formar un patron de puntuacion.
  - Verificar si el patron contiene la secuencia requerida.
  - Asignar la categoria correspondiente.

- **Salida:**
  - Patron de puntuacion.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. Si una calificacion es mayor o igual a 9 se representa con **A**.
2. Si una calificacion esta entre 7 y 8 se representa con **B**; en otro caso se representa con **C**.
3. Si el patron contiene la secuencia **AAA**, la categoria es **excelente**; de lo contrario, es **recomendada**.

## Pruebas

### Caso normal

**Entrada:**

calificaciones: [9, 8, 10, 9, 7]

**Resultado esperado:**

patron: ABAAB

categoria: recomendada

explicacion: se genero un patron de puntuacion clasificando cada calificacion segun las reglas establecidas.

### Caso borde

**Entrada:**

calificaciones: [9, 9, 9]

**Resultado esperado:**

patron: AAA

categoria: excelente

explicacion: se genero un patron de puntuacion clasificando cada calificacion segun las reglas establecidas.

## Explicacion final

La solucion recorre el arreglo de calificaciones y convierte cada valor en una letra de acuerdo con el rango al que pertenece. Estas letras forman un patron que posteriormente se analiza para comprobar si contiene la secuencia **AAA**. Con base en esta verificacion se determina la categoria final y se muestran todos los resultados solicitados.