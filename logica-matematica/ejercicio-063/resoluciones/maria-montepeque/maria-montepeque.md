# Ejercicio 063 - Logica matematica: promedios y medianas

## Analisis

- Entrada: un arreglo `participantes` con los puntajes obtenidos en el torneo, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y el resultado se redondea hacia arriba para obtener el puntaje final. Con ese puntaje se determina la clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. El promedio se calcula sumando todos los valores de `participantes` y dividiendo entre la cantidad de elementos.
2. La mediana se calcula ordenando el arreglo y tomando el valor central (o el promedio de los dos centrales si la cantidad es par); se reporta como dato de apoyo del analisis estadistico.
3. El puntaje final es `Math.ceil(promedio + bono - penalizacion)`.
4. La clasificacion se determina por rangos sobre el puntaje final:
   - `>= 30`: elite
   - `>= 20`: competitivo
   - `>= 10`: intermedio
   - `< 10`: principiante
5. Si `participantes` esta vacio, el promedio y la mediana se toman como 0 para evitar division entre cero.

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
explicacion: se sumo el bono y se resto la penalizacion segun las reglas.
```

Promedio: 21.25 -> 21.25 + 8 - 3 = 26.25 -> `Math.ceil(26.25)` = 27.

### Caso borde

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 3
clasificacion: principiante
```

Con arreglo vacio el promedio es 0, por lo que el puntaje final es `Math.ceil(0 + 5 - 2)` = 3.

## Explicacion final

El promedio resume el rendimiento general de los participantes y la mediana se calcula como referencia adicional para detectar si el promedio esta siendo afectado por valores atipicos. El puntaje final ajusta el promedio con el bono y la penalizacion del torneo, y se redondea hacia arriba (`Math.ceil`) porque es el metodo que reproduce el resultado del ejemplo (21.25 + 5 = 26.25 -> 27). La clasificacion final se obtiene comparando ese puntaje contra una tabla de rangos ordenada, en lugar de usar condicionales anidados.

## Ejecucion

```bash
node maria-montepeque.js
```