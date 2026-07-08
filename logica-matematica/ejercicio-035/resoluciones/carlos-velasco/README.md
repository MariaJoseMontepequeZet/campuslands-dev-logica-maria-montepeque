# Logica matematica 035 - velocidad tiempo distancia

## Sistema de Cálculo de Tiempo de Dibujo

Este script estima el tiempo total requerido para completar un dibujo mediante una fórmula que relaciona la cantidad de trazos, la velocidad de ejecución y un factor multiplicador de complejidad.

* **Descripción del proceso:**
* **Validación**: Asegura que la velocidad de ejecución (`trazosPorMinuto`) sea superior a cero para evitar errores matemáticos.
* **Cálculo de Tiempo**: Aplica la fórmula:

$$\text{tiempoTotal} = \left( \frac{\text{totalTrazos}}{\text{trazosPorMinuto}} \right) \times \text{factorComplejidad}$$


* **Clasificación**: Clasifica automáticamente el proyecto como "Proyecto de gran escala" si el tiempo total supera los 480 minutos (8 horas), o "Proyecto estándar" en caso contrario.
* **Reporte**: Devuelve un objeto detallado con el tiempo total en minutos, la clasificación del proyecto y una explicación técnica del cálculo.


* **Tecnologías:**
* JavaScript (lógica matemática, operadores ternarios).

---

### Explicación técnica

1. **Modelo de estimación**: La fórmula utilizada pondera el esfuerzo bruto (`totalTrazos / trazosPorMinuto`) con un `factorComplejidad`, lo que permite ajustar la estimación real más allá de la simple velocidad de dibujo, considerando detalles técnicos o precisión requerida.
2. **Escalabilidad**: El umbral de 480 minutos (8 horas) sirve como punto de inflexión para clasificar la magnitud del trabajo, facilitando la gestión de tiempos y recursos para el artista.
3. **Formateo de salida**: El uso de `toFixed(2)` garantiza una presentación uniforme del tiempo estimado en minutos, facilitando la lectura para el usuario final.

### Lógica del Código

```javascript
const calcularTiempoDibujo = (totalTrazos, trazosPorMinuto, factorComplejidad) => {
    // 1. Validación de velocidad
    if (trazosPorMinuto <= 0) return "Velocidad inválida.";

    // 2. Cálculo basado en volumen y complejidad
    const tiempoFinal = (totalTrazos / trazosPorMinuto) * factorComplejidad;
    const esGranEscala = tiempoFinal > 480;

    // 3. Retorno del objeto con el reporte
    return {
        tiempo_total_minutos: tiempoFinal.toFixed(2),
        clasificacion: esGranEscala ? "Proyecto de gran escala" : "Proyecto estándar",
        explicacion: `Calculado con ${totalTrazos} trazos a ${trazosPorMinuto} t/min y factor de ${factorComplejidad}.`
    };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {6653FF94-A87C-463F-8D48-3F886A5A03AC}.png, los resultados obtenidos son:

```text
{
  tiempo_total_minutos: '30.00',
  clasificacion: 'Proyecto estándar',
  explicacion: 'Calculado con 1000 trazos a 50 t/min y factor de 1.5.'
}
{
  tiempo_total_minutos: '2.00',
  clasificacion: 'Proyecto estándar',
  explicacion: 'Calculado con 200 trazos a 100 t/min y factor de 1.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-035/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco