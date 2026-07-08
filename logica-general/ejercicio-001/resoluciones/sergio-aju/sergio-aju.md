# Resolución: Clasificación de Estados en Videojuegos Competitivos

**Autor:** 

Sergio Ajù

## Razonamiento
El problema se abordó como una jerarquía de estados. Identifiqué que el estado "bloqueado" actúa como una excepción que debe interrumpir el flujo normal.

## Reglas aplicadas
1. **Prioridad Crítica:** Si el array contiene "bloqueado", se retorna acción de desbloqueo inmediato.
2. **Prioridad Operativa:** Si no hay bloqueos, se busca procesar "pendiente".
3. **Estado Neutro:** "aprobado" se clasifica como sin acción necesaria.

## Ejecución
El código está escrito en JavaScript puro. Se puede ejecutar mediante `node nombre-apellido.js` en la terminal.

## Casos de prueba
- **Caso Normal:** Items: ["aprobado", "pendiente"], Prioridad: alta -> Resultado: Revisar pendientes.
- **Caso Borde (Límite):** Items: ["aprobado", "aprobado"], Prioridad: baja -> Resultado: Todo en orden.