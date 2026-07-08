# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto que representa al turista con su información personal, económica y legal.
- **Proceso:** Evaluación secuencial de requisitos legales seguidos de una verificación de solvencia económica basada en el destino elegido.
- **Salida:** Resolución de la solicitud de viaje (Aprobada/Denegada) con justificación técnica.

## Reglas identificadas

1. **Filtro legal:** Los documentos en regla son obligatorios.
2. **Filtro financiero:** El presupuesto se compara contra tarifas preestablecidas según el destino.
3. **Validación de datos:** Se verifica la existencia de datos esenciales antes de realizar cualquier cálculo.

## Pruebas

### Caso normal

**Entrada:** `turista = {nombre: "Juan", presupuesto: 2500, destino: "Europa", documentosEnRegla: true}`

**Resultado esperado:** `Acción: Aprobar reserva. Motivo: El turista Juan cumple con los requisitos para viajar a Europa.`

### Caso borde

**Entrada:** `turista = {nombre: "Pedro", presupuesto: 1000, destino: "Latam", documentosEnRegla: false}`

**Resultado esperado:** `Acción: Denegar reserva. Motivo: El turista Pedro no tiene los documentos en regla.`

## Explicacion final

La lógica implementada prioriza la seguridad del sistema al descartar rápidamente registros con falta de documentación. El uso de una variable `costoDestino` simplifica el proceso de comparación, permitiendo que la lógica de negocio sea legible y fácil de ampliar si se añaden más destinos turísticos al catálogo de la agencia.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para mejorar el mantenimiento del código, separa la lógica de los costos de viaje en una constante fuera de la función principal.