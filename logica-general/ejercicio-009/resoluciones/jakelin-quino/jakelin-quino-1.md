# Analisis

- **Entrada:** `estadoActual` (string), `accion` (string).
- **Proceso:** Se utiliza una estructura condicional que actúa como una máquina de estados simple, verificando si la transición solicitada es válida según el estado actual.
- **Salida:** Un objeto con el `nuevoEstado` y un `mensaje` que confirma si la transición fue exitosa o rechazada.

## Reglas identificadas

1. **Regla de Publicación:** Una película "por publicar" puede pasar a "publicada".
2. **Regla de Retirada:** Una película "publicada" puede ser "archivada".
3. **Regla de Ciclo:** Una película "archivada" puede volver a ser "publicada".
4. **Regla de Seguridad:** Cualquier transición no definida (ej: archivar algo que ya está por publicar) debe ser rechazada.

## Pruebas

### Caso normal

**Entrada:** - estadoActual: "por publicar", accion: "publicar"

**Resultado esperado:** - nuevoEstado: "publicada"
- mensaje: "La película ahora es visible al público."

### Caso borde

**Entrada:** - estadoActual: "por publicar", accion: "archivar"

**Resultado esperado:** - nuevoEstado: "por publicar"
- mensaje: "Acción no permitida para el estado actual."

## Explicacion final

En lugar de permitir cambios libres, el sistema solo acepta movimientos definidos entre estados permitidos. Esto evita que los datos se corrompan (por ejemplo, evitar que una película pase de "archivada" a un estado desconocido).