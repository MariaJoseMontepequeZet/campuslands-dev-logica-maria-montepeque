# Logica matematica 003 - promedios y medianas

## Como se planteo el problema
Se identificaron las entradas (participantes, bono, penalizacion) y se definieron dos metricas estadisticas como salida: promedio y mediana. El puntaje_final se construyo igual que en ejercicios anteriores (mediana redondeada + bono - penalizacion) y se valido contra el ejemplo dado. La clasificacion se diseño comparando el puntaje_final contra el promedio del grupo, para que el ejercicio use realmente ambos conceptos.

## Reglas aplicadas
1. Calcular `promedio = suma(participantes) / cantidad`.
2. Ordenar el array y calcular `mediana` (promedio de los dos centrales si es par, valor central si es impar).
3. `puntaje_final = round(mediana) + bono - penalizacion`.
4. Clasificar: si `puntaje_final >= promedio` → competitivo; si `>= promedio*0.7` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → promedio 21.25, mediana 21.5, puntaje_final 27, clasificacion competitivo.
- Caso borde (todos iguales): `[20,20,20]`, bono 0, penalizacion 0 → promedio 20, mediana 20, puntaje_final 20, clasificacion competitivo.
- Caso borde (array vacio): retorna error controlado.