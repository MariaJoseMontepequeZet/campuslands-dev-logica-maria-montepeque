# Resolución: Simulador de Estado (Cine de Miedo)

## Pensamiento Lógico
Para este ejercicio, la mejor estructura es una **Tabla de Transición de Estados**. En lugar de usar múltiples condicionales (`if/else`), mapeamos los estados posibles y sus reacciones ante cada evento. Esto hace que el código sea extremadamente fácil de ampliar si, por ejemplo, queremos agregar un estado "Gritando".

## Reglas Aplicadas
1. **Calmado:** Estado base.
2. **Tenso:** Se alcanza al procesar "suspenso".
3. **Aterrado:** Se alcanza al procesar "jumpscare" (desde cualquier estado).
4. **Reseteo:** "calma" devuelve al espectador siempre a "CALMADO".

## Cómo ejecutar
Ejecutar con Node.js: `node cine-miedo.js`

## Casos Probados
- **Escena de Suspenso:** El espectador pasa de CALMADO a TENSO.
- **Jumpscare:** El espectador pasa de TENSO a ATERRADO.
- **Evento de Calma:** El espectador se recupera instantáneamente de cualquier estado.