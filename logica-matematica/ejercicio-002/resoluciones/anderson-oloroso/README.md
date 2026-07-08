# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que contiene la información estadística de un equipo de fútbol sala.
  - Los datos recibidos son:
    - `nombre`: nombre del equipo.
    - `partidosJugados`: cantidad total de partidos disputados.
    - `victorias`: cantidad de partidos ganados.
    - `empates`: cantidad de partidos igualados.
    - `derrotas`: cantidad de partidos perdidos.
    - `golesAFavor`: goles anotados por el equipo.
    - `golesEnContra`: goles recibidos por el equipo.

- **Proceso:**
  - Validar que los datos numéricos no tengan valores negativos y que existan partidos jugados.
  - Calcular los puntos obtenidos mediante el sistema tradicional de fútbol:
    - Victoria = 3 puntos.
    - Empate = 1 punto.
    - Derrota = 0 puntos.
  - Calcular el porcentaje de victorias mediante la fórmula:

    \[
    Porcentaje\ de\ victorias = \frac{Victorias}{Partidos\ jugados} \times 100
    \]

  - Calcular la diferencia de goles:

    \[
    Diferencia\ de\ goles = Goles\ a\ favor - Goles\ en\ contra
    \]

  - Clasificar al equipo dependiendo de sus puntos y porcentaje de victorias.

- **Salida:**
  - Un objeto con:
    - Nombre del equipo.
    - Puntos obtenidos.
    - Porcentaje de victorias.
    - Diferencia de goles.
    - Categoría del equipo en el ranking.

## Reglas identificadas

1. Cada victoria otorga **3 puntos**, cada empate otorga **1 punto** y las derrotas no generan puntos.
2. El porcentaje de victorias se obtiene dividiendo las victorias entre los partidos jugados y multiplicando el resultado por 100.
3. Un equipo es considerado **"Equipo Lider"** si obtiene al menos **15 puntos** y un porcentaje de victorias mayor o igual al **60%**.
4. Un equipo es considerado **"Equipo Competitivo"** si obtiene al menos **8 puntos**, pero no cumple las condiciones de líder.
5. Si no cumple ninguna de las condiciones anteriores, el equipo queda clasificado como **"Equipo en Desarrollo"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const equipo = {
  nombre: "Titanes FC",
  partidosJugados: 10,
  victorias: 7,
  empates: 1,
  derrotas: 2,
  golesAFavor: 35,
  golesEnContra: 18
};
```

Resultado esperado:

```javascript
{
  equipo: "Titanes FC",
  puntos: 22,
  porcentajeVictorias: "70%",
  diferenciaGoles: 17,
  categoria: "Equipo Lider"
}
```

### Caso borde

Entrada:

```javascript
const equipo = {
  nombre: "Rookies FC",
  partidosJugados: 0,
  victorias: 0,
  empates: 0,
  derrotas: 0,
  golesAFavor: 0,
  golesEnContra: 0
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los datos del equipo deben ser valores válidos."
}
```

## Explicacion final

La solución permite calcular un ranking básico de fútbol sala utilizando reglas matemáticas de porcentajes y proporciones. Primero se validan los datos de entrada para evitar divisiones incorrectas o valores inválidos.

Después se calcula el puntaje del equipo mediante el sistema de puntos utilizado en competiciones deportivas. También se obtiene el porcentaje de victorias para medir la efectividad del equipo y la diferencia de goles para evaluar su rendimiento ofensivo y defensivo.

Finalmente, mediante condicionales se clasifica al equipo dentro de una categoría competitiva. La estructura utilizada separa claramente los datos de entrada, las operaciones matemáticas y la decisión final, haciendo que el resultado sea verificable y fácil de modificar para nuevas reglas de ranking.