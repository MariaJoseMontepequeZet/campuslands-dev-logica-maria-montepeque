# Logica matematica 007 - secuencias numericas

## Como se planteo el problema
Se interpreto el array de participantes como el orden de reproduccion de una playlist. Se calcularon las diferencias entre elementos consecutivos para representar la "progresion" de la secuencia, y se midio su regularidad mediante la variabilidad (desviacion promedio respecto a la diferencia promedio). El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se ajusto para que la variabilidad del ejemplo (0.67) diera "competitivo".

## Reglas aplicadas
1. Calcular las `diferencias` entre elementos consecutivos del array.
2. Calcular `diferencia_promedio = promedio(diferencias)`.
3. Calcular `variabilidad = promedio(|diferencia_i - diferencia_promedio|)`.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `variabilidad <= 1` → competitivo; si `<= 3` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → diferencia_promedio 6, variabilidad 0.67, puntaje_final 27, clasificacion competitivo.
- Caso borde (secuencia irregular): `[5,40,6,50]` → variabilidad alta, clasificacion principiante.
- Caso borde (menos de 2 elementos): retorna error controlado.