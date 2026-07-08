# Logica general 018 - sistemas de turnos

## Sistema de Gestión de Turnos de Soldadura

Este script valida la viabilidad de realizar tareas de soldadura según el turno de trabajo y el tipo de técnica utilizada.

* **Descripción del proceso:**
* **Identificación de turno**: Asigna un turno (Mañana, Tarde o Noche) según la hora proporcionada.
* **Validación de viabilidad**: Evalúa si el tipo de soldadura (MIG, Electrodo o TIG) es compatible con el turno asignado.
* **Reporte de estado**: Genera un objeto con el operario, el turno, la autorización de la tarea y el motivo de la decisión.


* **Tecnologías:**
* JavaScript (lógica condicional basada en rangos horarios y tipos de soldadura).

---

### Explicación técnica

1. **Rangos Horarios**: La función utiliza una estructura `if-else if-else` para segmentar el día en tres bloques temporales, garantizando que cualquier hora ingresada caiga en un turno específico.
2. **Validación de Viabilidad (`esViable`)**: Esta variable booleana actúa como un interruptor de seguridad. Dependiendo del turno, se aplican reglas específicas de negocio: la mañana es libre, la tarde permite MIG/Electrodo y la noche es exclusiva para TIG.
3. **Operadores Ternarios**: Se implementan en el retorno de la función para proporcionar mensajes de respuesta dinámicos y legibles sin necesidad de repetir bloques `if` adicionales.

### Lógica del Código

```javascript
const gestionarTurnoSoldadura = (operario, soldadura, hora) => {
    let turno = "";
    let esViable = false;

    // 1. Asignar turno y validar según horario
    if (hora >= 6 && hora <= 14) {
        turno = "Mañana";
        esViable = true; 
    } else if (hora > 14 && hora <= 22) {
        turno = "Tarde";
        esViable = (soldadura === "MIG" || soldadura === "Electrodo");
    } else {
        turno = "Noche";
        esViable = (soldadura === "TIG");
    }

    // 2. Retornar informe de viabilidad
    return {
        operario: operario,
        turno: turno,
        accion: esViable ? "Tarea autorizada" : "Tarea denegada",
        motivo: esViable ? "Procedimiento compatible." : "Tipo de soldadura no permitida en este horario."
    };
};

```

### Salida Esperada

```text
{
  operario: 'Juan',
  turno: 'Noche',
  accion: 'Tarea autorizada',
  motivo: 'Procedimiento compatible.'
}
{
  operario: 'Ana',
  turno: 'Tarde',
  accion: 'Tarea denegada',
  motivo: 'Tipo de soldadura no permitida en este horario.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-018/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
