# Ejercicio de Lógica 019 - Temática Fórmulas Químicas

**Camper:** Antonio Canux

## Análisis

- Entrada: 
  - `formula`: Una cadena de texto que representa el compuesto químico a fabricar (ej. "H2O").
  - `inventario`: Un objeto que contiene los elementos disponibles en el laboratorio y sus cantidades actuales (ej. `{ H: 5, O: 3 }`).
- Proceso: El sistema busca los requerimientos de la fórmula en un "recetario" interno. Luego, itera sobre cada elemento requerido y lo compara contra el inventario disponible. Si los recursos alcanzan, se restan del inventario simulado. Si falta algún elemento, se registra el déficit exacto y se cancela la operación.
- Salida: Un objeto que indica si es `fabricable` (booleano), un `mensaje` de éxito o error detallado, y el estado del `inventarioFinal` (con los elementos descontados si fue exitoso, o intacto si falló).

## Reglas identificadas

1. El sistema solo puede procesar fórmulas que estén previamente registradas en su diccionario de requerimientos.
2. La síntesis es un proceso de "todo o nada". No se puede fabricar una fórmula a medias; si falta un solo átomo de un elemento, toda la operación se rechaza.
3. Si la síntesis es exitosa, los elementos utilizados deben ser descontados estrictamente del inventario final, reflejando el consumo lógico de recursos.

## Pruebas

### Caso normal

Entrada:
```javascript
formula: "H2O"
inventario: { H: 5, O: 3, C: 1 }
```

Resultado esperado:

```javascript
{
  fabricable: true,
  mensaje: "Síntesis de 'H2O' completada con éxito.",
  inventarioFinal: { H: 3, O: 2, C: 1 }
}
```

### Caso borde
Entrada (Intentando fabricar Amoníaco pero faltan átomos de Hidrógeno):

```javascript
formula: "NH3"
inventario: { N: 1, H: 2, O: 5 }
```

Resultado esperado:

```javascript
{
  fabricable: false,
  mensaje: 'Síntesis cancelada por inventario insuficiente: Faltan 1 átomo(s) de H.',
  inventarioFinal: { N: 1, H: 2, O: 5 }
}
```

## Explicacion final
La solución funciona porque implementa un principio fundamental en la gestión de inventarios: la protección de estado. Al inicio del proceso, clonamos el inventario usando el operador spread ({ ...inventario }). Esto nos permite hacer descuentos matemáticos de prueba durante la validación sin alterar los datos originales. Si al final del ciclo descubrimos que nos faltaba un elemento, simplemente devolvemos el inventario original intacto. Esto previene un error crítico donde se descuentan algunos materiales, la fórmula falla, y esos materiales se pierden en el sistema de forma irrecuperable.