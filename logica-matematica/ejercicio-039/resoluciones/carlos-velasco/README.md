# Logica matematica 039 - validaciones numericas

## Sistema de Validación de Fórmulas Químicas

Este script calcula la masa molar teórica de una fórmula química y la compara con un valor reportado para detectar errores de cálculo en reportes de laboratorio.

* **Descripción del proceso:**
* **Cálculo Estequiométrico**: Utiliza el método `.reduce()` para sumar el producto de la masa atómica de cada elemento por su cantidad, obteniendo la masa molar total.
* **Verificación de Precisión**: Calcula la diferencia absoluta entre la masa calculada y la reportada.
* **Validación**: Si la diferencia supera un umbral de tolerancia de $0.1$ unidades, el sistema marca el reporte como "Inválido" y detalla la magnitud del error. De lo contrario, se marca como "Válido".


* **Tecnologías:**
* JavaScript (métodos de arreglos, funciones matemáticas).

---

### Explicación técnica

1. **Precisión Matemática**: El uso de `Math.abs` es fundamental para evaluar la discrepancia independientemente de si el valor reportado es mayor o menor que el calculado, enfocándose únicamente en la magnitud del error.
2. **Tolerancia Científica**: El umbral de $0.1$ permite manejar pequeñas variaciones en los pesos atómicos reportados en diferentes tablas periódicas, evitando rechazos innecesarios por redondeos mínimos.
3. **Reducción de Arreglos**: El método `.reduce()` provee una forma eficiente de iterar y acumular valores complejos, haciendo el código altamente legible y mantenible frente a fórmulas moleculares más extensas.

### Lógica del Código

```javascript
const validarFormula = (formula, masaReportada) => {
    // 1. Cálculo de masa molar total (sumatoria de componentes)
    const masaCalculada = formula.reduce((acc, el) => acc + (el.masaAtomica * el.cantidad), 0);
    
    // 2. Cálculo de la discrepancia
    const diferencia = Math.abs(masaCalculada - masaReportada);

    // 3. Validación contra umbral de tolerancia (0.1)
    if (diferencia > 0.1) {
        return {
            estado: "Inválido",
            diferencia: diferencia.toFixed(2),
            motivo: "Error de cálculo detectado."
        };
    }

    // 4. Retorno de estado válido
    return {
        estado: "Válido",
        masaCalculada: masaCalculada.toFixed(2),
        motivo: "La masa molar reportada es correcta."
    };
};

```

### Salida Esperada

```text
{
  estado: 'Válido',
  masaCalculada: '18.02',
  motivo: 'La masa molar reportada es correcta.'
}
{
  estado: 'Inválido',
  diferencia: '1.98',
  motivo: 'Error de cálculo detectado.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-039/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco