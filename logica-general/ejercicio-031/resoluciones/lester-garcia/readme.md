# Plantilla de solucion

## Analisis

- Entrada:
  - peleadores:
    - { nombre: "Carlos", categoria: "Profesional", lesionado: false }
    - { nombre: "Miguel", categoria: "Amateur", lesionado: false }
    - { nombre: "Andrés", categoria: "Profesional", lesionado: true }
    - { nombre: "Luis", categoria: "Amateur", lesionado: false }

- Proceso:
  - Recorrer la lista de peleadores.
  - Verificar que pertenezcan a la categoría Profesional.
  - Comprobar que no estén lesionados.
  - Agregar a la lista de entrenamiento únicamente a quienes cumplan ambas condiciones.

- Salida:
  - listaEntrenamiento:
    - Carlos
  - motivo: Solo se organizaron los peleadores profesionales que pueden entrenar.

## Reglas identificadas

1. Solo se consideran peleadores de categoría Profesional.
2. Los peleadores lesionados no pueden incluirse en la lista.
3. Los peleadores que cumplan ambas condiciones se agregan a la lista de entrenamiento.
4. Si ningún peleador cumple las reglas, la lista queda vacía.

## Pruebas

### Caso normal

Entrada:

peleadores:
- { nombre: "Carlos", categoria: "Profesional", lesionado: false }
- { nombre: "Miguel", categoria: "Amateur", lesionado: false }
- { nombre: "Andrés", categoria: "Profesional", lesionado: true }
- { nombre: "Luis", categoria: "Amateur", lesionado: false }

Resultado esperado:

listaEntrenamiento:
- Carlos

motivo: Solo se organizaron los peleadores profesionales que pueden entrenar.

### Caso borde

Entrada:

peleadores:
- { nombre: "Andrés", categoria: "Profesional", lesionado: true }
- { nombre: "Luis", categoria: "Amateur", lesionado: false }

Resultado esperado:

listaEntrenamiento:
[]

motivo: No hay peleadores que cumplan las condiciones.

## Explicacion final

La solución funciona porque recorre la lista de peleadores y aplica dos condiciones al mismo tiempo: pertenecer a la categoría Profesional y no estar lesionado. Solo quienes cumplen ambas reglas se agregan a la lista de entrenamiento. Si ningún participante cumple los requisitos, se devuelve una lista vacía junto con un mensaje que explica el resultado.