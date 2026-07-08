# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis
- **Entrada:** `personaje` (objeto con salud y estado de ocultamiento) y `evento` (string: "atrapado", "esconderse", "escapar").
- **Proceso:** Máquina de estados finitos que modifica los atributos del objeto personaje según la naturaleza del evento recibido.
- **Salida:** El nuevo estado del personaje como string.

## Reglas identificadas
1. **Muerte:** Si la salud llega a 0 o menos, el estado es "Eliminado".
2. **Daño:** Si es "atrapado", la salud disminuye y el estado cambia a "Herido" (si sobrevive).
3. **Ocultamiento:** Si se "esconde", el estado cambia independientemente de la salud.
4. **Recuperación:** Si "escapa", vuelve a estado "Vivo".

## Pruebas

### Caso normal
**Entrada:** `personaje: {salud: 100}`, `evento: "atrapado"`
**Resultado esperado:** `"Herido"`

### Caso borde
**Entrada:** `personaje: {salud: 30}`, `evento: "atrapado"`
**Resultado esperado:** `"Eliminado"`

## Explicacion final
Esta solución utiliza una lógica de máquina de estados. Cada evento dispara una transición que altera los datos internos del personaje. Es una forma efectiva de simular sistemas dinámicos donde el futuro de un objeto depende directamente de su estado presente y de una entrada externa.

## Sugerencia
Antes de programar, dibuja tu diagrama de estados:

| Estado Actual | Evento | Nuevo Estado |
| :--- | :--- | :--- |
| Vivo | Atrapado | Herido |
| Herido | Atrapado | Eliminado |
| Vivo/Herido | Esconderse | Escondido |