# Logica matematica 012 - probabilidad basica

## Sistema de Análisis de Efectividad de Saques

Este script permite calcular la tasa de éxito de un jugador en una serie de saques y clasificar su desempeño basándose en su porcentaje de efectividad.

* **Descripción del proceso:**
* **Validación**: Verifica que el número de intentos sea mayor a cero para evitar errores matemáticos.
* **Cálculo de porcentaje**: Determina la proporción de aciertos y la formatea a dos decimales con el símbolo de porcentaje.
* **Clasificación**: Asigna una categoría al jugador ("Nivel Profesional", "Nivel Intermedio" o "En Entrenamiento") mediante una estructura de control de flujo.
* **Reporte**: Devuelve un objeto estructurado con el resultado final, la categoría y un resumen explicativo.


* **Tecnologías:**
* JavaScript (cálculos aritméticos, validación de entrada y estructuras condicionales).



---

### Explicación técnica

1. **`toFixed(2)`**: Es fundamental para estandarizar la salida, asegurando que el porcentaje siempre muestre dos decimales, lo cual mejora la legibilidad en reportes estadísticos.
2. **Lógica condicional**: Se utiliza una cascada de condiciones (`if...else if...else`) que permite evaluar rangos de manera eficiente, asignando la categoría más alta posible primero.
3. **Encapsulamiento**: La función devuelve un objeto, lo que permite que el resultado no sea solo un valor, sino una respuesta completa con contexto (explicación), facilitando su integración en otras partes de un sistema mayor.

### Lógica del Código

```javascript
const analizarEfectividad = (totales, exitosos) => {
    // 1. Validación de entrada
    if (totales <= 0) return "Error: Los intentos deben ser mayores a 0.";
    
    // 2. Cálculo de efectividad
    const efectividad = (exitosos / totales) * 100;
    let categoria = "";

    // 3. Clasificación según umbrales
    if (efectividad >= 80) categoria = "Nivel Profesional";
    else if (efectividad >= 50) categoria = "Nivel Intermedio";
    else categoria = "En Entrenamiento";

    // 4. Retorno de objeto
    return {
        efectividad: efectividad.toFixed(2) + "%",
        categoria: categoria,
        explicacion: `De ${totales} saques, ${exitosos} fueron exitosos.`
    };
};

```

### Salida Esperada

```text
{
  efectividad: '90.00%',
  categoria: 'Nivel Profesional',
  explicacion: 'De 10 saques, 9 fueron exitosos.'
}
{
  efectividad: '40.00%',
  categoria: 'En Entrenamiento',
  explicacion: 'De 10 saques, 4 fueron exitosos.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-012/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco