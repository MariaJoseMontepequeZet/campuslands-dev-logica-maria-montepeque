# Logica matematica 004 - rangos y maximos

## Sistema de Análisis de Inventario de Motocicletas

Este script implementa un motor de análisis estadístico diseñado para evaluar el estado general de una flota de motocicletas. Su objetivo es identificar la unidad con mayor desgaste y determinar si la flota requiere una intervención de mantenimiento masivo basándose en el promedio de kilometraje.

* **Descripción del proceso:**
* **Validación:** Comprueba si el inventario contiene elementos para evitar errores de procesamiento.
* **Identificación:** Localiza la motocicleta con el kilometraje más alto utilizando métodos de búsqueda.
* **Cálculo estadístico:** Determina el promedio de uso de toda la flota mediante métodos funcionales.
* **Evaluación:** Clasifica el estado global de la flota comparando el promedio contra un umbral de 8,000 km.


* **Tecnologías:**
* JavaScript (métodos de array `map`, `reduce`, `find` y `Math.max`).


---

### Explicación técnica: ¿Cómo funciona la lógica?

1. **Programación Funcional**: El script es un ejemplo claro de procesamiento de colecciones. El uso de `.map()` para aislar el kilometraje, seguido de `.reduce()` para sumarlo, es una forma limpia y eficiente de obtener métricas sin alterar la estructura original de los datos.
2. **Eficiencia en Búsqueda**: Mediante `Math.max(...kms)` y `.find()`, el script localiza el modelo más usado de forma directa. La propagación `...` (spread operator) es fundamental aquí para convertir el array en una lista de argumentos aceptada por la función `max`.
3. **Formateo de Datos**: El método `.toFixed(2)` garantiza que, independientemente del cálculo aritmético, el informe final siempre presente el promedio con dos decimales, cumpliendo con estándares de reportes estadísticos.


### Lógica del Código

```javascript
const analizarInventario = (inventario) => {
    // Protección de datos vacíos
    if (inventario.length === 0) return "Inventario vacío";

    // Extraer kilometraje y encontrar el valor máximo
    const kms = inventario.map(m => m.kilometraje);
    const maxKms = Math.max(...kms);
    const motoMax = inventario.find(m => m.kilometraje === maxKms);

    // Calcular promedio
    const sumaKms = kms.reduce((a, b) => a + b, 0);
    const promedio = sumaKms / inventario.length;

    // Determinar estado de la flota
    const estado = promedio > 8000 ? "Alerta de Mantenimiento Masivo" : "Inventario Estable";

    return {
        moto_mas_usada: motoMax.modelo,
        promedio_km: promedio.toFixed(2),
        estado_inventario: estado
    };
};

```

### Salida Esperada

```text
{
  moto_mas_usada: 'Yamaha MT-07',
  promedio_km: '8000.00',
  estado_inventario: 'Inventario Estable'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-004/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
