# Logica matematica 017 - estadisticas de ranking

## Sistema de Ranking de Rendimiento Artístico

Este script calcula el tiempo promedio de ejecución de un grupo de artistas y clasifica su desempeño basándose en umbrales configurables de eficiencia.

* **Descripción del proceso:**
* **Cálculo de promedio:** Suma todos los tiempos individuales mediante `reduce` y los divide entre el número total de registros.
* **Clasificación jerárquica:** Compara el promedio obtenido contra los umbrales de "excelente" y "regular" para asignar una categoría de rendimiento.
* **Generación de informe:** Retorna un objeto con el promedio formateado a dos decimales, la clasificación obtenida y una breve explicación del contexto.


* **Tecnologías:**
* JavaScript (métodos de arreglos, lógica condicional).

---

### Explicación técnica

1. **`reduce()`**: Se utiliza para iterar sobre el arreglo `tiempos` y acumular la suma total, siendo una forma funcional y eficiente de consolidar datos numéricos en JavaScript.
2. **`toFixed(2)`**: Es fundamental para asegurar que, independientemente de los valores ingresados, el promedio siempre se presente con dos decimales, manteniendo la consistencia en el reporte final.
3. **Gestión de datos vacíos**: La validación inicial `tiempos.length === 0` actúa como una cláusula de guardia esencial para prevenir errores de división por cero y mejorar la robustez del script.

### Lógica del Código

```javascript
const calcularRankingRendimiento = (tiempos, excelente, regular) => {
    // 1. Validación de datos de entrada
    if (tiempos.length === 0) return "No hay datos para procesar.";

    // 2. Calcular promedio
    const suma = tiempos.reduce((acc, t) => acc + t, 0);
    const promedio = suma / tiempos.length;

    // 3. Clasificar rendimiento
    let clasificacion = "";
    if (promedio <= excelente) clasificacion = "Eficiencia Alta";
    else if (promedio <= regular) clasificacion = "Eficiencia Media";
    else clasificacion = "Bajo Rendimiento";

    return {
        promedio: `${promedio.toFixed(2)} min`,
        clasificacion: clasificacion,
        explicacion: `El promedio de ${tiempos.length} artistas se categoriza según los umbrales definidos.`
    };
};

```

### Salida Esperada

```text
{
  promedio: '53.33 min',
  clasificacion: 'Eficiencia Media',
  explicacion: 'El promedio de 3 artistas se categoriza según los umbrales definidos.'
}
{
  promedio: '135.00 min',
  clasificacion: 'Bajo Rendimiento',
  explicacion: 'El promedio de 2 artistas se categoriza según los umbrales definidos.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-017/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco