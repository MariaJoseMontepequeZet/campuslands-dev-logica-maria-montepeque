# Plantilla de solucion

## Autor

Sergio Ajù

## Analisis

- **Entrada:** Objeto con criterios del cliente (`presupuesto`, `sabor`, `tienePrisa`).
- **Proceso:** Algoritmo de filtrado que reduce el catálogo disponible a una recomendación válida según las reglas de negocio.
- **Salida:** Plato recomendado o mensaje de falla en la búsqueda.

## Reglas identificadas

1. **Sabor:** Coincidencia obligatoria con la preferencia del cliente.
2. **Presupuesto:** El costo debe ser menor o igual al disponible.
3. **Prisa:** Si hay urgencia, solo se muestran opciones marcadas como rápidas.

## Pruebas

### Caso normal

**Entrada:** `{presupuesto: 7, sabor: "salado", tienePrisa: true}`

**Resultado esperado:** `{recomendado: "Tacos", ...}`

### Caso borde

**Entrada:** `{presupuesto: 2, sabor: "dulce", tienePrisa: false}`

**Resultado esperado:** `{mensaje: "Lo sentimos..."}`

## Explicacion final

La solución utiliza una estrategia de filtrado encadenado. Esta técnica asegura que el sistema sea consistente: una vez aplicadas las reglas, el resultado es siempre el mismo para los mismos datos. Este enfoque es ideal para catálogos de productos donde la selección debe ser rápida y precisa.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Puedes mejorar esta lógica permitiendo que el cliente elija un rango de precios en lugar de un presupuesto máximo absoluto.