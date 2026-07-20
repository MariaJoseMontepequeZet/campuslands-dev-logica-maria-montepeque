# Ejercicio 087 - Logica matematica

## Analisis

- Entrada: lista de `participantes` (numeros), `bono`, `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se suma el bono, se resta la penalizacion y se redondea hacia arriba.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se asigna segun rangos de `puntaje_final`.
3. Si `participantes` esta vacio, no se calcula el puntaje y se retorna `sin_datos`.

## Nota sobre el README original

El README del ejercicio no define los rangos de clasificacion, solo muestra el resultado `clasificacion: competitivo` para `puntaje_final: 27`. Se definieron los siguientes rangos como supuesto razonable, manteniendo consistencia con el ejemplo:

| Rango de puntaje | Clasificacion |
|---|---|
| 0 - 15 | bajo |
| 16 - 25 | regular |
| 26 - 35 | competitivo |
| 36 en adelante | elite |

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
clasificacion: sin_datos
explicacion: no hay participantes para calcular el puntaje.
```

## Explicacion final

El promedio de los participantes representa el desempeno base del grupo. Se suma el bono y se resta la penalizacion para reflejar ajustes externos, y se redondea hacia arriba con `Math.ceil` porque es el metodo que reproduce exactamente el resultado del ejemplo (27). La clasificacion se resuelve con una tabla de rangos ordenada en lugar de condicionales anidados, y el caso de arreglo vacio se maneja de forma explicita para evitar division entre cero.