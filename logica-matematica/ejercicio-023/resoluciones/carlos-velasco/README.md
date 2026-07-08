# Logica matematica 023 - promedios y medianas

## Sistema de Análisis de Rendimiento Estadístico

Este script evalúa un conjunto de puntajes de un equipo para determinar su comportamiento estadístico, calculando el promedio y la mediana para identificar si el equipo se apoya excesivamente en jugadores destacados ("estrellas") o si tiene un desempeño equilibrado.

* **Descripción del proceso:**
* **Cálculo de Promedio**: Suma todos los puntajes y los divide por el número total de elementos.
* **Cálculo de Mediana**: Ordena los puntajes de menor a mayor y encuentra el valor central, manejando casos de arreglos pares e impares.
* **Clasificación**: Compara el promedio con la mediana. Si el promedio supera a la mediana por más de 10 puntos, clasifica al equipo como "Dependiente de estrellas".
* **Reporte**: Retorna un objeto con las métricas calculadas y la clasificación final.


* **Tecnologías:**
* JavaScript (métodos de array `reduce`, `sort`, estructuras condicionales).

---

### Explicación técnica

1. **Immutabilidad con `[...puntajes]**`: Antes de ordenar el arreglo, se utiliza el *spread operator* para crear una copia. Esto evita modificar el arreglo original, una buena práctica en programación funcional.
2. **Lógica de la Mediana**: El uso del operador ternario para verificar si el largo del arreglo es par o impar permite manejar correctamente ambos escenarios, asegurando un cálculo estadístico preciso.
3. **Detección de valores atípicos (Outliers)**: La comparación entre promedio y mediana es una técnica estadística clásica para identificar sesgos. En este caso, el umbral de `+ 10` sirve para detectar si unos pocos jugadores con puntajes muy altos están inflando el promedio del equipo.

### Lógica del Código

```javascript
const analizarRendimiento = (puntajes) => {
    if (!puntajes || puntajes.length === 0) return "No hay datos.";

    // 1. Cálculo de promedio
    const suma = puntajes.reduce((a, b) => a + b, 0);
    const promedio = suma / puntajes.length;

    // 2. Cálculo de mediana
    const ordenados = [...puntajes].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    const mediana = ordenados.length % 2 !== 0 
        ? ordenados[mitad] 
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;

    // 3. Clasificación según dispersión de datos
    let clasificacion = (promedio > mediana + 10) 
        ? "Dependiente de estrellas" 
        : "Equipo equilibrado";

    return {
        promedio: promedio.toFixed(2),
        mediana: mediana,
        clasificacion: clasificacion
    };
};

```

### Salida Esperada

```text
{ promedio: '38.00', mediana: 30, clasificacion: 'Equipo equilibrado' }
{
  promedio: '27.50',
  mediana: 27.5,
  clasificacion: 'Equipo equilibrado'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-023/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco