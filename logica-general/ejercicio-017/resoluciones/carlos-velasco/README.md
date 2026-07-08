# Logica general 017 - tablas de decision

## Sistema de Asignación de Licencias

Este script implementa un motor de lógica condicional para asignar licencias de software basadas en el tipo de usuario y la complejidad o alcance del proyecto asociado.

* **Descripción del proceso:**
* **Identificación del usuario**: Determina si el perfil es "Empresa", "Estudiante" o "Profesional".
* **Validación de proyecto**: Evalúa si el tipo de proyecto es "Básico" o "Avanzado" para ajustar el nivel de acceso.
* **Asignación y reporte**: Retorna un objeto con la licencia específica y un motivo que justifica el nivel de acceso otorgado.


* **Tecnologías:**
* JavaScript (estructuras condicionales y operadores ternarios).

---

### Explicación técnica

1. **Operadores ternarios**: Se utilizan para evaluar el tipo de proyecto dentro de los grupos "Estudiante" y "Profesional", lo que reduce la cantidad de bloques `if-else` y mantiene el código compacto.
2. **Manejo de estados**: La función utiliza una estructura de retorno temprano, lo que significa que en cuanto se identifica el perfil del usuario, la ejecución se detiene y devuelve el resultado, optimizando el rendimiento.
3. **Seguridad por defecto**: Se incluye un caso final para usuarios no reconocidos ("Denegada"), lo cual es una buena práctica para evitar errores de lógica si el sistema recibe datos inesperados.

### Lógica del Código

```javascript
const asignarLicencia = (usuario, proyecto) => {
    // 1. Asignación para Empresas
    if (usuario === "Empresa") {
        return { licencia: "Licencia Enterprise", motivo: "Acceso corporativo ilimitado." };
    }
    // 2. Asignación para Estudiantes
    if (usuario === "Estudiante") {
        return proyecto === "Básico" 
            ? { licencia: "Licencia Educativa", motivo: "Acceso para formación." }
            : { licencia: "Licencia Limitada", motivo: "Uso avanzado con restricciones." };
    }
    // 3. Asignación para Profesionales
    if (usuario === "Profesional") {
        return proyecto === "Básico"
            ? { licencia: "Licencia Estándar", motivo: "Acceso para trabajo freelance." }
            : { licencia: "Licencia Pro", motivo: "Acceso total para proyectos avanzados." };
    }
    // 4. Fallback para usuarios no reconocidos
    return { licencia: "Denegada", motivo: "Tipo de usuario no reconocido." };
};

```

### Salida Esperada

```text
{
  licencia: 'Licencia Limitada',
  motivo: 'Uso avanzado con restricciones.'
}
{
  licencia: 'Licencia Enterprise',
  motivo: 'Acceso corporativo ilimitado.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-017/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco