# Ejercicio 001 - Operaciones Aritméticas Controladas

**Camper:** Antonio Canux

## Análisis

- Entrada: Un arreglo de números enteros (`participantes`), un número entero para el `bono` y un número entero para la `penalizacion`.
- Proceso: Se calcula el promedio de los valores en el arreglo de participantes y se redondea hacia arriba para obtener un puntaje base. A este valor se le suma el bono y se le resta la penalización. Finalmente, se evalúa el puntaje final para asignarle una categoría.
- Salida: Un objeto que contiene el `puntaje_final` (número), la `clasificacion` (cadena de texto) y una `explicacion` (cadena de texto).

## Reglas identificadas

1. **Puntaje base:** Se obtiene calculando el promedio de los participantes y redondeándolo hacia el entero superior más cercano (ej. 85 / 4 = 21.25 -> 22).
2. **Operación aritmética:** Al puntaje base se le suma el bono y se le resta la penalización de forma directa (ej. 22 + 8 - 3 = 27).
3. **Clasificación:** Si el puntaje final es mayor o igual a 25, el nivel es "competitivo"; de lo contrario, se clasifica como "casual".

## Pruebas

### Caso normal

Entrada: `participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`

Resultado esperado:
```text
puntaje_final: 27
clasificacion: competitivo
explicacion: se sumo el bono y se resto la penalizacion segun las reglas.
```

### Caso borde
Entrada: `participantes: [5, 5]`, `bono: 0`, `penalizacion: 10`

Resultado esperado:

```text
puntaje_final: -5
clasificacion: casual
explicacion: se sumo el bono y se resto la penalizacion segun las reglas.
```

## Explicacion final
Esta solución funciona porque desglosa el problema en pasos aritméticos predecibles: cálculo de un promedio, manejo de decimales mediante redondeo, operaciones básicas y una estructura condicional. Al no tener la fórmula matemática detallada explícitamente en el contexto, aplicar lógica deductiva hacia el resultado del ejemplo permitió encontrar el algoritmo correcto. El código incluye también validaciones iniciales (verificar que el arreglo no esté vacío) para evitar resultados NaN y fallos inesperados en tiempo de ejecución.