# Analisis

- **Entrada:** `peleadores` (array de objetos, cada uno con nombre y peso).
- **Proceso:** Se utiliza un ciclo `for...of` para recorrer cada peleador y un objeto acumulador (`categorias`) para separar los nombres según su peso.
- **Salida:** Un objeto con dos listas clasificadas: `pluma` (menor a 70kg) y `pesado` (70kg o más).

## Reglas identificadas

1. **Regla de Clasificación:** Peleadores con peso < 70kg van a categoría "pluma".
2. **Regla de Clasificación:** Peleadores con peso >= 70kg van a categoría "pesado".
3. **Regla de Estructura:** El resultado final debe agrupar a todos los elementos recibidos sin perder a ninguno.

## Pruebas

### Caso normal

**Entrada:** `[{ nombre: "Juan", peso: 65 }, { nombre: "Pedro", peso: 90 }]`

**Resultado esperado:** `categorias: { pluma: ["Juan"], pesado: ["Pedro"] }`

### Caso borde

**Entrada:** `[]` (Lista vacía)

**Resultado esperado:** `categorias: { pluma: [], pesado: [] }`

## Explicacion final

He utilizado un **objeto acumulador** para organizar la información. El ciclo recorre la lista una sola vez, comparando el peso de cada peleador y enviándolo a su categoría correspondiente.