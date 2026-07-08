# Logica general 010 - lectura de instrucciones


## Sistema de Validación de Reservas

Este script implementa una lógica de control de acceso para gestionar solicitudes de reserva, asegurando que se cumplan las condiciones necesarias antes de confirmar el proceso.

* **Descripción del proceso:**
* **Validación de disponibilidad:** Verifica primero si el hotel cuenta con cupos disponibles para la fecha solicitada.
* **Verificación de documentos:** Asegura que los documentos del viajero sean válidos para el viaje.
* **Resolución:** Retorna un objeto con la acción resultante ("Confirmada" o "Rechazada") y un motivo explicativo detallado.


* **Tecnologías:**
* JavaScript (lógica condicional basada en cláusulas de guardia).


---

### Explicación técnica

1. **Cláusulas de guardia (Guard Clauses)**: El código utiliza retornos anticipados para gestionar las condiciones de rechazo. Esto mantiene la función limpia al manejar las excepciones antes de llegar al flujo principal de éxito.
2. **Evaluación booleana**: La lógica se basa en la evaluación de valores booleanos (`true`/`false`) contenidos dentro del objeto `reserva`, permitiendo que el sistema tome decisiones binarias rápidas.
3. **Encapsulamiento de respuestas**: Al retornar un objeto con propiedades `accion` y `motivo`, el código garantiza que cualquier interfaz que consuma esta función (ya sea una API o una interfaz gráfica) reciba información estructurada y fácil de mostrar al usuario.


### Lógica del Código

```javascript
const procesarReserva = (reserva) => {
    // 1. Validar disponibilidad del hotel
    if (!reserva.hotelDisponibilidad) {
        return { accion: "Rechazada", motivo: "El hotel no tiene disponibilidad actual." };
    }
    
    // 2. Validar validez documental
    if (!reserva.documentosValidos) {
        return { accion: "Rechazada", motivo: "La documentación del viajero no es válida." };
    }

    // 3. Confirmación de reserva
    return { accion: "Confirmada", motivo: "Reserva exitosa, disfrute su viaje." };
};

```

### Salida Esperada


```text
{ accion: 'Confirmada', motivo: 'Reserva exitosa, disfrute su viaje.' }
{ accion: 'Rechazada', motivo: 'La documentación del viajero no es válida.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-010/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

