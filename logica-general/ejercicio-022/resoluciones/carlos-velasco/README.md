# Logica general 022 - validacion de datos

## Sistema de Validación de Jugadores

Este script permite realizar un filtrado inicial de candidatos para un torneo deportivo, verificando condiciones de salud, edad y conducta disciplinaria para garantizar la elegibilidad del participante.

* **Descripción del proceso:**
* **Validación de estado físico**: Comprueba si el jugador tiene lesiones activas que impidan su participación.
* **Validación de edad**: Verifica si el candidato cumple con la mayoría de edad requerida (18 años).
* **Validación disciplinaria**: Revisa el historial de tarjetas rojas para asegurar que no exceda el límite permitido.
* **Reporte final**: Retorna el estado de aprobación del jugador junto con una justificación clara.


* **Tecnologías:**
* JavaScript (lógica de validación mediante *Guard Clauses*).

---

### Explicación técnica

1. **Patrón de *Guard Clauses***: La función está estructurada para "fallar rápido". Al verificar las condiciones de rechazo una por una al inicio, el código evita anidamientos complejos (`if-else` múltiples), lo que mejora drásticamente la mantenibilidad y la claridad.
2. **Validación de Objetos**: La función recibe un objeto `jugador` completo, lo cual permite que la lógica sea escalable y fácil de probar con distintos perfiles de datos.
3. **Seguridad de Reglas**: El orden de las validaciones es importante: se comprueba primero la salud, luego la edad y finalmente la disciplina, estableciendo una jerarquía lógica de requisitos para el torneo.

### Lógica del Código

```javascript
const validarJugador = (jugador) => {
    // 1. Filtrar por estado de salud
    if (jugador.tieneLesion) {
        return { estado: "Rechazado", motivo: "No apto por lesión." };
    }

    // 2. Filtrar por edad
    if (jugador.edad < 18) {
        return { estado: "Rechazado", motivo: "Menor de edad, requiere autorización de tutor." };
    }

    // 3. Filtrar por disciplina
    if (jugador.tarjetasRojas >= 3) {
        return { estado: "Rechazado", motivo: "Inhabilitado por acumulación de tarjetas rojas." };
    }

    // 4. Si pasa todos los filtros, es aprobado
    return { estado: "Aprobado", motivo: "Jugador apto para el torneo." };
};

```

### Salida Esperada


```text
{ estado: 'Aprobado', motivo: 'Jugador apto para el torneo.' }
{
  estado: 'Rechazado',
  motivo: 'Menor de edad, requiere autorización de tutor.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-022/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco