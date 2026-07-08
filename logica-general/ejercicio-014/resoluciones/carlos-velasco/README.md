# Logica general 014 - diagnostico de errores

## Sistema de Diagnóstico de Sesiones

Este script implementa un motor de validación de seguridad para determinar si una sesión (por ejemplo, para tatuajes o procedimientos estéticos) es apta para realizarse, basándose en la salud del cliente y la complejidad del diseño propuesto.

* **Descripción del proceso:**
* **Validación de seguridad**: Detecta riesgos inmediatos como alergias o irritaciones cutáneas.
* **Verificación de contraindicaciones**: Compara las necesidades del diseño (como el uso de color) con las alergias específicas del cliente.
* **Evaluación de experiencia**: Determina si un diseño complejo es adecuado para un cliente que realiza su primera sesión.
* **Reporte**: Retorna un objeto con la acción a tomar (Aprobada, Cancelada o Consulta requerida) y el motivo correspondiente.


* **Tecnologías:**
* JavaScript (lógica condicional basada en cláusulas de guardia).


---

### Explicación técnica

1. **Cláusulas de guardia**: El código utiliza estructuras de `if` independientes que retornan inmediatamente si se encuentra una condición de riesgo, evitando la necesidad de múltiples niveles de anidación.
2. **Evaluación de objetos**: La función analiza la relación entre dos entidades (`cliente` y `diseño`), permitiendo una validación cruzada que asegura que las restricciones del diseño se ajusten al perfil médico del cliente.
3. **Resultado estandarizado**: El formato de retorno es consistente en todos los casos, facilitando que el software que utilice esta función pueda manejar la respuesta de manera predecible.

### Lógica del Código

```javascript
const diagnosticarSesion = (cliente, diseño) => {
    // 1. Validar riesgos de salud generales
    if (cliente.tieneAlergias || cliente.pielIrritada) {
        return {
            accion: "Cancelada",
            motivo: "Riesgo de salud detectado (alergias o piel irritada)."
        };
    }
    // 2. Validar contraindicaciones de pigmentos
    if (diseño.requiereColor && cliente.alergiaPigmentos) {
        return {
            accion: "Cancelada",
            motivo: "Contraindicación: El cliente es alérgico a los pigmentos del diseño."
        };
    }
    // 3. Evaluar complejidad del diseño
    if (diseño.esComplejo && cliente.esPrimerizo) {
        return {
            accion: "Consulta requerida",
            motivo: "Diseño de alta complejidad para un cliente primerizo."
        };
    }
    // 4. Aprobación final
    return {
        accion: "Aprobada",
        motivo: "Diagnóstico favorable para iniciar la sesión."
    };
};

```

### Salida Esperada

```text
{
  accion: 'Aprobada',
  motivo: 'Diagnóstico favorable para iniciar la sesión.'
}
{
  accion: 'Cancelada',
  motivo: 'Riesgo de salud detectado (alergias o piel irritada).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-014/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
