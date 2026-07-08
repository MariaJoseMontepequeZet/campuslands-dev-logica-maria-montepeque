# Analisis

- **Entrada:** `inventario` (array de strings), `nombreBuscado` (string).
- **Proceso:** Se recorre la lista comparando el nombre buscado con los elementos disponibles (normalizando a minúsculas para evitar errores de escritura).
- **Salida:** Un objeto con el estado de `encontrado` (booleano) y un `mensaje` descriptivo.

## Reglas identificadas

1. **Regla de Disponibilidad:** El sistema debe verificar primero si el inventario contiene elementos.
2. **Regla de Coincidencia:** La búsqueda no debe distinguir entre mayúsculas y minúsculas.
3. **Regla de Respuesta:** Si el auto no está, debe informarse claramente que no está disponible.

## Pruebas

### Caso normal

**Entrada:** - Inventario: ["Bugatti Chiron", "Koenigsegg Jesko", "Rimac Nevera"]
- Búsqueda: "Rimac Nevera"

**Resultado esperado:** - encontrado: true
- mensaje: "El Rimac Nevera está disponible en el inventario."

### Caso borde

**Entrada:** - Inventario: ["Bugatti Chiron", "Koenigsegg Jesko", "Rimac Nevera"]
- Búsqueda: "Ferrari F40"

**Resultado esperado:** - encontrado: false
- mensaje: "El modelo buscado no se encuentra disponible."

## Explicacion final

La solución utiliza el método `.find()` de JavaScript. Al comparar los nombres convirtiéndolos a minúsculas, hacemos que el buscador sea mucho más amigable con el usuario. Es una forma estructurada de validar datos dentro de una colección.