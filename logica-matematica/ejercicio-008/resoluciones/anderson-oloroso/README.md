# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa un conjunto de películas de ciencia ficción.
  - Cada película contiene:
    - `titulo`: nombre de la película.
    - `puntuacion`: valoración recibida en una escala de 0 a 10.

- **Proceso:**
  - Validar que existan películas registradas.
  - Verificar que las puntuaciones estén dentro del rango permitido.
  - Extraer las puntuaciones de todas las películas.
  - Calcular el promedio general utilizando:

    \[
    Promedio = \frac{Suma\ de\ puntuaciones}{Cantidad\ de\ peliculas}
    \]

  - Comparar las puntuaciones consecutivas para detectar patrones:
    - Aumento constante.
    - Descenso constante.
    - Mayor cantidad de aumentos o descensos.
  - Determinar la tendencia general de puntuación.

- **Salida:**
  - Un objeto con:
    - Cantidad de películas analizadas.
    - Promedio de puntuación.
    - Patrón o tendencia encontrada en las puntuaciones.

## Reglas identificadas

1. Las puntuaciones de las películas deben estar dentro del rango permitido de **0 a 10**.
2. Si cada puntuación es mayor que la anterior, existe un patrón de **"Mejora progresiva"**.
3. Si cada puntuación es menor que la anterior, existe un patrón de **"Declive progresivo"**.
4. Si la mayoría de cambios son positivos, se determina una **"Tendencia positiva"**.
5. Si la mayoría de cambios son negativos, se determina una **"Tendencia negativa"**.
6. Cuando no existe un comportamiento dominante, la secuencia se clasifica como **"Sin patron definido"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Galaxy Mission",
    puntuacion: 7.5
  },
  {
    titulo: "Nebula Wars",
    puntuacion: 8.2
  },
  {
    titulo: "Quantum Future",
    puntuacion: 9
  }
];
```

Resultado esperado:

```javascript
{
  cantidadPeliculas: 3,
  promedioPuntuacion: 8.23,
  tendencia: "Mejora progresiva"
}
```

### Caso borde

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Unknown Planet",
    puntuacion: 12
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las puntuaciones deben estar entre 0 y 10."
}
```

## Explicacion final

La solución analiza patrones numéricos dentro de las puntuaciones de películas de ciencia ficción. Primero valida que los datos sean correctos y que las puntuaciones se encuentren dentro de la escala establecida.

Después calcula el promedio de valoración para obtener una medida general de calidad y compara las puntuaciones en orden para encontrar comportamientos repetitivos. Este análisis permite identificar si las películas presentan una mejora continua, una disminución progresiva o simplemente una tendencia general.

El algoritmo combina cálculos estadísticos básicos con comparación de secuencias, transformando una lista de valoraciones en información útil para evaluar la evolución de una colección cinematográfica.