# Logica matematica 032 - probabilidad basica

## Sistema de Cálculo de Probabilidad de Punto

Este script determina la probabilidad estadística de ganar un punto mediante la multiplicación de las tasas de efectividad del servicio y la devolución del oponente, clasificando el resultado para facilitar la toma de decisiones tácticas.

* **Descripción del proceso:**
* **Validación**: Asegura que las tasas de éxito estén en el rango normalizado de 0 a 1.
* **Cálculo Probabilístico**: Aplica la fórmula de probabilidad conjunta para eventos independientes, multiplicando los factores de servicio y devolución.
* **Clasificación**: Categoriza el resultado en "Probabilidad alta" (> 0.70), "Probabilidad media" (0.40 - 0.70) o "Probabilidad baja" (< 0.40).
* **Reporte**: Devuelve un objeto detallado con el porcentaje, la clasificación y la explicación técnica.


* **Tecnologías:**
* JavaScript (lógica condicional, manipulación de números decimales).

---

### Explicación técnica

1. **Normalización de datos**: El uso de `toFixed(2)` al calcular el porcentaje es esencial para convertir valores decimales crudos en una representación legible para el usuario final, manteniendo la precisión estadística.
2. **Lógica de clasificación**: La estructura de control condicional (`if/else if`) permite asignar significados cualitativos a datos cuantitativos, lo que ayuda a simplificar la interpretación de las estadísticas para los entrenadores o jugadores.
3. **Robustez**: La validación inicial previene que entradas erróneas fuera del dominio de la probabilidad (0-1) comprometan el resto de los cálculos, evitando resultados matemáticamente inválidos.

### Lógica del Código

```javascript
const calcularProbabilidadPunto = (servicio, devolucion) => {
    // 1. Validación de rangos (0 a 1)
    if (servicio < 0 || servicio > 1 || devolucion < 0 || devolucion > 1) {
        return "Error: Los valores deben estar entre 0 y 1.";
    }

    // 2. Cálculo de probabilidad (Producto de eventos)
    const probabilidad = servicio * devolucion;
    const porcentaje = (probabilidad * 100).toFixed(2);

    // 3. Clasificación del resultado
    let clasificacion = "";
    if (probabilidad > 0.70) clasificacion = "Probabilidad alta";
    else if (probabilidad >= 0.40) clasificacion = "Probabilidad media";
    else clasificacion = "Probabilidad baja";

    // 4. Retorno del reporte
    return {
        probabilidad_porcentaje: `${porcentaje}%`,
        clasificacion: clasificacion,
        explicacion: `Multiplicando efectividad de servicio (${servicio}) por devolución (${devolucion}).`
    };
};

```

### Salida Esperada

```text
{
  probabilidad_porcentaje: '76.50%',
  clasificacion: 'Probabilidad alta',
  explicacion: 'Multiplicando efectividad de servicio (0.9) por devolución (0.85).'
}
{
  probabilidad_porcentaje: '15.00%',
  clasificacion: 'Probabilidad baja',
  explicacion: 'Multiplicando efectividad de servicio (0.5) por devolución (0.3).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-032/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco