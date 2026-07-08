### Resolucion: Clasificador de Jugadores Competitivos

## Pensamiento Logico

**Se utiliza una estructura condicional anidada para evaluar el desempeño basado en dos variables independientes: experiencia (nivel) y eficiencia (ratio de victorias).**
Reglas Aplicadas

    Calculo de Ratio: Relacion porcentual entre victorias y partidas totales.

    Filtro PRO: Nivel > 50 con mas del 70% de victorias.

    Filtro VETERANO: Nivel > 20 con mas del 50% de victorias.

    Default: Todo perfil que no alcance los umbrales es clasificado como NOVATO.

Como ejecutar

node jugadores-competitivos.js
Casos Probados

    Alpha: PRO (Nivel 60, Ratio 0.8).

    Beta: VETERANO (Nivel 25, Ratio 0.55).

    Gamma: NOVATO (Nivel 10, Ratio 0.25).