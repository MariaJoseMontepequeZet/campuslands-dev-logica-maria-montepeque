# Logica matematica 034 - areas y perimetros

## Sistema de Cálculo de Costo de Tatuaje

Este script automatiza la estimación financiera de una sesión de tatuaje. La lógica considera tanto la superficie total (área) como el contorno (perímetro) del diseño, aplicando además una regla de negocio para recargos en diseños pequeños.

* **Descripción del proceso:**
* **Cálculo Geométrico**: Determina el área ($ancho \times alto$) y el perímetro ($2 \times (ancho + alto)$) del tatuaje.
* **Cálculo de Costo Base**: Suma el costo por superficie y el costo por contorno utilizando precios parametrizados por unidad ($cm^2$ y perímetro).
* **Regla de Recargo**: Si el área es menor a 5 unidades, se aplica un recargo fijo de 20 unidades monetarias al costo total.
* **Reporte**: Devuelve un objeto detallado con el costo final formateado, el área, el perímetro y la justificación del cálculo.


* **Tecnologías:**
* JavaScript (lógica matemática, manipulación de objetos).

---

### Explicación técnica

1. **Consistencia Financiera**: El uso de `toFixed(2)` es fundamental en cualquier sistema de facturación o estimación de precios, ya que asegura que el resultado final siempre muestre dos decimales, cumpliendo con los estándares de representación de divisas.
2. **Validación Defensiva**: La verificación inicial `if (ancho <= 0 || alto <= 0)` protege al sistema contra errores humanos de entrada, evitando cálculos matemáticos absurdos o estados de error inesperados.
3. **Lógica de Negocio Adaptativa**: La regla de recargo (`area < 5`) permite al tatuador proteger la rentabilidad de diseños pequeños, donde el esfuerzo fijo de preparación a menudo supera el costo variable proporcional al tamaño.

### Lógica del Código

```javascript
const calcularCostoTatuaje = (ancho, alto, precioCm2, precioPerimetro) => {
    // 1. Validación de dimensiones
    if (ancho <= 0 || alto <= 0) return "Dimensiones inválidas.";

    // 2. Cálculo de métricas
    let area = ancho * alto;
    let perimetro = 2 * (ancho + alto);
    
    // 3. Aplicación de tarifas base
    let costoBase = (area * precioCm2) + (perimetro * precioPerimetro);
    
    // 4. Aplicación de recargo mínimo por diseño pequeño (área < 5)
    if (area < 5) {
        costoBase += 20;
    }

    // 5. Retorno de resultados
    return {
        costo_total: costoBase.toFixed(2),
        area: area,
        perimetro: perimetro,
        explicacion: "Cálculo basado en área y perímetro, incluyendo recargo mínimo si aplica."
    };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {68332B8C-E7B0-48EC-9182-CD23DF81762A}.png, los resultados obtenidos son:

```text
{
  costo_total: '100.00',
  area: 4,
  perimetro: 8,
  explicacion: 'Cálculo basado en área y perímetro, incluyendo recargo mínimo si aplica.'
}
{
  costo_total: '1200.00',
  area: 100,
  perimetro: 40,
  explicacion: 'Cálculo basado en área y perímetro, incluyendo recargo mínimo si aplica.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-034/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco