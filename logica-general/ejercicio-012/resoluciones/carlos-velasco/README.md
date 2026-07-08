# Logica general 012 - comparacion de opciones

## Sistema de Análisis de Efectividad de Jugador

Este script implementa un motor de evaluación para determinar el desempeño de un jugador basándose en su tasa de aciertos respecto a los intentos totales, clasificando su nivel de habilidad automáticamente.

* **Descripción del proceso:**
* **Validación de datos:** Comprueba que no existan intentos nulos y que los aciertos sean coherentes (menores o iguales a los intentos).
* **Cálculo de porcentaje:** Determina la efectividad dividiendo aciertos entre intentos, convirtiéndolo a un formato de porcentaje con un decimal.
* **Clasificación jerárquica:** Asigna un nivel de jugador ("Élite", "Competitivo" o "Requiere entrenamiento") según el umbral de efectividad alcanzado.
* **Generación de informe:** Retorna un objeto estructurado con la efectividad, la categoría asignada y una explicación del rendimiento.


* **Tecnologías:**
* JavaScript (lógica condicional, manipulación de números y cadenas).


---

### Explicación técnica

1. **`toFixed(1)`**: Este método se utiliza para asegurar que el porcentaje de efectividad siempre tenga un formato estandarizado a un decimal, evitando cadenas de números flotantes muy largas.
2. **Lógica jerárquica**: El uso de `if-else if-else` permite una evaluación de umbrales clara. Al priorizar el nivel más alto ("Jugador de élite"), el sistema clasifica de forma descendente y eficiente.
3. **Manejo de errores**: Las primeras dos líneas actúan como salvaguardas (cláusulas de guardia), evitando cálculos matemáticos imposibles (división por cero) o resultados lógicamente inválidos (aciertos mayores a intentos).

### Lógica del Código

```javascript
const analizarEfectividad = (intentos, aciertos) => {
    // 1. Validaciones iniciales
    if (intentos === 0) return "No hay datos de intentos.";
    if (aciertos > intentos) return "Error: Los aciertos no pueden superar los intentos.";

    // 2. Cálculo de métricas
    const probabilidad = aciertos / intentos;
    const porcentaje = (probabilidad * 100).toFixed(1);

    // 3. Asignación de nivel
    let clasificacion = "";
    if (probabilidad >= 0.7) clasificacion = "Jugador de élite";
    else if (probabilidad >= 0.5) clasificacion = "Jugador competitivo";
    else clasificacion = "Requiere entrenamiento";

    return {
        efectividad: `${porcentaje}%`,
        clasificacion: clasificacion,
        explicacion: `De ${intentos} intentos, tuviste ${aciertos} aciertos.`
    };
};

```

### Salida Esperada


```text
{
  efectividad: '80.0%',
  clasificacion: 'Jugador de élite',
  explicacion: 'De 10 intentos, tuviste 8 aciertos.'
}
{
  efectividad: '30.0%',
  clasificacion: 'Requiere entrenamiento',
  explicacion: 'De 10 intentos, tuviste 3 aciertos.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-012/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

