# Logica general 038 - sistemas de turnos

## Sistema de Asignación de Soldadores

Este script evalúa si un soldador es apto para un proyecto específico basándose en su nivel de fatiga física y su certificación profesional.

* **Descripción del proceso:**
* **Validación de Fatiga**: Comprueba si el nivel de fatiga del soldador es superior a 80. De ser así, se rechaza la asignación para prevenir accidentes.
* **Validación de Competencia**: Compara el `nivelCertificacion` del soldador con la `complejidad` del proyecto. Si la certificación es inferior a la exigida, se rechaza la asignación.
* **Asignación**: Si el soldador supera ambas validaciones, el sistema confirma la asignación.


* **Tecnologías:**
* JavaScript (objetos, condicionales jerárquicos).

---

### Explicación técnica

1. **Priorización de Seguridad**: El sistema verifica primero el estado físico del trabajador (`fatiga`), garantizando que la seguridad laboral sea la prioridad antes de evaluar la capacidad técnica.
2. **Validación de Competencias**: Al comparar la certificación con la complejidad del proyecto, se asegura la calidad técnica del trabajo realizado.
3. **Retroalimentación Clara**: Cada retorno incluye un `motivo` específico que permite entender rápidamente por qué una asignación falló, facilitando la toma de decisiones del gestor de proyectos.

### Lógica del Código

```javascript
const asignarSoldador = (soldador, complejidad) => {
    // 1. Validación: Fatiga (Límite 80%)
    if (soldador.fatiga > 80) {
        return { asignado: false, motivo: "Soldador requiere descanso (fatiga alta)." };
    }
    
    // 2. Validación: Certificación vs Complejidad del proyecto
    if (soldador.nivelCertificacion < complejidad) {
        return { asignado: false, motivo: "Nivel de certificación insuficiente." };
    }
    
    // 3. Asignación confirmada
    return { asignado: true, motivo: `Soldador ${soldador.nombre} asignado con éxito.` };
};

```

### Salida Esperada

```text
{ asignado: true, motivo: 'Soldador Pedro asignado con éxito.' }
{ asignado: false, motivo: 'Soldador requiere descanso (fatiga alta).' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-038/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco