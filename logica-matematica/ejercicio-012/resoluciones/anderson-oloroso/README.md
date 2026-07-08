# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa el historial de partidos de un jugador de pingpong.
  - Cada partido contiene:
    - `resultado`: indica si el jugador obtuvo una victoria o una derrota.

- **Proceso:**
  - Validar que exista al menos un partido registrado.
  - Recorrer todos los partidos utilizando un ciclo.
  - Contabilizar la cantidad de victorias y derrotas mediante acumuladores.
  - Calcular la probabilidad de victoria usando la fórmula:

    \[
    Probabilidad = \frac{Victorias}{Partidos\ Totales} \times 100
    \]

  - Clasificar el rendimiento del jugador según su porcentaje de victorias.

- **Salida:**
  - Un objeto con:
    - Total de partidos jugados.
    - Cantidad de victorias.
    - Cantidad de derrotas.
    - Porcentaje de probabilidad de victoria.
    - Nivel de rendimiento del jugador.

## Reglas identificadas

1. Cada partido ganado aumenta el contador de victorias en 1.
2. Cada partido perdido aumenta el contador de derrotas en 1.
3. La probabilidad de victoria se obtiene dividiendo las victorias entre el total de partidos y multiplicando por 100.

\[
P(Victoria)=\frac{Victorias}{Victorias+Derrotas}\times100
\]

4. La clasificación del jugador depende del porcentaje obtenido:
   - Mayor o igual a **70%** → "Jugador Favorito".
   - Mayor o igual a **50%** → "Jugador Competitivo".
   - Menor a **50%** → "Jugador en Mejora".

5. Los resultados ingresados solamente pueden ser **"Victoria"** o **"Derrota"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const historial = [
  { resultado: "Victoria" },
  { resultado: "Victoria" },
  { resultado: "Derrota" },
  { resultado: "Victoria" },
  { resultado: "Derrota" }
];
```

Resultado esperado:

```javascript
{
  partidosJugados: 5,
  victorias: 3,
  derrotas: 2,
  probabilidadVictoria: "60%",
  nivelRendimiento: "Jugador Competitivo"
}
```

### Caso borde

Entrada:

```javascript
const historial = [];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Debe existir al menos un partido registrado."
}
```

## Explicacion final

La solución analiza el desempeño de un jugador de pingpong utilizando conceptos básicos de probabilidad y acumuladores. Primero se recorren todos los partidos registrados para contar cuántas victorias y derrotas existen.

Después se calcula la probabilidad de victoria como una proporción entre los partidos ganados y el total de encuentros disputados. Este porcentaje permite interpretar estadísticamente el rendimiento del jugador.

Finalmente, mediante condicionales se clasifica al jugador según su efectividad. El algoritmo utiliza ciclos, contadores y operaciones matemáticas simples para transformar un historial de resultados en una evaluación cuantificable y verificable.