# Analisis

- **Entrada:** `destino` (string), `temporada` (string), `tienePasaporte` (boolean).
- **Proceso:** Se valida primero el requisito legal (pasaporte para internacional) y luego se gestiona la disponibilidad según la temporada.
- **Salida:** Un objeto con el estado de la `reserva` y un `motivo` explicativo.

## Reglas identificadas

1. **Regla Legal:** Si el destino es "internacional", es obligatorio tener pasaporte (`true`).
2. **Regla de Disponibilidad:** Para destinos "nacionales" en "temporada alta", la reserva queda como "Pendiente" por cupos.
3. **Regla General:** Cualquier otra combinación se considera "Aprobada".

## Pruebas

### Caso normal

**Entrada:** - Destino: "internacional", Temporada: "baja", tienePasaporte: true

**Resultado esperado:** - reserva: "Aprobada"
- motivo: "Reserva confirmada exitosamente."

### Caso borde

**Entrada:** - Destino: "internacional", Temporada: "baja", tienePasaporte: false

**Resultado esperado:** - reserva: "Denegada"
- motivo: "Se requiere pasaporte vigente para destinos internacionales."

## Explicacion final

Primero validamos lo que es obligatorio por ley (pasaporte) antes de pasar a la lógica de negocio (temporadas). Este orden garantiza que el sistema no apruebe reservas ilegales, cumpliendo estrictamente con las instrucciones dadas.