# Logica matematica 014 - areas y perimetros

## Sistema de Cálculo de Costos de Tatuajes

Este script implementa un motor de cálculo financiero diseñado para determinar el costo total de un tatuaje, integrando tanto el valor del área ocupada como un recargo por perímetro complejo.

* **Descripción del proceso:**
* **Cálculo geométrico:** Determina el área ($ancho \times alto$) y el perímetro ($2 \times (ancho + alto)$) del diseño.
* **Aplicación de tarifas:** Calcula el costo base por área ($cm^2$) y aplica un recargo proporcional por perímetro si este supera un umbral de seguridad de 30 cm.
* **Formateo financiero:** Retorna un objeto con las dimensiones, el costo total formateado a dos decimales y un resumen explicativo del recargo aplicado.


* **Tecnologías:**
* JavaScript (cálculos geométricos, estructuras condicionales y manipulación de cadenas).



---

### Explicación técnica

1. **Operador ternario (`? :`)**: Se utiliza en la propiedad `explicacion` para generar dinámicamente un mensaje que confirma al usuario si el recargo fue aplicado, basándose directamente en la condición de perímetro, lo cual reduce redundancia en el código.
2. **Precisión financiera**: El uso de `.toFixed(2)` asegura que el costo resultante siempre mantenga el formato de moneda estándar, evitando errores visuales con números de punto flotante.
3. **Lógica del recargo**: La implementación del umbral de 30 cm garantiza que los diseños pequeños no tengan cargos excesivos, mientras que los diseños más grandes y complejos contribuyan equitativamente a los costos operativos de la sesión.

### Lógica del Código

```javascript
const calcularCostoTatuaje = (ancho, alto, costoCm2, costoPExtra) => {
    // 1. Calcular dimensiones
    const area = ancho * alto;
    const perimetro = 2 * (ancho + alto);
    
    // 2. Calcular costo base
    let costoTotal = area * costoCm2;
    
    // 3. Aplicar recargo si el perímetro > 30 cm
    if (perimetro > 30) {
        costoTotal += (perimetro * costoPExtra);
    }
    
    return {
        area: `${area} cm2`,
        perimetro: `${perimetro} cm`,
        costo_total: `$${costoTotal.toFixed(2)}`,
        explicacion: `Costo calculado por área más recargo por perímetro ${perimetro > 30 ? 'aplicado' : 'no aplicado'}.`
    };
};

```

### Salida Esperada

```text
{
  area: '20 cm2',
  perimetro: '18 cm',
  costo_total: '$200.00',
  explicacion: 'Costo calculado por área más recargo por perímetro no aplicado.'
}
{
  area: '100 cm2',
  perimetro: '40 cm',
  costo_total: '$1080.00',
  explicacion: 'Costo calculado por área más recargo por perímetro aplicado.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-014/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
