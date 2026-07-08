# Logica general 037 - tablas de decision

## Sistema de Validación de Muros

Este script automatiza la verificación de viabilidad de estructuras de muro antes de su construcción. Evalúa si la combinación de materiales y dimensiones es segura o si requiere medidas de refuerzo adicionales.

* **Descripción del proceso:**
* **Validación de Estabilidad**: Restringe el uso de madera para alturas superiores a 3 metros debido a riesgos de inestabilidad.
* **Validación de Carga**: Prohíbe el uso de vidrio en estructuras con función estructural (`esEstructural: true`) por ser un material no apto para soportar carga.
* **Control de Refuerzo**: Identifica muros de concreto con alturas superiores a 10 metros, marcándolos como estructuras que requieren refuerzo técnico adicional.
* **Aprobación**: Si el muro cumple con todos los criterios de seguridad, se marca como "Aprobado".


* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).

---

### Explicación técnica

1. **Priorización de Riesgos**: La función evalúa primero las condiciones de "Rechazo" (situaciones críticas de inestabilidad o materiales no permitidos) antes de pasar a advertencias de "Requerimiento", asegurando que la seguridad prevalezca sobre la viabilidad constructiva.
2. **Retorno Anticipado (*Fail-Fast*)**: La estructura de `return` garantiza que el código deje de procesar información tan pronto se detecta un incumplimiento, optimizando el rendimiento y evitando errores.
3. **Claridad Operativa**: Al separar explícitamente los estados "Rechazado", "Requerimiento" y "Aprobado", el sistema permite que los ingenieros o constructores tomen decisiones precisas sobre el diseño según el resultado obtenido.

### Lógica del Código

```javascript
const validarMuro = (altura, material, esEstructural) => {
    // 1. Validación: Madera vs Altura
    if (material === "madera" && altura > 3) {
        return { estado: "Rechazado", motivo: "Inestable" };
    }
    
    // 2. Validación: Vidrio estructural
    if (esEstructural && material === "vidrio") {
        return { estado: "Rechazado", motivo: "Material no permitido para carga" };
    }
    
    // 3. Validación: Concreto y refuerzo necesario
    if (material === "concreto" && altura > 10) {
        return { estado: "Requerimiento", motivo: "Requiere refuerzo extra" };
    }
    
    // 4. Aprobación final
    return { estado: "Aprobado", motivo: "Cumple normativa" };
};

```

### Salida Esperada

```text
{ estado: 'Rechazado', motivo: 'Inestable' }
{ estado: 'Requerimiento', motivo: 'Requiere refuerzo extra' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-037/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco