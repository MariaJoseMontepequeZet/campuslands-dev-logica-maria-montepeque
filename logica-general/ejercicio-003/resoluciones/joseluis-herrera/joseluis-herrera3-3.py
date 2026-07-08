equipos_sport = [
    {"nombre": "Martines12", "victorias": 4, "reliquias": 3, "kills": 2},
    {"nombre": "Aguilas123", "victorias": 2, "reliquias": 5, "kills": 3},
    {"nombre": "Poctasios1", "victorias": 5, "reliquias": 2, "kills": 3}
]

puntos_equipo = 0
equipo_ganador = []
indice = 0

while indice < len(equipos_sport):
    equipo = equipos_sport[indice]
    calcular_puntos = (equipo["victorias"] * 3) + (equipo["reliquias"] * 5) + equipo["kills"]
    
    if calcular_puntos > puntos_equipo:
        puntos_equipo = calcular_puntos
        equipo_ganador = [equipo["nombre"]]
    elif calcular_puntos == puntos_equipo:
        equipo_ganador.append(equipo["nombre"])
        
    indice += 1

if len(equipo_ganador) > 1:
    ganadores_str = ", ".join(equipo_ganador)
    print(f"Hay un empate, con un total de puntos {puntos_equipo}, los cuales son los siguientes {ganadores_str}")
else:
    print(f"El equipo ganador es {equipo_ganador[0]} con un total de puntos {puntos_equipo}")