# Analisis

- **Entrada:** `marca` (string), `cilindraje` (number), `estado` (string).
- **Proceso:** Se verifica primero la disponibilidad de la moto. Si está disponible, se clasifica según su cilindraje para determinar su sección en el inventario.
- **Salida:** Un objeto que indica la `accion` (donde ubicar la moto) y el `motivo` de dicha clasificación.

## Reglas identificadas

1. **Regla de Disponibilidad:** Solo las motos con estado "disponible" pueden ser filtradas.
2. **Regla de Segmentación:** Motos con cilindraje mayor a 600cc se consideran "Premium".
3. **Regla de Categoría:** El resto de las motos disponibles se clasifican en el catálogo general.

## Pruebas

### Caso normal

**Entrada:** - marca: "Yamaha", cilindraje: 900, estado: "disponible"

**Resultado esperado:** - accion: "Mostrar en vitrina premium"
- motivo: "Moto de alto rendimiento."

### Caso borde

**Entrada:** - marca: "Honda", cilindraje: 250, estado: "vendida"

**Resultado esperado:** - accion: "Descartar"
- motivo: "La moto no se encuentra en inventario disponible."

## Explicacion final

He utilizado una estructura de filtros jerárquicos. Primero, descartamos todo lo que no cumple con el estado "disponible" (regla de oro). Luego, usamos una condición simple para dividir las motos disponibles en dos categorías según su potencia.