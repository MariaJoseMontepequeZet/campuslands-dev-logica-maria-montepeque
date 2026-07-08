# Plantilla de solucion

## Analisis

- Entrada:
  - menu:
    - { nombre: "Hamburguesa", disponible: false, precio: 35 }
    - { nombre: "Taco", disponible: true, precio: 20 }
    - { nombre: "Hot Dog", disponible: true, precio: 18 }

- Proceso:
  - Recorrer el menú en el orden establecido.
  - Verificar qué alimentos están disponibles.
  - Seleccionar la primera opción disponible.
  - Si ninguna está disponible, informar que no hay selección posible.

- Salida:
  - seleccion: Taco
  - motivo: Es la primera opción disponible del menú.

## Reglas identificadas

1. Los alimentos se revisan en el orden en que aparecen en el menú.
2. Se selecciona el primer alimento que esté disponible.
3. Si ningún alimento está disponible, se indica que no existe una selección posible.

## Pruebas

### Caso normal

Entrada:

menu:
- { nombre: "Hamburguesa", disponible: false, precio: 35 }
- { nombre: "Taco", disponible: true, precio: 20 }
- { nombre: "Hot Dog", disponible: true, precio: 18 }

Resultado esperado:

seleccion: Taco
motivo: Es la primera opción disponible del menú.

### Caso borde

Entrada:

menu:
- { nombre: "Hamburguesa", disponible: false, precio: 35 }
- { nombre: "Taco", disponible: false, precio: 20 }
- { nombre: "Hot Dog", disponible: false, precio: 18 }

Resultado esperado:

seleccion: Sin disponibilidad
motivo: No hay alimentos disponibles en el menú.

## Explicacion final

La solución funciona porque recorre el menú de comida urbana y evalúa cada opción según su disponibilidad. La primera opción disponible es seleccionada automáticamente; si ninguna cumple la condición, el programa informa que no existen alimentos disponibles. Esto garantiza un resultado claro, verificable y basado en reglas simples.