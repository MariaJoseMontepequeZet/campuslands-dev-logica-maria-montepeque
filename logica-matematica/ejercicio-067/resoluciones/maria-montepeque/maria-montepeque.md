# Ejercicio 067 - Logica matematica: secuencias numericas

## Analisis

- Entrada: un arreglo `participantes` con puntuaciones numericas, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y el resultado se redondea hacia arriba.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El promedio de `participantes` es la base del calculo. Si el arreglo esta vacio, el promedio es 0.
2. Al promedio se le suma el `bono` y se le resta la `penalizacion`.
3. El resultado se redondea hacia arriba con `Math.ceil` para obtener `puntaje_final`.
4. La `clasificacion` se define segun rangos ordenados de mayor a menor:
   - `puntaje_final >= 30`: elite
   - `puntaje_final >= 20`: competitivo
   - `puntaje_final >= 10`: amateur
   - cualquier otro valor: principiante

## Formula reverso-ingenierada

Con el ejemplo del README (`participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`):

- Promedio: (12 + 18 + 25 + 30) / 4 = 21.25
- 21.25 + 8 - 3 = 26.25
- `Math.ceil(26.25)` = 27

Esto coincide con el `puntaje_final: 27` esperado, y 27 cae en el rango `competitivo` (20-29).

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
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 3
clasificacion: principiante
```

Con el arreglo vacio el promedio se trata como 0, por lo que el calculo queda en `0 + 5 - 2 = 3`.

## Explicacion final

El promedio resume el desempeno general de `participantes` antes de aplicar los ajustes de `bono` y `penalizacion`. Redondear hacia arriba con `Math.ceil` reproduce exactamente el `puntaje_final: 27` del ejemplo oficial. La clasificacion se resuelve con una tabla de rangos ordenada de mayor a menor, evitando condicionales anidados y dejando claro que pasa en cada umbral.