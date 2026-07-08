# Analisis

- **Entrada:** `reactivo` (string), `cantidad` (number), `esPeligroso` (boolean).
- **Proceso:** Se utiliza una estructura condicional que verifica primero la integridad del inventario (cantidad > 0) y luego aplica restricciones de seguridad según la peligrosidad del compuesto.
- **Salida:** Un objeto con el `estado` (Reabastecer/Alerta/OK) y un `motivo`.

## Reglas identificadas

1. **Regla de Disponibilidad:** Si la cantidad es 0 o menor, el sistema marca el reactivo como pendiente de reabastecimiento.
2. **Regla de Seguridad Química:** Reactivos marcados como peligrosos (`true`) no pueden superar una cantidad de 50 unidades en almacén.
3. **Regla de Normalidad:** Cantidades moderadas de reactivos (seguros o peligrosos en rango) se consideran estados OK.

## Pruebas

### Caso normal

**Entrada:** reactivo: "Ácido Sulfúrico", cantidad: 20, esPeligroso: true

**Resultado esperado:** { estado: "OK", motivo: "Almacenamiento seguro." }

### Caso borde

**Entrada:** reactivo: "Ácido Sulfúrico", cantidad: 60, esPeligroso: true

**Resultado esperado:** { estado: "Alerta", motivo: "Exceso de reactivo peligroso. Riesgo de seguridad." }

## Explicacion final

La estructura asegura que el sistema siempre priorice la alerta de seguridad antes de confirmar que un inventario está "OK". Este patrón de diseño es esencial para evitar accidentes en entornos químicos reales.