# Logica general 030 - lectura de instrucciones
---

## Sistema de Validación de Embarque

Este script evalúa los datos de un pasajero mediante una serie de reglas de seguridad, determinando si el embarque es permitido o si debe ser rechazado basándose en el boleto, pasaporte y políticas de edad.

* **Descripción del proceso:**
* **Validación de Boleto**: Comprueba si el pasajero posee un boleto válido.
* **Validación de Identidad**: Verifica la presencia de pasaporte obligatorio.
* **Validación de Menores**: Si la edad es menor al límite establecido (`restriccionEdad`), se requiere obligatoriamente que el pasajero esté acompañado.
* **Resultado**: Retorna un estado ("Aprobado" o "Rechazado") junto con una razón explicativa.


* **Tecnologías:**
* JavaScript (lógica condicional secuencial).

---

### Explicación técnica

1. **Validación temprana (Guard Clauses)**: La función utiliza *guard clauses* (cláusulas de guarda) para validar las condiciones de rechazo una por una. Esto mejora la legibilidad y evita el anidamiento profundo de bloques `if`, permitiendo que la lógica "exitosa" sea el retorno final por defecto.
2. **Parámetros dinámicos**: Al recibir `restriccionEdad` como argumento, el sistema es flexible y permite aplicar la misma lógica a diferentes tipos de vuelos o destinos con distintas normativas legales sin necesidad de modificar el código interno.
3. **Seguridad lógica**: La regla del menor (`pasajero.edad < restriccionEdad && !pasajero.acompanado`) combina correctamente dos criterios independientes para garantizar que la seguridad del menor sea prioridad absoluta en el proceso de embarque.

### Lógica del Código

```javascript
const validarEmbarque = (pasajero, restriccionEdad) => {
    // 1. Verificación de boleto
    if (!pasajero.tieneBoleto) {
        return { estado: "Rechazado", razon: "Sin boleto válido." };
    }

    // 2. Verificación de pasaporte
    if (!pasajero.tienePasaporte) {
        return { estado: "Rechazado", razon: "Pasaporte requerido para el destino." };
    }

    // 3. Verificación de edad y compañía
    if (pasajero.edad < restriccionEdad && !pasajero.acompanado) {
        return { estado: "Rechazado", razon: "Menor de edad sin acompañante." };
    }

    // 4. Estado de éxito
    return { estado: "Aprobado", razon: "Todo en orden. ¡Buen viaje!" };
};

```

### Salida Esperada

```text
{ estado: 'Aprobado', razon: 'Todo en orden. ¡Buen viaje!' }
{ estado: 'Rechazado', razon: 'Menor de edad sin acompañante.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-030/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco