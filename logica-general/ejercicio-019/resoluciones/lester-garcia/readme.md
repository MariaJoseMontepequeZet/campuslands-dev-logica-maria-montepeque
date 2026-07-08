# Plantilla de solucion

## Analisis

- Entrada:
  - inventario:
    - { compuesto: "H2O", cantidad: 12 }
    - { compuesto: "NaCl", cantidad: 0 }
    - { compuesto: "CO2", cantidad: 8 }

- Proceso:
  - Recorrer el inventario de compuestos químicos.
  - Revisar la cantidad disponible de cada compuesto.
  - Identificar el primer compuesto sin existencias.
  - Si todos tienen existencias, indicar que el inventario está completo.

- Salida:
  - estado: NaCl
  - motivo: El compuesto no tiene existencias y debe reponerse.

## Reglas identificadas

1. Cada elemento del inventario contiene el nombre del compuesto y su cantidad disponible.
2. Si un compuesto tiene cantidad igual a 0, debe marcarse para reposición.
3. Se reporta el primer compuesto sin existencias.
4. Si todos los compuestos tienen cantidad mayor que 0, el inventario se considera completo.

## Pruebas

### Caso normal

Entrada:

inventario:
- { compuesto: "H2O", cantidad: 12 }
- { compuesto: "NaCl", cantidad: 0 }
- { compuesto: "CO2", cantidad: 8 }

Resultado esperado:

estado: NaCl
motivo: El compuesto no tiene existencias y debe reponerse.

### Caso borde

Entrada:

inventario:
- { compuesto: "H2O", cantidad: 5 }
- { compuesto: "NaCl", cantidad: 3 }
- { compuesto: "CO2", cantidad: 2 }

Resultado esperado:

estado: Inventario completo
motivo: Todos los compuestos tienen existencias disponibles.

## Explicacion final

La solución funciona porque recorre el inventario de fórmulas químicas y verifica la cantidad disponible de cada compuesto. Cuando encuentra el primero sin existencias, lo reporta para reposición; si todos tienen unidades disponibles, informa que el inventario está completo. Esto produce un resultado claro, verificable y basado en reglas simples.