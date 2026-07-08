# Ejercicio de Lógica 038 - Temática Soldadura

**Camper:** Antonio Canux

## Análisis

- Entrada: 
  - `certificacion`: Una cadena de texto que indica el nivel del operario ("basica" o "avanzada").
  - `turno`: Una cadena de texto que indica el horario solicitado ("diurno" o "nocturno").
- Proceso: El sistema evalúa primero la variable más restrictiva, que es el `turno` nocturno, debido a sus implicaciones de seguridad. Luego, dentro de cada bloque de turno, verifica si el nivel de `certificacion` cumple con los requisitos para asignar una tarea específica o rechazar la solicitud.
- Salida: Un objeto que contiene el estado de acceso (`autorizado` como booleano), la `tarea` específica a realizar y el `motivo` detallado de la resolución.

## Reglas identificadas

1. El turno "nocturno" tiene una regla de exclusión estricta: solo se permite el acceso a personal con certificación "avanzada". Cualquier otro nivel es rechazado inmediatamente.
2. El turno "diurno" es flexible y permite tanto certificaciones básicas como avanzadas, pero asigna tareas de diferente complejidad según el nivel.
3. El sistema debe ser capaz de rechazar entradas inválidas, ya sea por un turno inexistente o una certificación no reconocida.

## Pruebas

### Caso normal

Entrada:
```javascript
certificacion: "basica"
turno: "diurno"
```

Resultado esperado:

```javascript
{
  autorizado: true,
  tarea: 'Soldadura de estructuras estándar',
  motivo: 'Certificación básica validada. Apto para operar en turno diurno con supervisión habitual.'
}
```

### Caso borde
Entrada (Un soldador recién graduado intentando tomar el turno de noche, el cual requiere más experiencia):

```javascript
certificacion: "basica"
turno: "nocturno"
```

Resultado esperado:

```javascript
{
  autorizado: false,
  tarea: 'ninguna',
  motivo: 'El turno nocturno exige certificación avanzada obligatoria debido a la supervisión reducida.'
}
```

## Explicacion final
La solución emplea un enfoque de control de flujo basado en la anidación de condiciones lógicas de mayor a menor restricción. Al segmentar primero por el tipo de turno, las reglas de negocio quedan aisladas y es más fácil escalar el código en el futuro (por ejemplo, si se agrega un "turno_mixto"). Las validaciones internas se encargan de enrutar al soldador a su tarea adecuada, garantizando que nunca se asigne un trabajo peligroso a alguien sin la certificación correspondiente.