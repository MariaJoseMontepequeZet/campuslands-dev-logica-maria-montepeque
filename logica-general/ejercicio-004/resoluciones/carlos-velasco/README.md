# Logica general 004 - filtros por condiciones

## Sistema de Filtrado de Inventario de Motocicletas

Este script implementa una lógica de procesamiento de inventario para automatizar la clasificación de motocicletas basándose en su kilometraje y estado operativo. Es una herramienta diseñada para optimizar la toma de decisiones sobre el mantenimiento y venta de vehículos.

* **Descripción del proceso:**
* **Iteración:** Utiliza el método `.map()` para transformar el inventario original en un nuevo listado con clasificaciones específicas.
* **Clasificación jerárquica:**
* **Mantenimiento requerido:** Se asigna si el kilometraje supera los 10,000 km.
* **Lista para venta:** Se asigna si el estado es "disponible" y cumple con el criterio de kilometraje.
* **Revisión general:** Se asigna por defecto a cualquier unidad que no cumpla las condiciones anteriores.




* **Tecnologías:**
* JavaScript (métodos de array y lógica condicional).


---

### Explicación técnica

1. **Transformación inmutable**: Al usar `.map()`, el script genera un nuevo array sin modificar el original, siguiendo las mejores prácticas de programación funcional para mantener la integridad de los datos de entrada.
2. **Prioridad de Reglas**: La lógica evalúa primero el kilometraje, independientemente del estado. Esto asegura que cualquier vehículo que exceda el límite técnico sea marcado para mantenimiento preventivo antes de considerar si está disponible para venta, evitando errores operativos.
3. **Visualización**: El uso de `console.table()` en lugar de un `console.log` estándar permite una auditoría rápida y profesional del inventario, facilitando la lectura de los resultados estructurados.

¿Deseas que añadamos una nueva condición para clasificar motos "nuevas" con kilometraje cercano a cero?

### Lógica del Código

```javascript
const filtrarInventario = (inventario) => {
    return inventario.map(moto => {
        let clasificacion = "";
        
        // Determinar clasificación basada en reglas de negocio
        if (moto.kilometraje > 10000) {
            clasificacion = "Mantenimiento requerido";
        } else if (moto.estado === "disponible") {
            clasificacion = "Lista para venta";
        } else {
            clasificacion = "Revisión general";
        }
        
        return { modelo: moto.modelo, clasificacion };
    });
};

```

### Salida Esperada

```text
(index)  modelo          clasificacion
0        'Yamaha MT-07'  'Mantenimiento requerido'
1        'Honda CB500'   'Lista para venta'

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-004/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
