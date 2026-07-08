# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa una colección de películas de miedo.
  - Cada película contiene:
    - `titulo`: nombre de la película.
    - `duracion`: duración de la película en minutos.
    - `nivelMiedo`: intensidad del terror en una escala de 1 a 10.

- **Proceso:**
  - Validar que existan películas registradas.
  - Verificar que la duración sea mayor a cero y que el nivel de miedo esté dentro del rango permitido.
  - Aplicar el operador módulo (`%`) para identificar películas cuya duración sea divisible entre 30 minutos.
  - Calcular el promedio del nivel de miedo:

    \[
    Promedio = \frac{Suma\ de\ niveles\ de\ miedo}{Cantidad\ de\ peliculas}
    \]

  - Buscar la película con el nivel de miedo más alto mediante una comparación de valores máximos.
  - Generar un resumen estadístico de la colección.

- **Salida:**
  - Un objeto con:
    - Cantidad total de películas válidas.
    - Número de películas con duración divisible entre 30.
    - Promedio del nivel de miedo.
    - Nombre de la película más terrorífica.

## Reglas identificadas

1. Una película es válida si su duración es mayor a cero y su nivel de miedo está entre **1 y 10**.
2. Una duración es divisible entre **30** cuando el residuo de la división es igual a cero:

\[
Duracion \% 30 = 0
\]

3. El promedio de miedo se obtiene sumando todos los niveles y dividiendo entre la cantidad de películas analizadas.
4. La película más terrorífica será aquella que tenga el mayor nivel de miedo dentro del conjunto.
5. Si no existen películas válidas, el sistema debe devolver un mensaje de error.

## Pruebas

### Caso normal

Entrada:

```javascript
const peliculas = [
  {
    titulo: "La Casa Oscura",
    duracion: 120,
    nivelMiedo: 8
  },
  {
    titulo: "Sombras Eternas",
    duracion: 95,
    nivelMiedo: 7
  },
  {
    titulo: "El Ritual Final",
    duracion: 150,
    nivelMiedo: 10
  }
];
```

Resultado esperado:

```javascript
{
  totalPeliculas: 3,
  peliculasConDuracionDivisiblePor30: 2,
  promedioNivelMiedo: 8.33,
  peliculaMasTerrorifica: "El Ritual Final"
}
```

### Caso borde

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Película inválida",
    duracion: 0,
    nivelMiedo: 15
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "No existen películas con datos válidos."
}
```

## Explicacion final

La solución analiza una colección de películas de miedo utilizando operaciones de módulos, divisibilidad y comparaciones numéricas. Primero se validan los datos recibidos para evitar procesar películas con información incorrecta.

Luego se utiliza el operador módulo para determinar cuáles películas tienen una duración exactamente divisible entre 30 minutos. También se calcula el promedio del nivel de miedo para conocer la intensidad general de la colección y se busca la película con mayor puntuación de terror.

Este algoritmo permite convertir datos simples de películas en información estadística útil, aplicando reglas matemáticas claras y verificables mediante programación.