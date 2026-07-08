# Logica general 009 - simulacion de estados

## Sistema de Simulación de Supervivencia

Este script implementa una lógica de toma de decisiones para un juego de supervivencia, evaluando el estado actual de un personaje frente a eventos críticos para determinar su resultado.

* **Descripción del proceso:**
* **Análisis de estado:** Evalúa la combinación entre la acción actual del personaje (`estado`) y la amenaza ambiental (`evento`).
* **Resolución de conflictos:** Implementa reglas condicionales para determinar si el personaje sobrevive, resulta herido o es eliminado.
* **Estado por defecto:** Si no ocurren eventos críticos, el personaje mantiene su estado original.


* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).



---

### Explicación técnica

1. **Desestructuración de objetos**: El uso de `const { estado, evento } = personaje;` permite extraer las propiedades necesarias de forma limpia y directa, mejorando la legibilidad del código al evitar la repetición de `personaje.propiedad`.
2. **Jerarquía de condiciones**: La lógica está diseñada como una cascada de validaciones. La primera condición (`escondido` + `monstruo`) tiene prioridad sobre la regla general del monstruo, lo cual es fundamental para permitir escenarios de victoria específicos.
3. **Manejo de estados**: El `return` final actúa como un *fallback* (valor de respaldo), asegurando que si no se cumple ninguna condición crítica, el sistema responda de manera coherente sin romper el flujo de la aplicación.

### Lógica del Código

```javascript
const simularSupervivencia = (personaje) => {
    const { estado, evento } = personaje;

    // Regla 1: Ocultarse correctamente frente al monstruo
    if (estado === "escondido" && evento === "monstruo cerca") {
        return { nuevoEstado: "sobrevive", motivo: "Te ocultaste a tiempo." };
    }
    
    // Regla 2: Correr frente a una trampa
    if (estado === "corriendo" && evento === "trampa") {
        return { nuevoEstado: "herido", motivo: "Caíste en una trampa mientras huías." };
    }

    // Regla 3: Ser descubierto por el monstruo
    if (evento === "monstruo cerca") {
        return { nuevoEstado: "eliminado", motivo: "El monstruo te encontró." };
    }

    // Resultado si no hay eventos críticos
    return { nuevoEstado: estado, motivo: "No ocurrió nada crítico." };
};

```

### Salida Esperada

```text
{ nuevoEstado: 'sobrevive', motivo: 'Te ocultaste a tiempo.' }
{ nuevoEstado: 'eliminado', motivo: 'El monstruo te encontró.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-009/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
