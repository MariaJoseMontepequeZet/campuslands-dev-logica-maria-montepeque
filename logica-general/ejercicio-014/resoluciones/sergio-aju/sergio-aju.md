# Plantilla de solucion

## Autor 

Sergio Ajù

## Analisis

- **Entrada:** Objeto que contiene el perfil de salud y edad del cliente.
- **Proceso:** Validación por etapas donde se descartan clientes que no cumplan con los protocolos de seguridad.
- **Salida:** Estado de aptitud de la sesión y motivo detallado del diagnóstico.

## Reglas identificadas

1. **Edad:** Mayoría de edad obligatoria (18+).
2. **Salud Cutánea:** Piel libre de irritaciones o lesiones.
3. **Seguridad Clínica:** Cero consumo de alcohol para prevenir complicaciones hemorrágicas.

## Pruebas

### Caso normal

**Entrada:** `{nombre: "Carlos", edad: 25, pielIrritada: false, consumoAlcohol: false}`

**Resultado esperado:** `{apto: true, diagnostico: "Aprobado: El cliente cumple con todas las normas de seguridad."}`

### Caso borde

**Entrada:** `{nombre: "Maria", edad: 22, pielIrritada: false, consumoAlcohol: true}`

**Resultado esperado:** `{apto: false, diagnostico: "Rechazado: El cliente ha consumido alcohol, riesgo de sangrado excesivo."}`

## Explicacion final

La solución emplea una serie de validaciones secuenciales que actúan como filtros de seguridad. El orden de las reglas es fundamental: primero validamos los aspectos legales (edad) y luego los clínicos (salud y alcohol). Este enfoque garantiza que el diagnóstico sea preciso y cumpla con las normas de salud del estudio.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para llevar esta solución a un nivel superior, considera convertir los mensajes de diagnóstico en constantes de configuración para que el estudio pueda personalizar sus advertencias según el cliente.