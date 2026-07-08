# Logica matematica 002 - porcentajes y proporciones

## Sistema de Cálculo de Efectividad Deportiva

Este script implementa un motor de análisis estadístico para clasificar el desempeño de un equipo deportivo basado en sus resultados de victorias, empates y derrotas.

* **Descripción del proceso:**
* **Validación de datos:** Comprueba si el total de partidos es cero para evitar divisiones inválidas.
* **Cálculo de efectividad:** Determina el porcentaje de éxito basándose únicamente en las partidas ganadas respecto al total de encuentros disputados.
* **Categorización:** Clasifica al equipo en diferentes niveles competitivos ("Play-offs", "Zona media" o "Fuera de competencia") utilizando umbrales porcentuales.


* **Tecnologías:**
* JavaScript (lógica matemática y condicional).


---

### Explicación técnica: ¿Cómo funciona la lógica?

La eficiencia del script radica en su estructura de **procesamiento condicional secuencial**:

1. **Cálculo robusto**: El uso de `toFixed(2)` asegura que el porcentaje siempre tenga un formato estético legible, eliminando posibles excesos de decimales en resultados no enteros.
2. **Jerarquía de rangos**: La lógica utiliza una cadena de `if...else if...else`. Esto es eficiente porque, una vez que se cumple una condición (ej. ser mayor al 70%), el resto de los bloques no se evalúan, optimizando el rendimiento.
3. **Seguridad**: El control inicial `totalPartidos === 0` es vital para evitar errores matemáticos (`NaN`), asegurando que el sistema reporte un estado claro cuando no existen registros válidos.


### Lógica del Código

```javascript
const calcularEfectividad = (ganados, empatados, perdidos) => {
    // 1. Validación de seguridad
    const totalPartidos = ganados + empatados + perdidos;
    if (totalPartidos === 0) return "Sin datos de partidos.";

    // 2. Cálculo del porcentaje
    const efectividad = (ganados / totalPartidos) * 100;

    // 3. Clasificación por umbrales
    let categoria = "";
    if (efectividad >= 70) categoria = "Clasificado a Play-offs";
    else if (efectividad >= 40) categoria = "En zona media";
    else categoria = "Fuera de competencia";

    return {
        porcentaje: efectividad.toFixed(2) + "%",
        categoria: categoria,
        explicacion: `Efectividad calculada sobre ${totalPartidos} partidos jugados.`
    };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {42BDD161-8458-4C45-9C1D-BD004E2C4D65}.png, los resultados obtenidos en consola son:

```text
{
  porcentaje: '80.00%',
  categoria: 'Clasificado a Play-offs',
  explicacion: 'Efectividad calculada sobre 10 partidos jugados.'
}
Sin datos de partidos.

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-002/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
