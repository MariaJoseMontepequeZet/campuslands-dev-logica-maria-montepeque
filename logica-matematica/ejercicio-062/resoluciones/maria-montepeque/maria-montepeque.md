# Ejercicio 062 - Porcentajes y proporciones (ranking de futbol sala)

## Analisis

- Entrada: un arreglo `participantes` con los puntajes de cada jugador, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y el resultado se redondea hacia arriba para obtener el puntaje final. Con ese puntaje final se determina la clasificacion segun un rango.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. `promedio = suma(participantes) / cantidad(participantes)`.
2. `puntaje_final = Math.ceil(promedio + bono - penalizacion)`.
3. La clasificacion depende de rangos ordenados sobre `puntaje_final`:
   - menor a 15: bajo rendimiento
   - 15 a 24: en desarrollo
   - 25 a 34: competitivo
   - 35 en adelante: elite
4. Si `participantes` esta vacio no hay promedio posible, por lo que se retorna `puntaje_final: 0` y `clasificacion: 'sin datos'`.

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

Calculo: promedio = 85 / 4 = 21.25 → 21.25 + 8 - 3 = 26.25 → `Math.ceil(26.25)` = 27, que cae en el rango 25-34 (competitivo).

### Caso borde

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin datos
```

Al no haber participantes se evita la division entre cero y se retorna un resultado explicito en lugar de `NaN`.

## Explicacion final

El promedio resume el nivel general de los participantes y el bono/penalizacion ajustan ese valor segun reglas del reto. Se usa `Math.ceil` porque el ejemplo del enunciado (26.25 → 27) solo se cumple redondeando siempre hacia arriba; `Math.round` o `Math.floor` no producen el resultado esperado. La clasificacion se resuelve con una tabla de rangos ordenada en lugar de condicionales anidados, lo que facilita agregar o ajustar categorias sin tocar la logica de calculo.

## Como ejecutar

```bash
node maria-montepeque.js
```