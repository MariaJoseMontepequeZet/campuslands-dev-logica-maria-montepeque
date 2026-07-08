# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los puntajes obtenidos por un equipo en el torneo.

- **Proceso:**
  - Sumar todos los puntajes.
  - Calcular el promedio.
  - Ordenar los puntajes de menor a mayor.
  - Obtener la mediana.
  - Clasificar el rendimiento según el promedio.

- **Salida:**
  - Promedio.
  - Mediana.
  - Categoría.
  - Explicación del resultado.

## Reglas identificadas

1. El promedio se obtiene sumando todos los puntajes y dividiendo entre la cantidad de datos.
2. La mediana corresponde al valor central del arreglo una vez ordenado.
3. Si el promedio es mayor o igual a 85, la categoría es **alto nivel**; en caso contrario, es **nivel intermedio**.

## Pruebas

### Caso normal

**Entrada:**

puntajes: [82, 76, 91, 87, 94]

**Resultado esperado:**

promedio: 86

mediana: 87

categoria: alto nivel

explicacion: se calculo el promedio y la mediana de los puntajes para evaluar el rendimiento.

### Caso borde

**Entrada:**

puntajes: [70]

**Resultado esperado:**

promedio: 70

mediana: 70

categoria: nivel intermedio

explicacion: se calculo el promedio y la mediana de los puntajes para evaluar el rendimiento.

## Explicacion final

La solucion procesa el arreglo de puntajes calculando primero el promedio mediante la suma de todos los valores y su division entre la cantidad de elementos. Despues ordena el arreglo para identificar la mediana, que representa el valor central. Finalmente compara el promedio con el umbral establecido para determinar la categoria del equipo y presenta todos los resultados solicitados.