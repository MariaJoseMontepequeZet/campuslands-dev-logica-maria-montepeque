# Logica general 039 - inventarios logicos

## Sistema de Gestión de Reacciones Químicas

Este script automatiza la verificación de inventario y el análisis de seguridad para reacciones químicas, garantizando que todos los componentes requeridos estén presentes y que la mezcla resultante no sea de alto riesgo.

* **Descripción del proceso:**
* **Validación de Inventario**: Recorre la lista de `requeridos` y verifica que cada elemento exista en el `inventario` y tenga una cantidad mayor a cero. Si falta algún componente, la reacción se suspende.
* **Evaluación de Riesgo**: Cuenta cuántos reactivos marcados como `esPeligroso` se han seleccionado.
* **Alerta de Seguridad**: Si se detecta más de un componente peligroso en la mezcla, el sistema emite un estado de "Precaución" por riesgo elevado.
* **Aprobación**: Si todos los componentes están disponibles y la mezcla no presenta riesgos críticos, se aprueba el proceso.


* **Tecnologías:**
* JavaScript (métodos de búsqueda de arreglos, lógica condicional).

---

### Explicación técnica

1. **Seguridad por Diseño**: Al iterar sobre los requerimientos, el algoritmo emplea un mecanismo de *fall-fast* (retorno anticipado), lo que significa que el proceso se detiene inmediatamente si un componente falta, evitando errores de cálculo o manipulación química indebida.
2. **Evaluación de Mezclas**: La variable `peligrososEncontrados` actúa como un acumulador de riesgo, permitiendo aplicar lógica de seguridad basada en combinaciones en lugar de solo en componentes individuales.
3. **Flexibilidad**: La función es agnóstica a la naturaleza específica de los químicos, permitiendo que la lógica de seguridad se aplique a cualquier conjunto de elementos siempre que tengan la propiedad `esPeligroso`.

### Lógica del Código

```javascript
const gestionarReaccion = (inventario, requeridos) => {
    let encontrados = [];
    let peligrososEncontrados = 0;

    // 1. Verificación de existencias
    for (let req of requeridos) {
        let item = inventario.find(i => i.nombre === req);
        
        if (!item || item.cantidad <= 0) {
            return { estado: "Reacción suspendida", motivo: `Falta ${req}` };
        }
        
        encontrados.push(item);
        if (item.esPeligroso) peligrososEncontrados++;
    }

    // 2. Evaluación de riesgo de mezcla
    if (peligrososEncontrados > 1) {
        return { estado: "Precaución", motivo: "Alerta: Mezcla de alto riesgo" };
    }

    // 3. Aprobación final
    return { estado: "Aprobado", motivo: "Todos los reactivos listos." };
};

```

### Salida Esperada

```text
{ estado: 'Precaución', motivo: 'Alerta: Mezcla de alto riesgo' }
{ estado: 'Aprobado', motivo: 'Todos los reactivos listos.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-039/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco