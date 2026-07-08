# Plantilla de solucion

## Analisis

- Entrada:
  - tecnicas: ["jab", "patada baja", "uppercut"]
  - energia: 55
  - rival: "ofensivo"

- Proceso:
  - Analizar el nivel de energía.
  - Verificar el tipo de rival.
  - Aplicar las reglas para determinar la acción más adecuada.

- Salida:
  - accion: practicar defensa
  - motivo: Un rival ofensivo requiere mejorar bloqueos y contraataques.

## Reglas identificadas

1. Si la energía es menor que 30, la acción será descansar.
2. Si la energía es suficiente y el rival es ofensivo, se debe practicar defensa.
3. En cualquier otro caso, se practicarán combinaciones para mejorar la técnica.

## Pruebas

### Caso normal

Entrada:

tecnicas: ["jab", "patada baja", "uppercut"]
energia: 55
rival: "ofensivo"

Resultado esperado:

accion: practicar defensa
motivo: Un rival ofensivo requiere mejorar bloqueos y contraataques.

### Caso borde

Entrada:

tecnicas: ["jab"]
energia: 20
rival: "defensivo"

Resultado esperado:

accion: descansar
motivo: La energia es insuficiente para mantener un entrenamiento seguro.

## Explicacion final

La solucion funciona porque recibe los datos de entrenamiento, evalua primero la energia del deportista y luego el tipo de rival. Con estas reglas toma una decision unica y genera una salida clara, verificable y facil de comprender.