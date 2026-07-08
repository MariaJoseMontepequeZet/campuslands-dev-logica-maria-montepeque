# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis

- **Entrada:** Objeto de solicitud con tipo de arte, nivel de complejidad y opción de derechos comerciales.
- **Proceso:** Cálculo progresivo del costo total basado en tarifas base, recargos por detalle y multiplicadores de licencia.
- **Salida:** Reporte financiero detallado con el costo final del servicio.

## Reglas identificadas

1. **Base:** Tarifas diferenciadas por tipo de dibujo digital.
2. **Detalle:** Recargo fijo de $30 USD por alta complejidad.
3. **Licencia:** Multiplicador del 100% (duplicación) en caso de uso comercial.

## Pruebas

### Caso normal

**Entrada:** `{tipoArte: "ilustracion", complejidad: "media", derechosComerciales: false}`

**Resultado esperado:** `{tipo: "ilustracion", precioFinal: 50, ...}`

### Caso borde

**Entrada:** `{tipoArte: "pintura", complejidad: "alta", derechosComerciales: true}`

**Resultado esperado:** `{tipo: "pintura", precioFinal: 260, ...}`

## Explicacion final

La solución sigue un flujo de cálculo escalonado. Se inicia con un valor base determinado por el tipo de arte y se aplican incrementos de manera ordenada. Esta forma de proceder evita errores comunes de cálculo y asegura que todas las reglas de negocio, especialmente el multiplicador comercial, se apliquen al final sobre el subtotal acumulado.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Considera validar que el campo `complejidad` solo acepte valores específicos para evitar errores en el cálculo del recargo.