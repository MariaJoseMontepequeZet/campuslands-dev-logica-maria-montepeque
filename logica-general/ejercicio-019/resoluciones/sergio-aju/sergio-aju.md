# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** Lista de stock disponible y lista de elementos requeridos para una reacción química.
- **Proceso:** Validación cruzada para asegurar la existencia y disponibilidad (cantidad > 0) de cada reactivo.
- **Salida:** Resolución de viabilidad (True/False) y reporte de carencias técnicas.

## Reglas identificadas

1. **Stock Mínimo:** Todo reactivo debe tener cantidad superior a 0.
2. **Obligatoriedad:** Todos los componentes de la fórmula deben estar presentes.
3. **Reporte:** Notificación explícita de los elementos que impiden el experimento.

## Pruebas

### Caso normal

**Entrada:** `inventario = [{nombre: "Hidrogeno", cantidad: 10}, {nombre: "Oxigeno", cantidad: 5}], formula = ["Hidrogeno", "Oxigeno"]`

**Resultado esperado:** `{puedeRealizar: true, motivo: "Inventario verificado. Todos los elementos presentes."}`

### Caso borde

**Entrada:** `inventario = [{nombre: "Hidrogeno", cantidad: 10}], formula = ["Hidrogeno", "Carbono"]`

**Resultado esperado:** `{puedeRealizar: false, motivo: "Experimento cancelado. Faltan reactivos: Carbono"}`

## Explicacion final

La solución emplea un enfoque de validación mediante ciclos, lo que garantiza que cada requerimiento de la fórmula química sea verificado contra el stock real. Al utilizar un arreglo de acumuladores para los faltantes, proporcionamos una respuesta clara y directa que facilita la toma de decisiones inmediata en el laboratorio.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para optimizar, podrías integrar una función que descuente automáticamente las cantidades del inventario una vez confirmado que el experimento es viable.