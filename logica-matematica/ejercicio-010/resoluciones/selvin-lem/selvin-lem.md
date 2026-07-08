# Logica matematica 010 - redondeo y precision

## Como se planteo el problema
Se identificaron las entradas (participantes como distancias/costos de viaje, bono, penalizacion) y se definio el error de redondeo como diferencia entre el promedio exacto y el promedio ya redondeado, para trabajar directamente el tema de precision numerica. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que el error del ejemplo (0.25) diera "competitivo".

## Reglas aplicadas
1. Calcular `promedio_exacto = suma(participantes) / cantidad` sin redondear.
2. Calcular `promedio_redondeado = round(promedio_exacto)`.
3. Calcular `error_redondeo = |promedio_exacto - promedio_redondeado|`.
4. Ordenar el array y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `error_redondeo <= 0.25` → competitivo; si `<= 0.4` → intermedio; si no → principiante.

## Como ejecutar
## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → promedio_exacto 21.25, promedio_redondeado 21, error_redondeo 0.25, puntaje_final 27, clasificacion competitivo.
- Caso borde (error maximo): `[10,11]`, bono 0, penalizacion 0 → error_redondeo 0.5, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.