## Sistema de Cálculo de Costo por Persona

Este script automatiza el cálculo del costo individual para un grupo de personas, integrando el impuesto al valor agregado (IVA) y asegurando que el resultado final sea siempre un número entero obtenido mediante redondeo hacia arriba.

* **Descripción del proceso:**
* **Validación**: Verifica que el número de personas sea mayor a cero para evitar errores de división por cero.
* **Cálculo de impuestos**: Aplica la tasa de impuesto (`tasaImpuesto`) al `costoTotal` para obtener el valor final a pagar.
* **Distribución y redondeo**: Divide el total entre el número de personas y utiliza `Math.ceil()` para redondear al entero superior, garantizando que no se pierdan centavos en el prorrateo.
* **Reporte**: Genera un objeto con el costo individual y una explicación detallada del proceso.


* **Tecnologías:**
* JavaScript (`Math.ceil` para redondeo, manejo de parámetros numéricos).



---

### Explicación técnica

1. **`Math.ceil()` como estándar**: En aplicaciones financieras donde se dividen costos, este método es preferible a `Math.round()` si la política de la empresa es asegurar que el costo total cubierto por la suma de las partes nunca sea inferior al total real.
2. **Precisión decimal (`toFixed(2)`)**: Se utiliza exclusivamente en la cadena de texto de la explicación para fines estéticos, permitiendo mostrar los dos decimales del impuesto original sin afectar el cálculo del entero superior.
3. **Protección de errores**: La cláusula de validación inicial (`numPersonas <= 0`) evita resultados `Infinity` o `NaN` en la consola, lo que robustece la función ante entradas de datos no esperadas.

### Lógica del Código

```javascript
const calcularCostoPorPersona = (costoTotal, numPersonas, tasaImpuesto) => {
    // 1. Validación de grupo
    if (numPersonas <= 0) return "Error: El grupo debe ser de al menos 1 persona.";

    // 2. Cálculo del total con impuesto
    const totalConImpuesto = costoTotal * (1 + tasaImpuesto);
    
    // 3. Distribución con redondeo al entero superior
    const costoPorPersona = Math.ceil(totalConImpuesto / numPersonas);

    // 4. Retorno del reporte
    return {
        costo_por_persona: costoPorPersona,
        explicacion: `Total con IVA: ${totalConImpuesto.toFixed(2)}. Dividido entre ${numPersonas} personas y redondeado al entero superior.`
    };
};

```

### Salida Esperada

```text
{
  costo_por_persona: 397,
  explicacion: 'Total con IVA: 1190.00. Dividido entre 3 personas y redondeado al entero superior.'
}
{
  costo_por_persona: 110,
  explicacion: 'Total con IVA: 550.00. Dividido entre 5 personas y redondeado al entero superior.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-030/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco