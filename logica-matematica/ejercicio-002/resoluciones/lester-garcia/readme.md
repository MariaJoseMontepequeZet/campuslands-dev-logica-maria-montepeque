# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de partidos jugados.
  - Cantidad de partidos ganados.

- **Proceso:**
  - Calcular el porcentaje de victorias.
  - Comparar el porcentaje con el valor establecido.
  - Asignar la categoría correspondiente.

- **Salida:**
  - Porcentaje de victorias.
  - Categoría del equipo.
  - Explicación del resultado.

## Reglas identificadas

1. El porcentaje de victorias se calcula dividiendo los partidos ganados entre los partidos jugados y multiplicando por 100.
2. Si el porcentaje es mayor o igual al 70%, la categoría es **alto rendimiento**.
3. Si el porcentaje es menor al 70%, la categoría es **en desarrollo**.

## Pruebas

### Caso normal

**Entrada:**

partidosJugados: 20

partidosGanados: 15

**Resultado esperado:**

porcentaje_victorias: 75

categoria: alto rendimiento

explicacion: se calculo el porcentaje de victorias respecto a los partidos jugados.

### Caso borde

**Entrada:**

partidosJugados: 10

partidosGanados: 0

**Resultado esperado:**

porcentaje_victorias: 0

categoria: en desarrollo

explicacion: se calculo el porcentaje de victorias respecto a los partidos jugados.

## Explicacion final

La solucion recibe la cantidad de partidos jugados y ganados. Luego calcula el porcentaje de victorias mediante una proporcion entre ambos valores. Finalmente compara el resultado con el porcentaje minimo requerido para determinar la categoria del equipo y muestra los datos solicitados.