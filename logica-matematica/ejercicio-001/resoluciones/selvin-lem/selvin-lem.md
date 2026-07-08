# Logica matematica 001 - operaciones aritmeticas controladas

## Como se planteo el problema
Se identificaron las entradas (participantes, bono, penalizacion) y salidas (puntaje_final, clasificacion, explicacion). Se probaron distintas operaciones (suma, promedio, max-min) contra el ejemplo dado hasta encontrar la que coincidia: la mediana redondeada del array de participantes.

## Reglas aplicadas
1. Ordenar el array de participantes.
2. Calcular la mediana (promedio de los dos centrales si es par, valor central si es impar).
3. Redondear la mediana al entero mas cercano.
4. Sumar el bono y restar la penalizacion: `puntaje_final = round(mediana) + bono - penalizacion`.
5. Clasificar segun rango: >=25 competitivo, 15-24 intermedio, <15 principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → puntaje_final 27, clasificacion competitivo.
- Caso borde (un solo participante): `[10]`, bono 0, penalizacion 0 → puntaje_final 10, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.