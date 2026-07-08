# Logica matematica 002 - porcentajes y proporciones

## Como se planteo el problema
Se tomaron las mismas entradas del ejemplo (participantes, bono, penalizacion) pero se adapto la salida al tema de porcentajes: en vez de clasificar por rangos fijos de puntaje, se calcula que porcentaje representa el puntaje_final frente al valor maximo del grupo de participantes.

## Reglas aplicadas
1. Ordenar el array de participantes.
2. Calcular la mediana (promedio de los dos centrales si es par, valor central si es impar) y redondearla.
3. `puntaje_final = round(mediana) + bono - penalizacion`.
4. `porcentaje_rendimiento = round((puntaje_final / maximo(participantes)) * 100)`.
5. Clasificar: >=80% competitivo, 50-79% intermedio, <50% principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → puntaje_final 27, porcentaje_rendimiento 90, clasificacion competitivo.
- Caso borde (un solo participante): `[15]`, bono 0, penalizacion 0 → puntaje_final 15, porcentaje_rendimiento 100, clasificacion competitivo.
- Caso borde (array vacio): retorna error controlado.