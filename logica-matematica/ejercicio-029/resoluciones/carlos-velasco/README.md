# Logica matematica 029 - modulos y divisibilidad

## Sistema de Gestión de Seguridad por Ocupación

Este script evalúa la seguridad de un conjunto de habitaciones analizando cuántas de ellas presentan una ocupación que es múltiplo de un número clave definido. Este mecanismo permite detectar patrones de alta densidad que requieren atención inmediata.

* **Descripción del proceso:**
* **Filtrado**: Utiliza el método `.filter()` para identificar las habitaciones donde la ocupación es mayor a cero y es divisible exactamente por el `numeroClave` (`p % numeroClave === 0`).
* **Evaluación de riesgo**: Si se detectan 2 o más habitaciones con ocupaciones críticas, el sistema cambia el estado a "Alerta total". De lo contrario, se mantiene en estado "Seguro".
* **Reporte**: Devuelve un objeto detallando el número de alarmas activadas, el estado de seguridad y una explicación contextualizada.


* **Tecnologías:**
* JavaScript (`filter` para análisis de datos, operador de módulo `%`).
---

### Explicación técnica

1. **Uso del operador de módulo (`%`)**: Esta es la forma técnica más eficiente de determinar la divisibilidad sin necesidad de realizar divisiones de punto flotante. El hecho de que el residuo sea `0` indica una relación matemática directa, lo cual es la base de este filtro.
2. **Abstracción de reglas**: Al recibir el `numeroClave` como parámetro, la función es altamente reutilizable, permitiendo que el sistema de seguridad se adapte a diferentes protocolos o criterios de alerta sin cambiar la lógica interna.
3. **Concisión lógica**: El uso del operador ternario para definir el `estado` (Alerta vs. Seguro) reduce el código a una sola línea, manteniendo la claridad y evitando bloques condicionales innecesarios.

### Lógica del Código

```javascript
const gestionarSeguridad = (habitaciones, numeroClave) => {
    // 1. Validación de entrada
    if (!habitaciones || habitaciones.length === 0) return "No hay habitaciones.";

    // 2. Identificación de habitaciones con ocupación problemática
    const alarmas = habitaciones.filter(p => p > 0 && p % numeroClave === 0).length;

    // 3. Determinación del estado de seguridad
    const estado = alarmas >= 2 ? "Alerta total" : "Seguro";

    // 4. Retorno del reporte
    return {
        alarmas_activas: alarmas,
        estado_seguridad: estado,
        explicacion: `Se detectaron ${alarmas} habitaciones con ocupación múltiplo de ${numeroClave}.`
    };
};

```

### Salida Esperada

```text
{
  alarmas_activas: 2,
  estado_seguridad: 'Alerta total',
  explicacion: 'Se detectaron 2 habitaciones con ocupación múltiplo de 4.'
}
{
  alarmas_activas: 0,
  estado_seguridad: 'Seguro',
  explicacion: 'Se detectaron 0 habitaciones con ocupación múltiplo de 2.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-029/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco