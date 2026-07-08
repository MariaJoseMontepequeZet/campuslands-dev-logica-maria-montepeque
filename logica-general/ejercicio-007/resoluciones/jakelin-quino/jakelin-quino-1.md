# Analisis

- **Entrada:** `cancion` (string), `duracion` (number), `esRepetida` (boolean).
- **Proceso:** Se valida primero que la duración sea un valor lógico positivo y luego se verifica si el identificador de la canción ya existe para prevenir duplicados.
- **Salida:** Un objeto con el `estado` (OK/Error/Inconsistente) y un `motivo` detallado.

## Reglas identificadas

1. **Regla de Integridad:** La duración debe ser mayor a cero.
2. **Regla de Unicidad:** No se permiten canciones repetidas en la playlist.
3. **Regla de Validación:** Si se detecta cualquier inconsistencia, el proceso se detiene y reporta el error específico.

## Pruebas

### Caso normal

**Entrada:** - Canción: "Bohemian Rhapsody", Duración: 354, esRepetida: false

**Resultado esperado:** - estado: "OK"
- motivo: "Canción validada correctamente."

### Caso borde

**Entrada:** - Canción: "Stairway to Heaven", Duración: -10, esRepetida: false

**Resultado esperado:** - estado: "Error"
- motivo: "La duración de la canción no puede ser 0 o negativa."

## Explicacion final

Al tratar la duración como una regla de "integridad física" y la repetición como una regla de "lógica de negocio", el sistema asegura que la playlist solo contenga elementos válidos.