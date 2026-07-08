# Plantilla de solucion

## Autor

Sergio Ajú

## Analisis

- **Entrada:** `area` (número en m²) y `zona` (string: "urbana" o "rural").
- **Proceso:** Se utiliza una estructura lógica basada en una tabla de decisión para cruzar las variables de ubicación y tamaño, devolviendo el tipo de permiso requerido.
- **Salida:** Un string que especifica el tipo de licencia de construcción necesaria.

## Reglas identificadas

1. **Zona Rural:** Prioridad máxima; cualquier proyecto en zona rural recibe "Licencia Especial Rural".
2. **Zona Urbana (Pequeña):** Si es menor a 50m², requiere "Licencia Básica".
3. **Zona Urbana (Grande):** Si es igual o mayor a 50m², requiere "Licencia Completa".

## Pruebas

### Caso normal

**Entrada:** `area: 40, zona: "urbana"`

**Resultado esperado:**
`"Licencia Básica"`

### Caso borde

**Entrada:** `area: 50, zona: "urbana"`

**Resultado esperado:**
`"Licencia Completa"`

## Explicacion final

La solución emplea un enfoque de "decisión escalonada". Primero descartamos la zona rural, que es un caso que no depende del área. Luego, dentro de la zona urbana, aplicamos una comparación numérica simple para separar las licencias. Esto es equivalente a una tabla de decisión lógica (matriz de condiciones) convertida en código.

## Sugerencia

Cuando tengas que implementar tablas de decisión complejas, dibújalas primero en un papel como una tabla real (filas y columnas). Esto te permite ver si tienes algún caso olvidado antes de empezar a programar condicionales (`if/else`).