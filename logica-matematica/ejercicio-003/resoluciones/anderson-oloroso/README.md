# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa un equipo participante en un torneo de esports.
  - El objeto contiene:
    - `nombre`: nombre del equipo.
    - `partidas`: arreglo de objetos con los puntos obtenidos en cada partida.
    - Cada partida contiene:
      - `puntos`: cantidad de puntos obtenidos en la partida.

- **Proceso:**
  - Validar que exista al menos una partida registrada.
  - Extraer los puntajes obtenidos por el equipo en cada partida.
  - Calcular el promedio utilizando la fórmula:

    \[
    Promedio = \frac{Suma\ de\ puntajes}{Cantidad\ de\ partidas}
    \]

  - Ordenar los puntajes de menor a mayor.
  - Calcular la mediana:
    - Si la cantidad de datos es impar, tomar el valor central.
    - Si la cantidad de datos es par, calcular el promedio de los dos valores centrales.
  - Clasificar el rendimiento del equipo según el promedio y la mediana obtenida.

- **Salida:**
  - Un objeto con:
    - Nombre del equipo.
    - Promedio de puntos.
    - Mediana de puntos.
    - Clasificación final del equipo.

## Reglas identificadas

1. El promedio del equipo se obtiene sumando todos los puntajes y dividiendo entre la cantidad total de partidas jugadas.
2. La mediana depende del ordenamiento de los valores:
   - Para una cantidad impar de partidas, se selecciona el valor central.
   - Para una cantidad par de partidas, se calcula el promedio de los dos valores centrales.
3. Si el promedio y la mediana son mayores o iguales a **80**, el equipo se clasifica como **"Equipo Dominante"**.
4. Si el promedio es mayor o igual a **50**, pero no cumple la condición anterior, se clasifica como **"Equipo Competitivo"**.
5. Si no cumple ninguna condición, el equipo queda como **"Equipo en Entrenamiento"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const equipo = {
  nombre: "Cyber Wolves",
  partidas: [
    { puntos: 90 },
    { puntos: 75 },
    { puntos: 85 },
    { puntos: 95 },
    { puntos: 60 }
  ]
};
```

Resultado esperado:

```javascript
{
  equipo: "Cyber Wolves",
  promedio: 81,
  mediana: 85,
  clasificacion: "Equipo Dominante"
}
```

### Caso borde

Entrada:

```javascript
const equipo = {
  nombre: "Zero Players",
  partidas: []
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Debe existir al menos una partida registrada."
}
```

## Explicacion final

La solución analiza el rendimiento de un equipo de esports utilizando medidas estadísticas básicas: promedio y mediana. Primero se recopilan los puntajes obtenidos en cada partida y se validan para evitar errores en los cálculos.

El promedio permite conocer el rendimiento general del equipo, mientras que la mediana permite identificar el valor central de desempeño evitando que una partida demasiado alta o baja afecte demasiado la interpretación.

Después de obtener ambos valores, el algoritmo utiliza reglas condicionales para determinar la categoría competitiva del equipo. De esta manera, la solución convierte datos numéricos simples en una evaluación clara y verificable del rendimiento dentro del torneo.