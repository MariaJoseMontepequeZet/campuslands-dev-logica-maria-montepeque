# Logica general 029 - simulacion de estados

## Sistema de IA de Supervivencia: `determinarEstado`

Este script define la lógica de comportamiento de un personaje ante diversas amenazas. Basándose en el estado actual del personaje y su entorno, el sistema determina la mejor acción a tomar para asegurar su supervivencia.

* **Descripción del proceso:**
* **Prioridad de sigilo**: Si el personaje está escondido, la acción siempre es mantenerse en silencio.
* **Gestión de amenazas**: Si el monstruo está cerca, el sistema evalúa tres variables:
* **Defensa**: Si tiene arma, el monstruo retrocede.
* **Fatiga**: Si la energía es baja (< 20) y no tiene arma, queda atrapado.
* **Huida**: Si tiene suficiente energía y no tiene arma, intenta escapar.


* **Estado por defecto**: Si no hay peligro, el personaje continúa explorando para buscar suministros.


* **Tecnologías:**
* JavaScript (lógica condicional anidada).

---

### Explicación técnica

1. **Priorización jerárquica**: El código utiliza una estructura de decisiones en cascada donde el estado de "escondido" tiene prioridad absoluta sobre cualquier otra condición, emulando un sistema de prioridad de eventos común en el desarrollo de videojuegos.
2. **Manejo de estados complejos**: Al evaluar `tieneArma` antes de la `energia`, el script modela correctamente un escenario de supervivencia donde el equipamiento del jugador cambia drásticamente las opciones de comportamiento ante el peligro.
3. **Seguridad lógica**: La estructura garantiza que siempre se retorne un estado, evitando que el personaje se quede en un estado indefinido si no se cumplen las condiciones de peligro.

### Lógica del Código

```javascript
const determinarEstado = (personaje) => {
    // 1. Prioridad: Sigilo
    if (personaje.estaEscondido) {
        return { estado: "A salvo", accion: "Mantener silencio." };
    }
    
    // 2. Prioridad: Amenaza (Monstruo)
    if (personaje.monstruoCerca) {
        if (personaje.tieneArma) {
            return { estado: "Defensa exitosa", accion: "El monstruo retrocede." };
        } else if (personaje.energia < 20) {
            return { estado: "Atrapado", accion: "Demasiado cansado para correr." };
        } else {
            return { estado: "Huida desesperada", accion: "Correr hacia la salida." };
        }
    }
    
    // 3. Estado base
    return { estado: "Explorando", accion: "Buscar suministros." };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {EEEFF143-05CD-49A3-B614-1D21602B6D82}.png, los resultados obtenidos son:

```text
{ estado: 'Atrapado', accion: 'Demasiado cansado para correr.' }
{ estado: 'Defensa exitosa', accion: 'El monstruo retrocede.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-029/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco