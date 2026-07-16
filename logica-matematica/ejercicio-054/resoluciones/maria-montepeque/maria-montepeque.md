# Solucion - Ejercicio 054

## Analisis

- Entrada: una lista de figuras de tatuaje, cada una con un `tipo` (`circulo`, `rectangulo` o `triangulo`) y sus medidas correspondientes en centimetros.
- Proceso: se calcula el area y el perimetro de cada figura segun su formula geometrica, se acumulan los totales y se clasifica el tamano del tatuaje segun rangos de area.
- Salida: un objeto con el area total, el perimetro total, la clasificacion de tamano, el precio total y el detalle de cada figura.

## Reglas identificadas

1. Cada tipo de figura tiene su propia formula de area y perimetro (circulo, rectangulo, triangulo).
2. El area total define la categoria del tatuaje: pequeno (hasta 50 cm²), mediano (hasta 150 cm²) o grande (mas de 150 cm²).
3. Cada categoria tiene una tarifa distinta por cm² para calcular el precio total.
4. Las figuras con un tipo desconocido se ignoran en los calculos, pero se cuentan como invalidas.
5. Una lista vacia no debe calcular nada; se devuelve un resultado neutro con clasificacion `sin_figuras`.

## Pruebas

### Caso normal

Entrada:

```js
[
  { tipo: "circulo", radio: 3 },
  { tipo: "rectangulo", base: 4, altura: 6 },
  { tipo: "triangulo", base: 4, altura: 6, lados: [4, 5, 6] },
]
```

Resultado esperado:

```json
{
  "area_total": 64.27,
  "perimetro_total": 53.85,
  "clasificacion": "mediano",
  "precio_total": 964.12,
  "figuras_invalidas": 0
}
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```json
{
  "area_total": 0,
  "perimetro_total": 0,
  "clasificacion": "sin_figuras",
  "precio_total": 0,
  "figuras_invalidas": 0
}
```

### Caso adicional: figura invalida

Entrada:

```js
[
  { tipo: "circulo", radio: 10 },
  { tipo: "estrella", puntas: 5 },
]
```

Resultado esperado:

```json
{
  "area_total": 314.16,
  "perimetro_total": 62.83,
  "clasificacion": "grande",
  "precio_total": 3141.59,
  "figuras_invalidas": 1
}
```

## Explicacion final

La solucion separa el calculo geometrico (`calcularFigura`) de la logica de decision (`clasificarTamano`), lo que evita condicionales anidados y facilita agregar nuevas figuras o categorias en el futuro. La clasificacion por tamano usa un arreglo ordenado de limites en lugar de una cadena de `if/else`, siguiendo el mismo criterio de mapeo numerico usado en ejercicios anteriores. El caso borde (lista vacia) se maneja de forma explicita al inicio de la funcion para evitar errores al calcular sobre un arreglo sin elementos, y las figuras con tipo desconocido no rompen la ejecucion: se descartan y se reportan en `figuras_invalidas`.

## Como ejecutar

```bash
node maria-montepeque.js
```