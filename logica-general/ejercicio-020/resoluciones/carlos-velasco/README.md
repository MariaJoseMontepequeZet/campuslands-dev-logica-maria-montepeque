# Logica general 020 - estrategias de seleccion

## Sistema de Selección de Menú

Este script determina automáticamente la mejor opción de comida basándose en dos parámetros críticos: el presupuesto disponible y el nivel de hambre del usuario.

* **Descripción del proceso:**
* **Evaluación de condiciones**: Analiza el nivel de hambre y el presupuesto para categorizar al usuario en uno de los tres perfiles de selección disponibles (o sin opción).
* **Generación de reporte**: Retorna un objeto con la opción de menú seleccionada y una justificación textual explicativa.


* **Tecnologías:**
* JavaScript (estructuras condicionales).

---

### Explicación técnica

1. **Priorización Lógica**: La estructura de la función está diseñada con una jerarquía de decisiones. Se evalúa primero el escenario más óptimo (hambre alta + presupuesto alto) antes de descender hacia opciones más limitadas.
2. **Manejo de Errores**: El caso de retorno final ("Sin opción") actúa como un *catch-all*, garantizando que la función siempre devuelva un objeto estructurado, incluso si los datos proporcionados no cumplen con las reglas de negocio establecidas.
3. **Modularidad**: El diseño de retorno basado en objetos facilita que esta lógica se pueda integrar fácilmente en una interfaz web para mostrar tarjetas de información al usuario.


### Lógica del Código

```javascript
const seleccionarMenu = (presupuesto, hambre) => {
    // 1. Prioridad: Hambre alta con presupuesto premium
    if (hambre > 8 && presupuesto >= 15) {
        return { 
            seleccion: "Combo especial", 
            motivo: "Nivel de hambre alto y presupuesto suficiente para el combo premium." 
        };
    }
    // 2. Opción estándar
    if (hambre <= 8 && presupuesto >= 10) {
        return { 
            seleccion: "Menú básico", 
            motivo: "Satisfacción estándar con presupuesto equilibrado." 
        };
    }
    // 3. Opción de bajo costo
    if (presupuesto < 10 && presupuesto > 0) {
        return { 
            seleccion: "Opción económica", 
            motivo: "Presupuesto limitado, sugerencia de plato del día." 
        };
    }
    // 4. Fallback si no hay presupuesto
    return { 
        seleccion: "Sin opción", 
        motivo: "Presupuesto insuficiente para cualquier menú disponible." 
    };
};

```

### Salida Esperada

```text
{
  seleccion: 'Combo especial',
  motivo: 'Nivel de hambre alto y presupuesto suficiente para el combo premium.'
}
{
  seleccion: 'Opción económica',
  motivo: 'Presupuesto limitado, sugerencia de plato del día.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-020/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco