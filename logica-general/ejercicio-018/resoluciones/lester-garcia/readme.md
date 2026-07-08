# Plantilla de solucion

## Analisis

- Entrada:
  - turnos:
    - { soldador: "Ana", turno: "Mañana", disponible: false }
    - { soldador: "Luis", turno: "Tarde", disponible: true }
    - { soldador: "Carlos", turno: "Noche", disponible: true }

- Proceso:
  - Recorrer la lista de turnos.
  - Buscar el primer soldador que esté disponible.
  - Asignar el turno correspondiente.
  - Si ninguno está disponible, informar que no hay asignación.

- Salida:
  - asignacion: Luis - Tarde
  - motivo: Es el primer soldador disponible para cubrir el turno.

## Reglas identificadas

1. Los turnos se revisan en el orden en que aparecen en la lista.
2. El primer soldador disponible recibe la asignación.
3. Si no existe ningún soldador disponible, no se asigna ningún turno.

## Pruebas

### Caso normal

Entrada:

turnos:
- { soldador: "Ana", turno: "Mañana", disponible: false }
- { soldador: "Luis", turno: "Tarde", disponible: true }
- { soldador: "Carlos", turno: "Noche", disponible: true }

Resultado esperado:

asignacion: Luis - Tarde
motivo: Es el primer soldador disponible para cubrir el turno.

### Caso borde

Entrada:

turnos:
- { soldador: "Ana", turno: "Mañana", disponible: false }
- { soldador: "Luis", turno: "Tarde", disponible: false }
- { soldador: "Carlos", turno: "Noche", disponible: false }

Resultado esperado:

asignacion: Sin asignación
motivo: No hay soldadores disponibles.

## Explicacion final

La solución funciona porque recorre la lista de turnos en orden y selecciona al primer soldador disponible. Si encuentra uno, realiza la asignación inmediatamente; si no encuentra ninguno, informa que no es posible asignar un turno. Esto garantiza un resultado claro, verificable y basado en reglas simples.