# Logica matematica 004 - rangos y maximos

## Como se planteo el problema
Se identificaron las entradas (participantes, bono, penalizacion) y se agregaron las salidas propias del tema: maximo, minimo y rango. El puntaje_final se mantuvo con la formula ya validada en ejercicios previos (mediana redondeada + bono - penalizacion). La clasificacion se diseño comparando el puntaje_final contra el rango del inventario, para que el ejercicio use realmente maximos y rangos.

## Reglas aplicadas
1. Calcular `maximo` y `minimo` del array de participantes.
2. Calcular `rango = maximo - minimo`.
3. Ordenar el array y calcular `mediana`.
4. `puntaje_final = round(mediana) + bono - penalizacion`.
5. Clasificar: si `puntaje_final >= rango` → competitivo; si `>= rango*0.5` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → maximo 30, minimo 12, rango 18, puntaje_final 27, clasificacion competitivo.
- Caso borde (todos iguales, rango 0): `[15,15,15]`, bono 0, penalizacion 0 → rango 0, puntaje_final 15, clasificacion competitivo.
- Caso borde (array vacio): retorna error controlado.