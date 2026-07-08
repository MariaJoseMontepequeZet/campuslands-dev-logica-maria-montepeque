# Plantilla de solución

## Analisis
- **Entrada:** `nombreEquipo` (string), `golesFavor` (int), `golesContra` (int), `tarjetasRojas` (int).
- **Proceso:** Aplicación de reglas de validación secuencial para filtrar datos erróneos o sancionables antes de integrarlos al ranking.
- **Salida:** Un objeto con el `estado` (Aceptado/Rechazado) y un `motivo` explicativo.

## Reglas identificadas
1. **Consistencia numérica:** Los goles no pueden ser menores a cero.
2. **Fair Play:** Se prohíbe registrar partidos con más de 3 tarjetas rojas por equipo.
3. **Validación:** Si se cumplen las reglas, los datos pasan a la fase de registro en el ranking.

## Pruebas

### Caso normal
**Entrada:** `nombreEquipo: "Equipo A"`, `golesFavor: 3`, `golesContra: 1`, `tarjetasRojas: 0`
**Resultado esperado:** `estado: "Aceptado"`, `motivo: "Datos validados correctamente..."`

### Caso borde
**Entrada:** `nombreEquipo: "Equipo B"`, `golesFavor: 0`, `golesContra: 0`, `tarjetasRojas: 4`
**Resultado esperado:** `estado: "Rechazado"`, `motivo: "Exceso de tarjetas rojas..."`

## Explicacion final
La solución utiliza una estructura de "guard clauses" (cláusulas de guarda). En lugar de anidar múltiples `if`, validamos primero las condiciones de error. Si alguna se cumple, retornamos inmediatamente el rechazo. Esto mantiene el código limpio y fácil de leer, asegurando que solo los datos íntegros lleguen a la lógica del ranking.

## Sugerencia
Antes de programar la validación, utiliza esta tabla para identificar restricciones:

| Dato | Restricción |
| :--- | :--- |
| Goles | `>= 0` |
| Tarjetas Rojas | `<= 3` |
| Equipo | `No vacío` |