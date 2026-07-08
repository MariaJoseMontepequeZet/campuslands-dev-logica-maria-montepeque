equipos = [
    {"nombre": "Alpha Team", "daño": 2450, "kills": 14, "sobrevivientes": 2},
    {"nombre": "Shadow Guild", "daño": 1800, "kills": 9, "sobrevivientes": 4},
    {"nombre": "Cyber Wolves", "daño": 3100, "kills": 18, "sobrevivientes": 1},
    {"nombre": "Viper Squad", "daño": 1500, "kills": 6, "sobrevivientes": 0},
    {"nombre": "Iron Titans", "daño": 2200, "kills": 11, "sobrevivientes": 3}
]

if len(equipos) == 0:
    print("No hay equipos registrados en la partida.")
else:
    ganador = equipos[0]
    
    for equipo in equipos:
        puntuacion_actual = (equipo["sobrevivientes"] * 100) + (equipo["kills"] * 150) + equipo["daño"]
        puntuacion_ganador = (ganador["sobrevivientes"] * 100) + (ganador["kills"] * 150) + ganador["daño"]
        
        if puntuacion_actual > puntuacion_ganador:
            ganador = equipo

    print(f"El equipo ganador es {ganador['nombre']}")