# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo de participantes con sus puntajes.
  - Un valor de bono.
  - Un valor de penalización.

- **Proceso:**
  - Identificar el puntaje más alto del arreglo.
  - Sumar el bono.
  - Restar la penalización.
  - Determinar la clasificación según el puntaje final.

- **Salida:**
  - Puntaje final.
  - Clasificación.
  - Explicación del resultado.

## Reglas identificadas

1. Se debe encontrar el puntaje más alto de los participantes.
2. El puntaje final se obtiene sumando el bono y restando la penalización.
3. Si el puntaje final es mayor o igual a 25, la clasificación es **competitivo**; en caso contrario, es **basico**.

## Pruebas

### Caso normal

**Entrada:**

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3

**Resultado esperado:**

puntaje_final: 35

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.

### Caso borde

**Entrada:**

participantes: [5]

bono: 2

penalizacion: 3

**Resultado esperado:**

puntaje_final: 4

clasificacion: basico

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.

## Explicacion final

La solucion identifica primero el puntaje mas alto entre los participantes. Despues aplica las operaciones indicadas por el problema: suma el bono y resta la penalizacion. Finalmente compara el puntaje obtenido con el umbral definido para asignar la clasificacion correspondiente y muestra todos los resultados solicitados.