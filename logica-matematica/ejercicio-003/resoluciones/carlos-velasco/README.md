# Logica matematica 003 - promedios y medianas

## Sistema de Análisis Estadístico de Rendimiento

Este script evalúa el comportamiento de una serie de resultados numéricos (partidas) comparando la media aritmética con la mediana para determinar la estabilidad o volatilidad del rendimiento de un sistema o jugador.

* **Descripción del proceso:**
* **Validación:** Comprueba si el conjunto de datos está vacío para evitar errores de procesamiento.
* **Cálculo de Promedio:** Suma los valores y los divide entre el total de elementos.
* **Cálculo de Mediana:** Ordena los valores de menor a mayor y selecciona el valor central (o el promedio de los dos centrales).
* **Clasificación:** Etiqueta el rendimiento como "Consistente" (mediana > promedio) o "Volátil" (en caso contrario).


* **Tecnologías:**
* JavaScript (métodos de array `reduce` y `sort`).

---

### Explicación técnica

La lógica se fundamenta en la diferencia entre dos medidas de tendencia central:

1. **Immutabilidad**: Se utiliza el operador spread `[...partidas]` antes de aplicar `.sort()`. Esto es crucial porque el método `sort()` modifica el array original en JavaScript; al crear una copia, preservamos la integridad de los datos de entrada.
2. **Criterio de clasificación**: Si la mediana es mayor que el promedio, implica que la distribución de datos es más estable (Consistente). Si el promedio supera a la mediana, es una señal estadística común de la presencia de valores extremos (outliers) que desplazan el promedio hacia arriba, resultando en una calificación de "Volátil".

### Lógica del Código

```javascript
const analizarRendimiento = (partidas) => {
    if (partidas.length === 0) return "Sin datos";

    const suma = partidas.reduce((a, b) => a + b, 0);
    const promedio = suma / partidas.length;

    const ordenadas = [...partidas].sort((a, b) => a - b);
    const mitad = Math.floor(ordenadas.length / 2);
    const mediana = ordenadas.length % 2 !== 0 
        ? ordenadas[mitad] 
        : (ordenadas[mitad - 1] + ordenadas[mitad]) / 2;

    const clasificacion = mediana > promedio ? "Consistente" : "Volátil";

    return { promedio, mediana, clasificacion };
};

```

### Salida Esperada


```text
{ promedio: 20, mediana: 20, clasificacion: 'Volátil' }
{ promedio: 41.666666666666664, mediana: 15, clasificacion: 'Volátil' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-003/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

