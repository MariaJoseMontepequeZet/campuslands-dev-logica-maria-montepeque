# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa evaluaciones de trabajos de soldadura.
  - Cada trabajo contiene:
    - `nombre`: identificación del trabajo evaluado.
    - `puntaje`: valoración obtenida en una escala de 0 a 100.

- **Proceso:**
  - Validar que existan trabajos registrados.
  - Verificar que todos los puntajes estén dentro del rango permitido.
  - Encontrar el puntaje mínimo y máximo del conjunto.
  - Aplicar una normalización lineal para convertir los valores originales a una escala de 0 a 100:

    \[
    Puntaje\ Normalizado =
    \frac{Puntaje - Minimo}{Maximo - Minimo} \times 100
    \]

  - Crear una nueva lista con los puntajes originales y sus equivalentes normalizados.

- **Salida:**
  - Un objeto con:
    - Cantidad de trabajos evaluados.
    - Rango original de puntajes.
    - Lista de resultados con valores normalizados.

## Reglas identificadas

1. Los puntajes de soldadura deben encontrarse dentro del rango de **0 a 100**.
2. La normalización permite comparar resultados aunque los valores originales tengan diferentes escalas.
3. El menor puntaje del grupo representa el valor mínimo de referencia:

\[
Minimo \rightarrow 0
\]

4. El mayor puntaje del grupo representa el valor máximo de referencia:

\[
Maximo \rightarrow 100
\]

5. Cada puntaje intermedio se calcula mediante interpolación lineal:

\[
N = \frac{x-min}{max-min} \times 100
\]

6. Si no existen datos o los puntajes son inválidos, el sistema debe devolver un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const trabajos = [
  {
    nombre: "Soldadura Industrial A",
    puntaje: 70
  },
  {
    nombre: "Soldadura Estructural B",
    puntaje: 85
  },
  {
    nombre: "Soldadura Precisa C",
    puntaje: 95
  }
];
```

Resultado esperado:

```javascript
{
  trabajosEvaluados: 3,
  rangoOriginal: {
    minimo: 70,
    maximo: 95
  },
  resultados: [
    {
      nombre: "Soldadura Industrial A",
      puntajeOriginal: 70,
      puntajeNormalizado: 0
    },
    {
      nombre: "Soldadura Estructural B",
      puntajeOriginal: 85,
      puntajeNormalizado: 60
    },
    {
      nombre: "Soldadura Precisa C",
      puntajeOriginal: 95,
      puntajeNormalizado: 100
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const trabajos = [
  {
    nombre: "Soldadura Defectuosa",
    puntaje: 120
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los puntajes deben estar entre 0 y 100."
}
```

## Explicacion final

La solución aplica un proceso de normalización estadística a puntajes de trabajos de soldadura. Primero identifica los valores extremos del conjunto para establecer una escala de referencia.

Después transforma cada puntuación utilizando una fórmula de normalización lineal, permitiendo que todos los resultados sean comparables dentro de un rango uniforme de 0 a 100.

El algoritmo utiliza ciclos, búsqueda de valores mínimos y máximos, validaciones y cálculos matemáticos para convertir evaluaciones técnicas en datos estandarizados que facilitan la comparación entre diferentes trabajos de soldadura.