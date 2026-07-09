# Solución Ejercicio 030 - Lectura de instrucciones

## Análisis
- **Entrada**: Una lista de objetos (`actividades`) y un string (`preferencia`).
- **Proceso**: Buscar dentro de la lista el elemento que coincida con el tipo de preferencia y generar un motivo.
- **Salida**: Objeto con la actividad seleccionada y el motivo de la elección.

## Reglas identificadas
1. **Filtro**: Si la preferencia es "aventura", buscar tipo "extremo".
2. **Filtro**: Si la preferencia es "relax", buscar tipo "tranquilo".
3. **Defecto**: Si no hay coincidencia o preferencia, seleccionar la primera actividad.

## Pruebas

### Caso normal
- **Entrada**: `itinerario: [{nombre: "Skydiving", tipo: "extremo"}], pref: "aventura"`
- **Resultado esperado**: `actividad_elegida: "Skydiving", motivo: "Buscamos adrenalina."`

### Caso borde
- **Entrada**: `itinerario: [], pref: "aventura"`
- **Resultado esperado**: `{ error: "Itinerario vacío." }`

## Explicación final
La solución utiliza el método `.find()` para extraer elementos específicos de un arreglo basándose en una condición, lo cual es muy eficiente para manejar listas de objetos en JavaScript.