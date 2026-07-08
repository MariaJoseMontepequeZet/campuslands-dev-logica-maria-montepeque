# Logica general 013 - resolucion de casos

## Sistema de Evaluación de Seguridad para Saltos

Este script implementa una lógica de validación de seguridad para determinar si las condiciones climáticas son aptas para realizar un salto, priorizando la seguridad del participante mediante la evaluación de parámetros críticos.

* **Descripción del proceso:**
* **Validación de viento:** Evalúa si la velocidad del viento excede los 30 km/h, marcando el salto como cancelado si es inseguro.
* **Validación de visibilidad:** Evalúa si la visibilidad es inferior a 5 unidades, marcando el salto como cancelado en caso contrario.
* **Resolución:** Si ambas condiciones son favorables, el salto es autorizado.
* **Reporte:** Retorna un objeto con la acción resultante y un motivo detallado.


* **Tecnologías:**
* JavaScript (lógica condicional basada en cláusulas de guardia).


---

### Explicación técnica

1. **Cláusulas de guardia (Guard Clauses)**: Se priorizan las condiciones de seguridad negativa para detener el proceso inmediatamente si detecta un riesgo, evitando anidaciones innecesarias (`if/else`) y mejorando la legibilidad.
2. **Encapsulamiento**: La función recibe un objeto `clima` como parámetro, permitiendo una escalabilidad sencilla si en el futuro se desea agregar más variables meteorológicas (como temperatura o humedad).
3. **Resultado estructurado**: El retorno constante de un objeto con las propiedades `accion` y `motivo` permite que cualquier sistema consumidor del código obtenga una respuesta clara, estandarizada y fácil de procesar.

### Lógica del Código

```javascript
const evaluarCondicionesSalto = (clima) => {
    // 1. Validar velocidad del viento
    if (clima.velocidadViento > 30) {
        return { 
            accion: "Salto cancelado", 
            motivo: "Viento demasiado fuerte para un salto seguro." 
        };
    }
    // 2. Validar visibilidad
    if (clima.visibilidad < 5) {
        return { 
            accion: "Salto cancelado", 
            motivo: "La visibilidad es insuficiente por condiciones climáticas." 
        };
    }
    // 3. Autorizar salto
    return { 
        accion: "Salto autorizado", 
        motivo: "Condiciones climáticas óptimas para el salto." 
    };
};

```

### Salida Esperada

```text
{
  accion: 'Salto autorizado',
  motivo: 'Condiciones climáticas óptimas para el salto.'
}
{
  accion: 'Salto cancelado',
  motivo: 'Viento demasiado fuerte para un salto seguro.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-013/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

