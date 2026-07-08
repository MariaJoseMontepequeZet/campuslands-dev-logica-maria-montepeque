# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que contiene información sobre la creación de combinaciones de golpes de kickboxing.
  - Los datos recibidos son:
    - `golpesDisponibles`: cantidad de técnicas diferentes disponibles.
    - `cantidadGolpes`: cantidad de movimientos que tendrá una combinación.

- **Proceso:**
  - Validar que los valores ingresados sean números enteros positivos.
  - Calcular la cantidad total de combinaciones posibles utilizando un principio multiplicativo.
  - Multiplicar la cantidad de opciones disponibles por cada posición de la combinación.

  La fórmula aplicada es:

  \[
  Total\ de\ combinaciones = GolpesDisponibles^{CantidadGolpes}
  \]

  - Devolver la cantidad final de combinaciones posibles.

- **Salida:**
  - Un objeto con:
    - Cantidad de golpes disponibles.
    - Cantidad de movimientos por combinación.
    - Número total de combinaciones posibles.

## Reglas identificadas

1. Cada posición dentro de una combinación puede elegir cualquiera de los golpes disponibles.
2. La cantidad de combinaciones se obtiene multiplicando las posibilidades de cada posición:

\[
N \times N \times N ... = N^k
\]

donde:
- `N` representa los golpes disponibles.
- `k` representa la cantidad de golpes en la combinación.

3. Los valores ingresados deben ser números enteros mayores que cero.
4. El orden de los golpes importa, ya que una combinación como **jab-directo-patada** es diferente a **patada-directo-jab**.

## Pruebas

### Caso normal

Entrada:

```javascript
const entrenamiento = {
  golpesDisponibles: 4,
  cantidadGolpes: 3
};
```

Resultado esperado:

```javascript
{
  golpesDisponibles: 4,
  cantidadGolpes: 3,
  totalCombinaciones: 64
}
```

Explicación del cálculo:

```text
4 × 4 × 4 = 64 combinaciones posibles
```

### Caso borde

Entrada:

```javascript
const entrenamiento = {
  golpesDisponibles: 0,
  cantidadGolpes: 3
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los valores deben ser enteros positivos."
}
```

## Explicacion final

La solución utiliza el principio multiplicativo de conteo combinatorio para determinar cuántas combinaciones de golpes puede crear un luchador de kickboxing.

Primero se validan los datos recibidos para garantizar que las cantidades tengan sentido matemático. Después se utiliza un ciclo acumulador que multiplica la cantidad de opciones disponibles tantas veces como posiciones tenga la combinación.

Este método permite calcular de manera eficiente la cantidad de secuencias posibles sin necesidad de generar cada combinación individualmente. La solución aplica conceptos de ciclos, acumuladores y razonamiento combinatorio para resolver un problema de conteo dentro de un contexto deportivo.