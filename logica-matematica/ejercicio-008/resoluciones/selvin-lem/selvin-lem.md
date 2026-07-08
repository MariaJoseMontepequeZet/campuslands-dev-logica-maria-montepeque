# Logica matematica 008 - patrones de puntuacion

## Como se planteo el problema
Se identifico un patron dentro de las puntuaciones de peliculas contando cuantos valores superan el promedio del grupo (picos). La proporcion de picos representa que tan marcado es el patron alto. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la proporcion del ejemplo (0.5) diera "competitivo".

## Reglas aplicadas
1. Calcular el `promedio` de las puntuaciones.
2. Contar `picos`: valores que superan el promedio.
3. Calcular `proporcion_picos = picos / total`.
4. Ordenar el array y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `proporcion_picos >= 0.5` → competitivo; si `>= 0.25` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → picos 2, proporcion_picos 0.5, puntaje_final 27, clasificacion competitivo.
- Caso borde (sin picos): `[10,10,10]`, bono 0, penalizacion 0 → picos 0, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.