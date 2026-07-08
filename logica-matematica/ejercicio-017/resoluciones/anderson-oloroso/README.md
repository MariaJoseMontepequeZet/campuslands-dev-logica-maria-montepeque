# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa proyectos de arquitectura 3D.
  - Cada proyecto contiene:
    - `nombre`: nombre del diseño arquitectónico.
    - `calidad`: puntuación de calidad estructural del proyecto.
    - `innovacion`: nivel de innovación del diseño.
    - `eficiencia`: eficiencia del modelo arquitectónico.

- **Proceso:**
  - Validar que existan proyectos registrados.
  - Verificar que las estadísticas estén dentro del rango permitido de 0 a 100.
  - Calcular un puntaje ponderado para cada proyecto:

    \[
    Puntaje = (Calidad \times 0.4) + (Innovacion \times 0.35) + (Eficiencia \times 0.25)
    \]

  - Acumular todos los puntajes para obtener el promedio general del ranking.
  - Comparar los puntajes individuales para encontrar el proyecto con mayor valoración.
  - Generar un resultado final del ranking arquitectónico.

- **Salida:**
  - Un objeto con:
    - Cantidad de proyectos evaluados.
    - Promedio general del ranking.
    - Nombre del proyecto ganador.
    - Puntaje obtenido por el mejor proyecto.

## Reglas identificadas

1. Las métricas de evaluación deben estar dentro del rango de **0 a 100**.
2. El puntaje final de cada proyecto utiliza pesos diferentes según la importancia de cada criterio:

\[
P = (Calidad \times 40\%) + (Innovacion \times 35\%) + (Eficiencia \times 25\%)
\]

3. El promedio del ranking se calcula sumando todos los puntajes y dividiendo entre la cantidad de proyectos:

\[
Promedio = \frac{Suma\ de\ puntajes}{Cantidad\ de\ proyectos}
\]

4. El proyecto ganador será aquel que tenga el mayor puntaje final.
5. Si no existen proyectos registrados, el sistema debe devolver un mensaje de error.

## Pruebas

### Caso normal

Entrada:

```javascript
const proyectos = [
  {
    nombre: "Torre Moderna",
    calidad: 90,
    innovacion: 85,
    eficiencia: 80
  },
  {
    nombre: "Casa Inteligente",
    calidad: 75,
    innovacion: 95,
    eficiencia: 90
  },
  {
    nombre: "Centro Cultural",
    calidad: 88,
    innovacion: 70,
    eficiencia: 85
  }
];
```

Resultado esperado:

```javascript
{
  proyectosEvaluados: 3,
  promedioRanking: 85.93,
  mejorProyecto: "Torre Moderna",
  mejorPuntaje: 85.75
}
```

### Caso borde

Entrada:

```javascript
const proyectos = [
  {
    nombre: "Modelo Inválido",
    calidad: 120,
    innovacion: 80,
    eficiencia: 90
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las estadísticas deben estar entre 0 y 100."
}
```

## Explicacion final

La solución evalúa proyectos de arquitectura 3D utilizando un sistema de ranking basado en estadísticas ponderadas. Primero valida que los valores ingresados sean correctos para evitar resultados fuera de los límites establecidos.

Luego calcula un puntaje final combinando tres criterios importantes: calidad, innovación y eficiencia. Cada criterio tiene un peso diferente, permitiendo representar que algunos aspectos tienen más influencia dentro de la evaluación arquitectónica.

Finalmente, el algoritmo utiliza acumuladores para calcular el promedio general y comparaciones para encontrar el proyecto con mejor desempeño. De esta manera, transforma características cualitativas de un diseño 3D en una clasificación numérica verificable.