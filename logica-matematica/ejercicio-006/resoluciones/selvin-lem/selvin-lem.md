# Logica matematica 006 - conversion de unidades

## Como se planteo el problema
Se interpreto el array de participantes como velocidades en km/h, propio del tema de autos hiperdeportivos. Se calculo la mediana como valor representativo y se convirtio a millas por hora usando el factor estandar 0.621371. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y la clasificacion se ajusto para que la velocidad convertida del ejemplo (13.36 mph) coincidiera con "competitivo".

## Reglas aplicadas
1. Ordenar el array y calcular la `mediana`.
2. `velocidad_mph = round(mediana * 0.621371, 2)`.
3. `puntaje_final = round(mediana) + bono - penalizacion`.
4. Clasificar: si `velocidad_mph >= 13` → competitivo; si `>= 8` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → velocidad_mph 13.36, puntaje_final 27, clasificacion competitivo.
- Caso borde (velocidad baja): `[5,6,7]`, bono 0, penalizacion 0 → velocidad_mph 3.73, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.