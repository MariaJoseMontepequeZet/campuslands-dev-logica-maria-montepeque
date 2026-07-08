# Logica matematica 022 - porcentajes y proporciones

## Sistema de Cálculo de Efectividad Deportiva

Este script calcula el porcentaje de efectividad de un jugador o equipo deportivo basado en el número total de juegos, las victorias obtenidas y los empates registrados.

* **Descripción del proceso:**
* **Cálculo de puntos**: Asigna 1 punto por victoria y 0.5 puntos por empate para determinar el desempeño ponderado.
* **Normalización**: Calcula el porcentaje de efectividad dividiendo los puntos obtenidos por el total de juegos.
* **Clasificación**: Asigna una categoría (Élite, Competitivo o En desarrollo) basada en umbrales porcentuales.
* **Reporte**: Retorna un objeto con el porcentaje formateado, la clasificación y una breve explicación.


* **Tecnologías:**
* JavaScript (lógica aritmética y estructuras condicionales).

---

### Explicación técnica

1. **Ponderación (0.5 por empate)**: Esta lógica permite otorgar un valor parcial al esfuerzo del equipo sin equipararlo totalmente a una victoria, lo que resulta en una métrica mucho más equilibrada para evaluar la consistencia.
2. **`toFixed(2)`**: Es esencial en métricas de rendimiento deportivo para garantizar que el porcentaje final se presente con una precisión decimal estándar, evitando valores excesivamente largos.
3. **Validación de entrada**: Al verificar `jugados === 0`, el código evita el error de "división por cero", asegurando que el sistema sea estable incluso ante datos incompletos.

### Lógica del Código

```javascript
const calcularEfectividad = (jugados, ganados, empatados) => {
    // 1. Validación de seguridad
    if (jugados === 0) return "Error: El número de partidos jugados debe ser mayor a 0.";

    // 2. Cálculo de puntos (Victoria = 1, Empate = 0.5)
    const puntos = ganados + (empatados * 0.5);
    const porcentaje = (puntos / jugados) * 100;

    // 3. Clasificación según desempeño
    let categoria = "";
    if (porcentaje >= 80) categoria = "Elite";
    else if (porcentaje >= 50) categoria = "Competitivo";
    else categoria = "En desarrollo";

    return {
        porcentaje_efectividad: `${porcentaje.toFixed(2)}%`,
        clasificacion: categoria,
        explicacion: `Basado en ${ganados} victorias y ${empatados} empates de ${jugados} juegos.`
    };
};

```

### Salida Esperada

```text
{
  porcentaje_efectividad: '90.00%',
  clasificacion: 'Elite',
  explicacion: 'Basado en 8 victorias y 2 empates de 10 juegos.'
}
{
  porcentaje_efectividad: '30.00%',
  clasificacion: 'En desarrollo',
  expicacion: 'Basado en 2 victorias y 2 empates de 10 juegos.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-022/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco