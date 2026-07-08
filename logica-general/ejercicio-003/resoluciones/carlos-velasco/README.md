# Logica general 003 - toma de decisiones

## Sistema de Decisión de Selección de Equipos

Este script implementa una lógica de negocio para filtrar y categorizar equipos deportivos basándose en su estado actual y su nivel de habilidad. Es una herramienta diseñada para automatizar la selección de participantes en etapas finales de competiciones.

* **Descripción del proceso:**
* **Filtrado de estado:** Detecta automáticamente si un equipo ha sido descalificado para descartarlo de inmediato.
* **Evaluación de rendimiento:** Si el equipo está "listo", aplica un umbral de habilidad (mínimo 8) para determinar si clasifica a la final o si debe pasar a lista de espera.
* **Manejo de excepciones:** Proporciona un estado por defecto para equipos que no cumplen con los estados requeridos.


* **Tecnologías:**
* JavaScript (lógica condicional anidada).


---

### Explicación técnica: ¿Cómo funciona la lógica?

La robustez de esta función reside en su estructura de **decisión jerárquica**:

1. **Priorización de estados**: La validación inicial del estado "descalificado" actúa como una barrera de seguridad que optimiza la función, permitiendo que el sistema ignore rápidamente registros inválidos.
2. **Lógica anidada**: La segmentación dentro de `if (equipo.estado === "listo")` permite una granularidad mayor en la toma de decisiones, diferenciando entre equipos aptos para la final y aquellos que necesitan seguir entrenando, basándose puramente en su `nivelHabilidad`.
3. **Resultado estructurado**: Al devolver un objeto con `accion` y `motivo`, la función no solo ejecuta una lógica, sino que también comunica claramente el porqué de la decisión, facilitando la integración con interfaces que requieran mostrar retroalimentación al usuario.


### Lógica del Código

```javascript
const decidirEquipo = (equipo) => {
    // 1. Filtrar equipos descalificados
    if (equipo.estado === "descalificado") {
        return { accion: "No seleccionar", motivo: "El equipo está descalificado." };
    }
    // 2. Evaluar equipos listos
    if (equipo.estado === "listo") {
        if (equipo.nivelHabilidad >= 8) {
            return { accion: "Seleccionar para final", motivo: "Equipo listo y con nivel competitivo alto." };
        } else {
            return { accion: "Poner en lista de espera", motivo: "Equipo listo pero nivel por debajo del estándar de la final." };
        }
    }
    // 3. Caso por defecto
    return { accion: "Ignorar", motivo: "El equipo no cumple con el estado requerido." };
};

```

### Salida Esperada


```text
{
  accion: 'Seleccionar para final',
  motivo: 'Equipo listo y con nivel competitivo alto.'
}
{ accion: 'No seleccionar', motivo: 'El equipo está descalificado.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-003/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
