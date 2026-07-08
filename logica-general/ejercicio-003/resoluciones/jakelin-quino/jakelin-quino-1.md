# Analisis

- **Entrada:** `nivelJugador` (number), `tieneSuscripcion` (boolean), `region` (string).
- **Proceso:** Se valida primero la región (filtro geográfico), luego el nivel (filtro de habilidad) y finalmente se determina la prioridad basándose en la suscripción.
- **Salida:** Un objeto con la `accion` (Aceptar/Denegar) y el `motivo` de la decisión.

## Reglas identificadas

1. **Regla Geográfica:** El torneo es exclusivo para la región "LATAM".
2. **Regla de Habilidad:** El jugador debe tener al menos nivel 10.
3. **Regla de Prioridad:** Los suscriptores con nivel mayor a 10 son aceptados con prioridad.

## Pruebas

### Caso normal

**Entrada:** - nivel: 15
- suscripción: true
- región: "LATAM"

**Resultado esperado:** - accion: "Aceptar"
- motivo: "Jugador de nivel alto con suscripción activa (Prioridad)."

### Caso borde

**Entrada:** - nivel: 5
- suscripción: false
- región: "EU"

**Resultado esperado:** - accion: "Denegar"
- motivo: "Solo se aceptan jugadores de la región LATAM."

## Explicacion final

Primero descartamos los casos que no cumplen con los requisitos obligatorios (región y nivel mínimo) antes de procesar el estado de suscripción. Esto hace que el código sea eficiente, ya que el programa se detiene apenas encuentra una regla incumplida.