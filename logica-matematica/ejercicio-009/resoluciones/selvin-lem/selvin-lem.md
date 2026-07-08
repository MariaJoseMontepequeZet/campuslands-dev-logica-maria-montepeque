# Logica matematica 009 - modulos y divisibilidad

## Como se planteo el problema
Se interpreto el array de participantes como duraciones de peliculas de miedo. Se aplico el operador modulo para contar cuantos valores son divisibles entre 3 (numero tematico) y se calculo la proporcion sobre el total. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la proporcion del ejemplo (0.75) diera "competitivo".

## Reglas aplicadas
1. Contar `divisibles_entre_3`: valores donde `valor % 3 === 0`.
2. Calcular `proporcion_divisibles = divisibles_entre_3 / total`.
3. Ordenar el array y calcular `mediana`.
4. `puntaje_final = round(mediana) + bono - penalizacion`.
5. Clasificar: si `proporcion_divisibles >= 0.5` → competitivo; si `>= 0.25` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → divisibles_entre_3 3, proporcion_divisibles 0.75, puntaje_final 27, clasificacion competitivo.
- Caso borde (ninguno divisible): `[7,8,10]`, bono 0, penalizacion 0 → divisibles_entre_3 0, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.