# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** - `estadoConexion`: (Booleano) `true` si todos los jugadores están conectados, `false` si hay alguien desconectado.
  - `tiempoEspera`: (Número) Minutos transcurridos desde la hora de inicio programada.
- **Proceso:** Evaluar el estado de conexión y el tiempo de espera contra las reglas del torneo para definir si el juego inicia, continúa en espera o se cancela.
- **Salida:** Un mensaje con la acción a tomar y el motivo basado en el estado actual.

## Reglas identificadas

1. **Inicio inmediato:** Si todos los jugadores están conectados (`true`), la partida comienza inmediatamente.
2. **Tiempo de gracia:** Si hay desconexiones (`false`) y el tiempo de espera es menor a 10 minutos, se mantiene en estado de espera.
3. **Cancelación por abandono:** Si hay desconexiones (`false`) y el tiempo de espera es igual o mayor a 10 minutos, se declara W.O. (Walkover).

## Pruebas

### Caso normal

**Entrada:** `estadoConexion = false`, `tiempoEspera = 5`

**Resultado esperado:** `Accion: Esperar. Motivo: Aún no se cumple el tiempo límite de 10 minutos para declarar W.O.`

### Caso borde

**Entrada:** `estadoConexion = false`, `tiempoEspera = 10`

**Resultado esperado:** `Accion: Cancelar partida (W.O.). Motivo: Se superó el tiempo máximo de espera de 10 minutos con jugadores desconectados.`

## Explicacion final

La solución funciona mediante una estructura de control condicional que prioriza la validación de la conexión. Primero se verifica si el flujo es positivo (todos conectados), y en caso contrario, se utiliza una comparación numérica contra el umbral de 10 minutos para determinar el desenlace de la partida. Esto asegura que no haya estados ambiguos y que el sistema responda correctamente incluso al alcanzar exactamente el minuto 10.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para sistemas más complejos, considera utilizar una tabla de verdad para mapear todas las combinaciones posibles de estados antes de escribir el código.