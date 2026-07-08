# Logica matematica 016 - presupuestos y descuentos

## Sistema de Presupuesto para Animaciones

Este script permite calcular el costo total de un proyecto de animación basado en el número de *frames* y el costo unitario por *frame*. Además, aplica automáticamente un descuento por volumen si el proyecto supera los 500 *frames*.

* **Descripción del proceso:**
* **Cálculo base:** Multiplica la cantidad de `frames` por el `costoFrame`.
* **Aplicación de descuento:** Verifica si la cantidad de `frames` supera el umbral de 500; de ser así, calcula un ahorro basado en el porcentaje de `descVolumen`.
* **Generación de informe:** Retorna un objeto con el costo total final, el ahorro aplicado y una explicación textual sobre la aplicación o no del descuento.


* **Tecnologías:**
* JavaScript (cálculos aritméticos, estructuras condicionales y operadores ternarios).
---

### Explicación técnica

1. **Operador ternario**: Se emplea en la propiedad `explicacion` para generar un mensaje dinámico y conciso que informa al usuario sobre el estado del descuento.
2. **Formateo de moneda**: El uso de `.toFixed(2)` garantiza que los resultados financieros sean legibles y cumplan con el estándar de dos decimales, incluso si el resultado es un número entero.
3. **Encapsulamiento**: La lógica de negocio está aislada dentro de la función, lo cual facilita la integración del cálculo en sistemas de cotización más grandes o interfaces de usuario.

### Lógica del Código

```javascript
const calcularPresupuestoAnimacion = (frames, costoFrame, descVolumen) => {
    const costoBase = frames * costoFrame;
    let ahorro = 0;
    
    // 1. Verificar si aplica descuento por volumen (> 500 frames)
    if (frames > 500) {
        ahorro = costoBase * descVolumen;
    }
    
    const costoFinal = costoBase - ahorro;

    return {
        presupuesto_total: `$${costoFinal.toFixed(2)}`,
        ahorro_aplicado: `$${ahorro.toFixed(2)}`,
        explicacion: frames > 500 
            ? `Se aplicó un ${descVolumen * 100}% de descuento por volumen.` 
            : "No aplica descuento por volumen (mínimo 500 frames)."
    };
};

```

### Salida Esperada

```text
{
  presupuesto_total: '$5400.00',
  ahorro_aplicado: '$600.00',
  explicacion: 'Se aplicó un 10% de descuento por volumen.'
}
{
  presupuesto_total: '$2000.00',
  ahorro_aplicado: '$0.00',
  explicacion: 'No aplica descuento por volumen (mínimo 500 frames).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-016/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco