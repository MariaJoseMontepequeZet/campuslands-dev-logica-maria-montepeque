# Plantilla de solucion

## Analisis

- Entrada:
  - altura: 3200
  - paracaidasAbierto: true
  - velocidad: 18
  - clima: "despejado"

- Proceso:
  - Verificar si el paracaídas principal está abierto.
  - Revisar las condiciones climáticas.
  - Comprobar que la velocidad de descenso sea segura.
  - Determinar la acción correspondiente según las reglas.

- Salida:
  - decision: Continuar aterrizaje
  - motivo: Todas las condiciones son adecuadas para completar el salto.

## Reglas identificadas

1. Si el paracaídas principal no está abierto, se activa el paracaídas de emergencia.
2. Si el clima no está despejado, se debe desviar el aterrizaje.
3. Si la velocidad de descenso supera los 25 m/s, se debe reducir la velocidad.
4. Si todas las condiciones son correctas, se continúa con el aterrizaje.

## Pruebas

### Caso normal

Entrada:

altura: 3200
paracaidasAbierto: true
velocidad: 18
clima: "despejado"

Resultado esperado:

decision: Continuar aterrizaje
motivo: Todas las condiciones son adecuadas para completar el salto.

### Caso borde

Entrada:

altura: 3200
paracaidasAbierto: false
velocidad: 18
clima: "despejado"

Resultado esperado:

decision: Activar paracaídas de emergencia
motivo: El paracaídas principal no está abierto.

## Explicacion final

La solución funciona porque evalúa las condiciones del salto en un orden de prioridad. Primero verifica el estado del paracaídas, luego las condiciones climáticas y finalmente la velocidad de descenso. Con base en estas reglas, determina la acción más adecuada para garantizar un aterrizaje seguro y verificable.