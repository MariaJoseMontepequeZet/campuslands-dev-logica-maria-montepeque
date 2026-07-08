# Logica matematica 025 - minimos y limites

## Sistema de Gestión de Reposición de Inventario

Este script automatiza la toma de decisiones sobre cuándo y cuánto producto comprar, basándose en los niveles de stock actuales, un umbral mínimo de seguridad y una capacidad máxima de almacenamiento.

* **Descripción del proceso:**
* **Validación**: Verifica que los límites definidos (mínimo y máximo) tengan sentido lógico.
* **Análisis de stock**: Compara el stock actual contra el límite mínimo.
* **Cálculo de compra**: Si el stock es inferior al mínimo, calcula la cantidad necesaria para alcanzar el máximo. Si el stock es suficiente, sugiere esperar.
* **Reporte**: Genera un objeto con la acción sugerida, la cantidad exacta a comprar y un resumen de los parámetros utilizados.


* **Tecnologías:**
* JavaScript (lógica condicional y gestión de estados).

---

### Explicación técnica

1. **Protección de datos**: La validación inicial (`max <= min`) es vital para evitar errores de lógica en el cálculo de compras, asegurando que el sistema sea robusto ante configuraciones incorrectas por parte del usuario.
2. **Lógica de flujo**: Al inicializar la variable `accion` en "Esperar" y la `cantidad` en 0, se aplica una estrategia de "valores por defecto", lo que simplifica la lógica a un único `if` para determinar cuándo es necesario realizar una compra.
3. **Representación clara**: La propiedad `explicacion` es fundamental para la trazabilidad, permitiendo a los administradores del inventario entender rápidamente por qué el sistema tomó una decisión basándose en el estado actual.

### Lógica del Código

```javascript
const calcularReposicion = (stockActual, min, max) => {
    // 1. Validación de parámetros
    if (max <= min) return "Error: El máximo debe ser mayor al mínimo.";
    
    let cantidadAComprar = 0;
    let accion = "Esperar";

    // 2. Lógica de reposición
    if (stockActual < min) {
        accion = "Comprar";
        cantidadAComprar = max - stockActual;
    }

    return {
        accion: accion,
        cantidad_a_comprar: cantidadAComprar,
        explicacion: `Stock actual ${stockActual}. Límite mínimo ${min}. Límite máximo ${max}.`
    };
};

```

### Salida Esperada

```text
{
  accion: 'Comprar',
  cantidad_a_comprar: 45,
  explicacion: 'Stock actual 5. Límite mínimo 10. Límite máximo 50.'
}
{
  accion: 'Esperar',
  cantidad_a_comprar: 0,
  explicacion: 'Stock actual 15. Límite mínimo 10. Límite máximo 50.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-025/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco