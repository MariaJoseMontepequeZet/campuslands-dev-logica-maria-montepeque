# Logica matematica 005 - minimos y limites

## Como se planteo el problema
Se identificaron las entradas (participantes, bono, penalizacion) y se definio el minimo del array como base del tema. Se construyo un margen de seguridad restando la penalizacion al minimo, y se comparo ese margen contra el bono (usado como limite exigido) para clasificar. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion).

## Reglas aplicadas
1. Calcular `minimo` del array de participantes.
2. Calcular `margen_seguridad = minimo - penalizacion`.
3. Ordenar el array y calcular `mediana`.
4. `puntaje_final = round(mediana) + bono - penalizacion`.
5. Clasificar: si `margen_seguridad >= bono` → competitivo; si `>= bono*0.5` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → minimo 12, margen_seguridad 9, puntaje_final 27, clasificacion competitivo.
- Caso borde (margen en 0): `[3,10,14]`, bono 5, penalizacion 3 → margen_seguridad 0, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.