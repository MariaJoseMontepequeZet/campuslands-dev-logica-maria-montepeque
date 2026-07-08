# Plantilla de solucion

## Analisis

Sergio Ajù

- **Entrada:** - `moto`: Objeto que contiene las propiedades `modelo` (string), `estado` (string) y `kilometraje` (number).
    - `filtro`: Criterio de búsqueda aplicado.
- **Proceso:** Validar el estado físico de la moto y comparar su kilometraje contra el límite permitido para determinar su disponibilidad.
- **Salida:** Un mensaje descriptivo que clasifica la moto en "Disponible", "Mantenimiento" o "No apta".

## Reglas identificadas

1. **Bloqueo técnico:** Si el estado es "averiada", la moto se marca como no apta inmediatamente.
2. **Mantenimiento requerido:** Si el kilometraje es igual o superior a 5000 km, la moto debe pasar a revisión.
3. **Disponibilidad:** Solo las motos con estado "ok" y menos de 5000 km se consideran disponibles para venta.

## Pruebas

### Caso normal

**Entrada:** `moto = {modelo: "Yamaha MT-07", estado: "ok", kilometraje: 2000}`

**Resultado esperado:** `Resultado: Disponible para venta. Motivo: Estado correcto y kilometraje dentro del rango permitido.`

### Caso borde

**Entrada:** `moto = {modelo: "Honda CB500", estado: "ok", kilometraje: 5000}`

**Resultado esperado:** `Resultado: Requiere mantenimiento. Motivo: Alcanzó el límite de 5000 km, debe pasar a revisión.`

## Explicacion final

La solución utiliza una estructura condicional (`if/else if`) para priorizar la seguridad. Se evalúa primero el estado de avería para descartar unidades inutilizables; posteriormente, se verifica el desgaste técnico (kilometraje) para decidir si la moto puede salir a la venta o si requiere mantenimiento preventivo. Esto garantiza que no se entregue una moto en mal estado ni sin su revisión correspondiente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para mejorar la escalabilidad, podrías convertir las reglas en constantes (ej. `KM_LIMITE = 5000`) en lugar de usar valores literales, facilitando ajustes futuros sin tocar el núcleo de la lógica.