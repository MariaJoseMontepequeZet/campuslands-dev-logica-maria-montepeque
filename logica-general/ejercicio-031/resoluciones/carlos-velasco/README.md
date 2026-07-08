# Logica general 031 - organizacion de listas

## Sistema de Organización de Combates

Este script automatiza la creación de parejas de combate a partir de un *roster* de peleadores, aplicando restricciones de peso (diferencia máxima de 5 unidades) y experiencia (diferencia máxima de 1 unidad).

* **Descripción del proceso:**
* **Selección**: Toma al primer peleador disponible de la lista (`p1`).
* **Búsqueda de compatibilidad**: Itera sobre los peleadores restantes buscando el candidato (`p2`) que mejor se ajuste, priorizando la menor diferencia de experiencia dentro del rango de peso permitido.
* **Emparejamiento**:
* Si se encuentra un rival compatible, crea el combate y elimina a ambos del *roster*.
* Si no se encuentra un rival, marca al peleador como sin rival compatible.


* **Reporte**: Genera una lista de objetos que describe los combates organizados.


* **Tecnologías:**
* JavaScript (`while`, `for`, `splice` para manipulación de arreglos).



---

### Explicación técnica

1. **Optimización de búsqueda**: El algoritmo utiliza una variable `minDiferenciaExperiencia` inicializada en `Infinity` para asegurar que, si existen múltiples candidatos, el sistema seleccione siempre al peleador con el nivel de experiencia más cercano al primero.
2. **Gestión de inmutabilidad y estado**: Al usar `[...peleadores]` para crear `disponibles`, se asegura que el arreglo original no sea destruido durante el proceso de organización, permitiendo referencias futuras a la lista completa.
3. **Manejo de excepciones**: La lógica `[Sin rival compatible]` es crucial para evitar errores de ejecución cuando los criterios son demasiado estrictos, proporcionando retroalimentación útil sobre por qué un peleador no ha sido incluido en un enfrentamiento.

### Lógica del Código

```javascript
const organizarCombates = (peleadores) => {
    let emparejados = [];
    let disponibles = [...peleadores];

    while (disponibles.length > 1) {
        let p1 = disponibles.shift();
        let mejorParejaIndex = -1;
        let minDiferenciaExperiencia = Infinity;

        // Búsqueda del mejor rival
        for (let i = 0; i < disponibles.length; i++) {
            let p2 = disponibles[i];
            // Regla de peso: <= 5
            if (Math.abs(p1.peso - p2.peso) <= 5) {
                let diffExp = Math.abs(p1.experiencia - p2.experiencia);
                // Regla de experiencia: <= 1
                if (diffExp <= 1 && diffExp < minDiferenciaExperiencia) {
                    minDiferenciaExperiencia = diffExp;
                    mejorParejaIndex = i;
                }
            }
        }

        // Ejecución de emparejamiento
        if (mejorParejaIndex !== -1) {
            emparejados.push({ combate: `${p1.nombre} vs ${disponibles[mejorParejaIndex].nombre}` });
            disponibles.splice(mejorParejaIndex, 1);
        } else {
            emparejados.push({ combate: `${p1.nombre} vs [Sin rival compatible]` });
        }
    }
    // Si queda uno solo en el array
    if (disponibles.length === 1) {
        emparejados.push({ combate: `${disponibles[0].nombre} vs [Sin rival compatible]` });
    }

    return emparejados;
};

```

### Salida Esperada

```text
[ { combate: 'Alex vs Ben' } ]

```

*(Nota: En la ejecución de la imagen, Cloe queda fuera al no encontrar un rival compatible bajo las reglas definidas).*

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-031/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco