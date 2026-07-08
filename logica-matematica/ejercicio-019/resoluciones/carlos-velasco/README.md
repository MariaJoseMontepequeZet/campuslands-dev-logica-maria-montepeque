# Logica matematica 019 - validaciones numericas

## Sistema de Validación de Mezclas Químicas

Este script permite evaluar la estabilidad de una mezcla química calculando la proporción entre dos reactivos (`A` y `B`) y comparándola con un `factorIdeal` dentro de un margen de tolerancia permitido.

* **Descripción del proceso:**
* **Validación de seguridad**: Previene errores matemáticos verificando que el `reactivoB` no sea cero.
* **Cálculo de proporción**: Determina la relación real dividiendo `reactivoA` por `reactivoB`.
* **Evaluación de estabilidad**: Calcula un margen de tolerancia del 5% sobre el factor ideal y clasifica la mezcla como "Estable" o "Inestable" (por déficit o exceso).
* **Reporte**: Retorna el estado resultante y la proporción calculada con dos decimales de precisión.


* **Tecnologías:**
* JavaScript (funciones matemáticas, condicionales y manipulación de precisión decimal).

---

### Explicación técnica

1. **`Math.abs()`**: Es fundamental para determinar la diferencia absoluta entre la proporción calculada y el factor ideal, permitiendo evaluar si la desviación cae dentro del margen permitido sin importar si la diferencia es positiva o negativa.
2. **Margen de tolerancia**: La implementación de un margen del 5% (`factorIdeal * 0.05`) añade un nivel de realismo al cálculo, reconociendo que pequeñas variaciones son aceptables en entornos de laboratorio reales.
3. **`toFixed(2)`**: Garantiza que el valor de la proporción sea consistente en los reportes, eliminando variaciones de precisión decimal que podrían confundir al usuario final.

### Lógica del Código

```javascript
const validarMezcla = (reactivoA, reactivoB, factorIdeal) => {
    // 1. Evitar división por cero
    if (reactivoB === 0) return "Error: El reactivo B no puede ser 0.";
    
    const proporcion = reactivoA / reactivoB;
    const margen = factorIdeal * 0.05;

    // 2. Determinar estabilidad mediante margen de tolerancia
    if (Math.abs(proporcion - factorIdeal) <= margen) {
        return { estado: "Reacción Estable", proporcion: proporcion.toFixed(2) };
    } else if (proporcion < factorIdeal) {
        return { estado: "Inestable: Déficit de reactivo A", proporcion: proporcion.toFixed(2) };
    } else {
        return { estado: "Inestable: Exceso de reactivo A", proporcion: proporcion.toFixed(2) };
    }
};

```

### Salida Esperada

```text
{ estado: 'Reacción Estable', proporcion: '2.00' }
{ estado: 'Inestable: Déficit de reactivo A', proporcion: '1.00' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-019/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco