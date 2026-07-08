# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa una playlist musical.
  - Cada canción contiene:
    - `titulo`: nombre de la canción.
    - `duracion`: duración de la canción en segundos.

- **Proceso:**
  - Validar que la playlist tenga canciones registradas.
  - Extraer la duración de cada canción.
  - Verificar que todas las duraciones sean valores positivos.
  - Calcular la duración total de la playlist sumando todas las canciones.
  - Comparar la duración de cada canción con la anterior para identificar el comportamiento de la secuencia:
    - Si aumenta progresivamente, es ascendente.
    - Si disminuye progresivamente, es descendente.
    - Si no mantiene un patrón, es mixta.

- **Salida:**
  - Un objeto con:
    - Cantidad de canciones.
    - Duración total en segundos.
    - Tipo de secuencia encontrada.

## Reglas identificadas

1. La duración total de una playlist se calcula sumando la duración individual de todas las canciones.

\[
Duracion\ Total = Cancion_1 + Cancion_2 + ... + Cancion_n
\]

2. Una secuencia es **ascendente** cuando cada canción tiene mayor duración que la anterior.

3. Una secuencia es **descendente** cuando cada canción tiene menor duración que la anterior.

4. Si la secuencia no mantiene un crecimiento o decrecimiento constante, se clasifica como **"Secuencia Mixta"**.

5. Las duraciones de las canciones deben ser valores positivos para realizar el análisis.

## Pruebas

### Caso normal

Entrada:

```javascript
const playlist = [
  {
    titulo: "Intro",
    duracion: 120
  },
  {
    titulo: "Energia",
    duracion: 180
  },
  {
    titulo: "Final",
    duracion: 240
  }
];
```

Resultado esperado:

```javascript
{
  cantidadCanciones: 3,
  duracionTotalSegundos: 540,
  tipoSecuencia: "Secuencia Ascendente"
}
```

### Caso borde

Entrada:

```javascript
const playlist = [
  {
    titulo: "Cancion desconocida",
    duracion: 0
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las duraciones deben ser mayores a cero."
}
```

## Explicacion final

La solución analiza una playlist musical utilizando conceptos de secuencias numéricas. Primero extrae los valores importantes, en este caso las duraciones de las canciones, y verifica que los datos sean válidos.

Después calcula la duración total mediante una suma acumulativa y compara los valores consecutivos para encontrar el patrón existente en la secuencia. Si los valores aumentan constantemente, la playlist tiene una secuencia ascendente; si disminuyen, tiene una secuencia descendente; en cualquier otro caso se considera mixta.

Este algoritmo permite convertir una lista de datos musicales en información cuantificable, aplicando razonamiento matemático y estructuras de programación para identificar patrones.