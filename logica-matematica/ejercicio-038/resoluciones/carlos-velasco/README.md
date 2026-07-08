# Logica matematica 038 - normalizacion de puntajes

## Sistema de Normalización de Puntajes

Este script procesa arreglos de puntajes brutos basándose en un valor máximo definido, normalizando cada dato a una escala de 0 a 100.

* **Descripción del proceso:**
* **Normalización**: Calcula el porcentaje del valor original respecto al máximo mediante la fórmula:

$$\text{normalizado} = \left( \frac{\text{valorOriginal}}{\text{maximo}} \right) \times 100$$


* **Calificación**: Determina si el valor normalizado es apto basándose en un umbral del 60%.
* `>= 60`: "Aprobado"
* `< 60`: "Rechazado"


* **Reporte**: Devuelve una lista de objetos que contienen el valor original, el valor normalizado (con dos decimales) y la calificación final.


* **Tecnologías:**
* JavaScript (método `map`, lógica matemática, condicionales).

---

### Explicación técnica

1. **Escalabilidad**: Al utilizar un parámetro `maximo`, el script puede normalizar puntajes provenientes de exámenes, evaluaciones técnicas o indicadores de desempeño con escalas máximas variables.
2. **Representación de Datos**: La conversión a `toFixed(2)` es esencial para mantener la consistencia en el formato de salida, especialmente al trabajar con porcentajes resultantes de divisiones no exactas.
3. **Procesamiento Funcional**: El uso de `.map()` permite procesar todo el conjunto de datos de forma limpia y eficiente, creando un nuevo arreglo transformado sin modificar los valores originales de entrada.


### Lógica del Código

```javascript
const normalizarPuntajes = (resultados, maximo) => {
    return resultados.map(res => {
        // 1. Cálculo de normalización
        let normalizado = (res / maximo) * 100;
        
        // 2. Calificación basada en umbral (60%)
        let calificacion = normalizado >= 60 ? "Aprobado" : "Rechazado";
        
        // 3. Estructuración del resultado
        return {
            valorOriginal: res,
            valorNormalizado: normalizado.toFixed(2),
            calificacion: calificacion
        };
    });
};

```

### Salida Esperada

```text
[
  { valorOriginal: 45, valorNormalizado: '45.00', calificacion: 'Rechazado' },
  { valorOriginal: 80, valorNormalizado: '80.00', calificacion: 'Aprobado' },
  { valorOriginal: 20, valorNormalizado: '20.00', calificacion: 'Rechazado' }
]
[
  { valorOriginal: 15, valorNormalizado: '60.00', calificacion: 'Aprobado' },
  { valorOriginal: 20, valorNormalizado: '80.00', calificacion: 'Aprobado' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-038/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco