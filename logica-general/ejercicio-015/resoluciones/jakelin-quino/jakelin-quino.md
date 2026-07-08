# Analisis

- **Entrada:** `ancho`, `alto`, `esComercial`.
- **Proceso:** Validación directa del área para decidir si es gratis, seguida de la asignación de precio base según el uso y un recargo por tamaño.
- **Salida:** Objeto con `tipo` y `precio`.

## Reglas identificadas

1. **Boceto:** Si el lienzo es menor a 50,000 px, precio 0.
2. **Uso:** Comercial cuesta 100, Personal cuesta 20.
3. **Tamaño:** Si el lienzo supera los 500,000 px, el precio sube 50 unidades.

## Pruebas

### Caso normal

**Entrada:** 1000 x 1000, Comercial: true
**Resultado esperado:** { tipo: "Comercial", precio: 150 }

### Caso borde

**Entrada:** 100 x 100, Comercial: false
**Resultado esperado:** { tipo: "Boceto", precio: 0 }

## Explicacion final

La simplificación consistió en usar `return` anticipados para los casos gratuitos y una lógica de suma progresiva para el precio.