# Logica general 002 - validacion de datos

## Sistema de Validación de Partidos Deportivos

Este script implementa un motor de validación de datos para registros de partidos deportivos. Su objetivo es asegurar la integridad de la información deportiva antes de que sea procesada o almacenada, aplicando reglas de negocio estrictas.

* **Descripción del proceso:**
* **Validación de integridad:** Verifica que los goles no posean valores negativos y que el número de tarjetas rojas esté dentro de los límites permitidos.
* **Determinación de resultado:** Evalúa la relación entre los goles a favor y en contra para categorizar el partido como "Victoria", "Empate" o "Derrota".
* **Reporte de estado:** Retorna un mensaje claro que indica si el registro fue aceptado o rechazado.


* **Tecnologías:**
* JavaScript (lógica condicional y ternaria).

---

### Explicación técnica: ¿Cómo funciona la lógica?

El diseño de esta función se basa en principios de **guardas de validación** (*guard clauses*):

1. **Protección de datos (Guarda)**: Las primeras dos sentencias `if` actúan como filtros. Si el objeto `partido` contiene datos inválidos, la función termina su ejecución inmediatamente sin desperdiciar recursos calculando resultados deportivos. Esto evita errores lógicos posteriores.
2. **Lógica Ternaria Anidada**: La variable `resultado` utiliza el operador ternario para evaluar tres estados posibles (Victoria, Empate, Derrota) de forma compacta. Es una alternativa elegante a una estructura `if-else` larga cuando se trata de una asignación simple basada en una condición.
3. **Consistencia**: Al devolver siempre un string, la función es predecible para quien la consuma, facilitando la integración en interfaces de usuario o logs de sistema.


### Lógica del Código

```javascript
const validarPartido = (partido) => {
    // 1. Validación de reglas de negocio
    if (partido.golesFavor < 0 || partido.golesContra < 0) {
        return "Registro rechazado: Los goles no pueden ser negativos.";
    }
    if (partido.tarjetasRojas > 3) {
        return "Registro rechazado: Número de tarjetas rojas inválido.";
    }
    
    // 2. Cálculo del resultado deportivo mediante lógica ternaria
    const resultado = partido.golesFavor > partido.golesContra ? "Victoria" : 
                      partido.golesFavor === partido.golesContra ? "Empate" : "Derrota";
                      
    return `Registro aceptado: ${resultado} con ${partido.golesFavor}-${partido.golesContra}.`;
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {A64D4BAA-B6CE-418F-8004-5651AFF21F60}.png, los resultados obtenidos en consola son:

```text
Registro aceptado: Victoria con 3-1.
Registro rechazado: Los goles no pueden ser negativos.

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-002/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
