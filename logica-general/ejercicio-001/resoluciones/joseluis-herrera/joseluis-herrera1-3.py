equipos = [
    {"nombre": "Alpha Team", "daño": 2450, "kills": 14, "sobrevivientes": 2},
    {"nombre": "Shadow Guild", "daño": 1800, "kills": 9, "sobrevivientes": 4},
    {"nombre": "Cyber Wolves", "daño": 3100, "kills": 18, "sobrevivientes": 1},
    {"nombre": "Viper Squad", "daño": 1500, "kills": 6, "sobrevivientes": 0},
    {"nombre": "Iron Titans", "daño": 2200, "kills": 11, "sobrevivientes": 3}
]

def calcular_puntuacion(e):
    return (e["sobrevivientes"] * 100) + (e["kills"] * 150) + e["daño"]

if len(equipos) == 0:
    print("No hay equipos registrados en la partida.")
else:
    ganador = equipos[0]
    
    for equipo in equipos:
        if calcular_puntuacion(equipo) > calcular_puntuacion(ganador):
            ganador = equipo
            
    print(f"El equipo ganador es {ganador['nombre']}")