# Logica general 033 - resolucion de casos

## Sistema de Evaluación de Salto en Paracaídas

Este script automatiza el protocolo de seguridad para paracaidistas, evaluando el estado del equipo, las condiciones atmosféricas (viento) y la altitud para decidir la acción de apertura.

* **Descripción del proceso:**
* **Verificación de seguridad**: Prioriza la integridad del equipo (`estadoParacaidas`). Si falla, activa el protocolo de emergencia.
* **Límite ambiental**: Evalúa si la velocidad del viento excede los límites operativos (50 unidades).
* **Protocolos de apertura**:
* **Altitud > 500**: Ejecuta apertura estándar.
* **150 < Altitud <= 500**: Ejecuta apertura de emergencia.
* **Altitud <= 150**: Emite alerta crítica de seguridad.




* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).

---

### Explicación técnica

1. **Jerarquía de riesgos**: La función emplea una estructura de control donde los riesgos críticos (equipo y viento) son evaluados antes que la maniobra de apertura. Esto es vital en sistemas de control de seguridad real, donde un fallo en el paracaídas anula cualquier consideración sobre la altitud.
2. **Seguridad por diseño**: La última rama del `if/else` (`else { return "Alerta crítica" }`) actúa como un capturador de fallos de seguridad (fail-safe), garantizando que si los datos de altitud son peligrosamente bajos, el sistema siempre emita una alerta en lugar de proponer una apertura estándar.
3. **Claridad operativa**: Cada retorno incluye no solo la `accion` a realizar, sino también el `motivo`, lo cual es fundamental para que el operador del sistema o el paracaidista comprenda el contexto inmediato de la decisión tomada por el sistema.

### Lógica del Código

```javascript
const evaluarSalto = (altitud, velocidadViento, estadoParacaidas) => {
    // 1. Prioridad: Estado del equipo
    if (!estadoParacaidas) {
        return { accion: "Activar reserva", motivo: "Fallo detectado en paracaídas principal." };
    }

    // 2. Prioridad: Condiciones ambientales
    if (velocidadViento > 50) {
        return { accion: "Salto cancelado", motivo: "Vientos superiores al límite de seguridad." };
    }

    // 3. Prioridad: Maniobra según altitud
    if (altitud > 500) {
        return { accion: "Apertura estándar", motivo: "Altitud óptima para maniobras." };
    } else if (altitud > 150) {
        return { accion: "Apertura de emergencia", motivo: "Zona de baja altura; desplegar inmediatamente." };
    } else {
        return { accion: "Alerta crítica", motivo: "Altura insuficiente para despliegue seguro." };
    }
};

```

### Salida Esperada

```text
{
  accion: 'Apertura estándar',
  motivo: 'Altitud óptima para maniobras.'
}
{
  accion: 'Alerta crítica',
  motivo: 'Altura insuficiente para despliegue seguro.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-033/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco