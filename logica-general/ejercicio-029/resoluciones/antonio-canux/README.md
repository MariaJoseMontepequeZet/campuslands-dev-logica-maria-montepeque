# Ejercicio 29 - Películas de Miedo

**Camper:** Antonio Canux

## Analisis

- **Entrada:** La función recibe dos cadenas de texto: `estadoActual` (ej. "calmado", "alerta", "panico") que representa cómo se encuentra el espectador actualmente, y `eventoEscena` (ej. "tension", "screamer", "descanso") que representa lo que ocurre en la película de miedo.
- **Proceso:** Se utiliza una lógica de máquina de estados mediante condicionales `if/else if`. Se evalúa la combinación exacta entre dónde estoy (`estadoActual`) y qué está pasando (`eventoEscena`) para determinar hacia dónde voy. 
- **Salida:** Un objeto detallado que incluye el estado original, el evento procesado, el `nuevoEstado` resultante y la `accion` que el sistema o la interfaz debe tomar.

## Reglas identificadas

1. Un evento de "descanso" es un interruptor absoluto: sin importar cuán asustado esté el espectador, la escena lo devuelve al estado "calmado".
2. Un evento de "tension" requiere que el usuario esté previamente "calmado" para transicionar al estado de "alerta".
3. Un evento de "screamer" (susto repentino) tiene resultados variables: si el usuario estaba "calmado", pasa a "asustado"; pero si la película ya lo había puesto en "alerta", el impacto lo lleva al estado de "panico".

## Pruebas

### Caso normal

Entrada: `estadoActual: "calmado"`, `eventoEscena: "tension"`

Resultado esperado: 
```text
estadoAnterior: "calmado"
evento: "tension"
nuevoEstado: "alerta"
accion: "Activar música de suspenso inmersiva."
```

### Caso borde
Entrada: `estadoActual: "alerta"`, `eventoEscena: "screamer"`

Resultado esperado:

```text
estadoAnterior: "alerta"
evento: "screamer"
nuevoEstado: "panico"
accion: "Mostrar advertencia en pantalla para pausar si el usuario lo requiere."
```

## Explicacion final
La solución funciona basándose en el concepto de "Máquina de Estados Finitos" (FSM por sus siglas en inglés), que es vital en el desarrollo de simulaciones y videojuegos. En lugar de evaluar eventos de forma aislada, el código comprende que el resultado de un evento depende completamente del contexto previo. Un "screamer" no genera la misma respuesta si ocurre en un momento tranquilo que si ocurre después de cinco minutos de música de suspenso. Al combinar estadoActual y eventoEscena en la toma de decisiones, logramos simular un comportamiento más realista y controlado.