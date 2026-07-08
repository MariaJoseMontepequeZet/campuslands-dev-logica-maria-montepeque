Aquí tienes el archivo `README.md` profesional para este ejercicio, documentando la lógica de cálculo de precios finales con impuestos y conversión de moneda.

---

## Sistema de Cálculo de Precios Finales

Este script implementa un motor de cálculo financiero diseñado para determinar el precio final de un producto o servicio tras aplicar un porcentaje de impuestos y ajustar el valor mediante una tasa de cambio de moneda.

* **Descripción del proceso:**
* **Aplicación de impuestos:** Incrementa el precio base utilizando la tasa impositiva proporcionada.
* **Conversión de moneda:** Ajusta el valor resultante según un factor de cambio para obtener el valor en la moneda destino.
* **Redondeo financiero:** Utiliza `Math.round()` para presentar el precio final como un número entero, facilitando la lectura para el usuario final.
* **Generación de informe:** Retorna un objeto detallado con el precio final calculado, la moneda destino y una explicación técnica de las operaciones realizadas.


* **Tecnologías:**
* JavaScript (cálculos aritméticos y redondeo matemático).


---

### Explicación técnica

1. **Interpolación de cadenas**: La propiedad `explicacion` utiliza *template literals* (backticks) para inyectar dinámicamente el porcentaje de impuesto calculado como `impuesto * 100`, asegurando que la explicación sea siempre precisa para cualquier valor de entrada.
2. **Orden de operaciones**: La lógica respeta el orden matemático estándar: primero se incrementa el valor base mediante el factor `(1 + impuesto)` y posteriormente se escala mediante la tasa de cambio.
3. **Redondeo proactivo**: El uso de `Math.round()` es crucial en aplicaciones financieras de este tipo, ya que elimina decimales insignificantes que podrían confundir al usuario, entregando siempre un valor limpio y estandarizado.


### Lógica del Código

```javascript
const calcularPrecioFinal = (precioBase, impuesto, cambio) => {
    // 1. Aplicar impuesto al precio base
    const precioConImpuesto = precioBase * (1 + impuesto);
    
    // 2. Convertir a la moneda destino
    const precioExtranjero = precioConImpuesto * cambio;
    
    // 3. Redondear al entero más próximo
    const precioFinal = Math.round(precioExtranjero);

    return {
        precio_final: precioFinal,
        moneda: "USD",
        explicacion: `Se aplicó un impuesto del ${impuesto * 100}%, se convirtió a la moneda destino y se redondeó al entero más próximo.`
    };
};

```

### Salida Esperada

```text
{
  precio_final: 121,
  moneda: 'USD',
  explicacion: 'Se aplicó un impuesto del 15%, se convirtió a la moneda destino y se redondeó al entero más próximo.'
}
{
  precio_final: 50,
  moneda: 'USD',
  explicacion: 'Se aplicó un impuesto del 10%, se convirtió a la moneda destino y se redondeó al entero más próximo.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-010/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

