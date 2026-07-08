# Logica matematica 037 - estadisticas de ranking

## Sistema de Ranking de Proyectos

Este script transforma una lista de proyectos, calculando un puntaje de eficiencia y asignándoles una categoría de rendimiento.

* **Descripción del proceso:**
* **Cálculo de Puntaje**: Determina la eficiencia del proyecto mediante la fórmula:

$$\text{puntaje} = \left( \frac{\text{puntosCalidad}}{\text{tiempoRender}} \right) \times \text{factor}$$


* **Categorización**:
* `> 10`: "Top tier"
* `5` a `10`: "Estándar"
* `< 5`: "Bajo rendimiento"


* **Generación de Reporte**: Mapea la lista original a una nueva estructura con el puntaje formateado a dos decimales y la categoría resultante.


* **Tecnologías:**
* JavaScript (método `map` para transformación de datos, lógica condicional).

---

### Explicación técnica

1. **Transformación Inmutable**: El uso del método `.map()` asegura que la lista de proyectos original no sea alterada, siguiendo buenas prácticas de programación funcional al generar un nuevo arreglo transformado.
2. **Escalabilidad del factor**: El parámetro `factor` permite ajustar el nivel de exigencia del ranking global sin modificar la lógica interna de cálculo, lo que permite adaptar el sistema a diferentes tipos de proyectos o estándares de calidad.
3. **Formateo de precisión**: La conversión del puntaje a cadena de texto con `.toFixed(2)` garantiza que, aunque el cálculo sea de punto flotante, la presentación del ranking sea limpia y estandarizada.


### Lógica del Código

```javascript
const calcularRanking = (proyectos, factor) => {
    return proyectos.map(p => {
        // 1. Cálculo de eficiencia
        const puntaje = (p.puntosCalidad / p.tiempoRender) * factor;
        let categoria = "";
        
        // 2. Clasificación
        if (puntaje > 10) categoria = "Top tier";
        else if (puntaje >= 5) categoria = "Estándar";
        else categoria = "Bajo rendimiento";
        
        // 3. Retorno del objeto formateado
        return {
            nombre: p.nombre,
            puntaje: puntaje.toFixed(2),
            categoria: categoria
        };
    });
};

```

### Salida Esperada

```text
[
  { nombre: 'Casa Rural', puntaje: '12.00', categoria: 'Top tier' },
  { nombre: 'Edificio', puntaje: '1.20', categoria: 'Bajo rendimiento' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-037/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco