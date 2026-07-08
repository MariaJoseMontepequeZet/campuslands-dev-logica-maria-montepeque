# Logica general 034 - diagnostico de errores

## Sistema de Diagnóstico de Kit de Tatuaje

Este script realiza una verificación de seguridad esencial sobre un kit de tatuaje, evaluando criterios sanitarios críticos y disponibilidad de insumos para asegurar que el entorno de trabajo cumpla con los estándares operativos.

* **Descripción del proceso:**
* **Verificación de Seguridad Sanitaria**: Prioriza la presencia de agujas estériles y tinta sellada. Si cualquiera de estos elementos falta, el sistema marca el kit como "Inutilizable" por riesgo biológico.
* **Verificación Operativa**: Comprueba el estado funcional de la máquina de tatuar.
* **Gestión de Stock**: Evalúa la disponibilidad de guantes; si es menor a 2, emite una "Alerta" por falta de insumos, permitiendo corregir el stock antes de proceder.
* **Aprobación**: Si todos los criterios son satisfactorios, el kit es marcado como "Aprobado".


* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).

---

### Explicación técnica

1. **Priorización de Riesgos (Sanidad sobre Operatividad)**: La jerarquía del código pone en primer lugar los elementos que comprometen la salud humana (agujas y tintas). Esto es fundamental en entornos médicos o de tatuaje para evitar incidentes graves antes de siquiera verificar el funcionamiento de las herramientas.
2. **Seguridad Fail-Fast**: El algoritmo utiliza una serie de retornos anticipados (`return`). Si el kit no pasa la primera validación, el proceso se detiene inmediatamente, ahorrando recursos y evitando que el usuario proceda con una configuración insegura.
3. **Información Contextual**: Al devolver tanto el `estado` como el `motivo`, el sistema no solo bloquea la operación, sino que instruye al usuario sobre exactamente qué debe corregir (ej. reponer guantes o revisar la esterilización), mejorando la eficiencia operativa.

### Lógica del Código

```javascript
const diagnosticarKit = (kit) => {
    // 1. Prioridad: Riesgo Biológico (Sanidad)
    if (!kit.agujasEsteriles || !kit.tintaSellada) {
        return { estado: "Inutilizable", motivo: "Riesgo biológico detectado." };
    }
    
    // 2. Prioridad: Fallo Técnico (Operatividad)
    if (!kit.maquinaOperativa) {
        return { estado: "Inutilizable", motivo: "Fallo técnico en la máquina." };
    }
    
    // 3. Prioridad: Stock (Insumos)
    if (kit.guantesDisponibles < 2) {
        return { estado: "Alerta", motivo: "Stock insuficiente de guantes." };
    }
    
    // 4. Kit validado
    return { estado: "Aprobado", motivo: "Kit listo para sesión." };
};

```

### Salida Esperada

```text
{ estado: 'Alerta', motivo: 'Stock insuficiente de guantes.' }
{ estado: 'Inutilizable', motivo: 'Riesgo biológico detectado.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-034/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco