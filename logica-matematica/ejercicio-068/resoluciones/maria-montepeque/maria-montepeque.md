# Solucion ejercicio 068 - patrones de puntuacion

## Analisis

- Entrada: arreglo `participantes`, valor `bono`, valor `penalizacion`.
- Proceso: se calcula la mediana de `participantes`, se suma el bono, se resta la penalizacion y se redondea hacia arriba.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. La mediana se obtiene ordenando `participantes`; si la cantidad es par se promedian los dos valores centrales.
2. `puntaje_final = Math.ceil(mediana + bono - penalizacion)`.
3. La clasificacion se define por rangos: `>= 25` competitivo, `>= 15` intermedio, el resto principiante.
4. Si `participantes` esta vacio, se retorna `puntaje_final: 0` con clasificacion `sin_datos`.

## Pruebas

### Caso normal

Entrada:
```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3
```

Resultado esperado:
```text
puntaje_final: 27
clasificacion: competitivo
```

### Caso borde

Entrada:
```text
participantes: []
bono: 8
penalizacion: 3
```

Resultado esperado:
```text
puntaje_final: 0
clasificacion: sin_datos
```

## Explicacion final

La formula se reconstruyo a partir del ejemplo del README: la mediana de `[12, 18, 25, 30]` es `21.5`; sumando el bono (8) y restando la penalizacion (3) da `26.5`, y `Math.ceil` lo redondea a `27`, que coincide exactamente con el resultado esperado. Usar la mediana en vez del promedio evita que valores extremos distorsionen el puntaje. La clasificacion se implemento con una tabla de rangos en vez de condicionales anidados, para que agregar o ajustar categorias sea sencillo.

## Sugerencia aplicada

Se verifico la operacion con calculo manual (mediana = 21.5, resultado final = 27) antes de confiar en el codigo, tal como sugiere la plantilla.