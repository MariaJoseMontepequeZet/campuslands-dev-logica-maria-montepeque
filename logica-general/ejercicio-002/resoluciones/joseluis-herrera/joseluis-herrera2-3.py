futbol_equipos = [
    {"Nombre": "FF1", "Goles": 3, "Victorias": 1, "Puntos": 2},
    {"Nombre": "FF2", "Goles": 5, "Victorias": 3, "Puntos": 9},
    {"Nombre": "FF3", "Goles": 1, "Victorias": 0, "Puntos": 1},
    {"Nombre": "FF4", "Goles": 4, "Victorias": 2, "Puntos": 6}
]

liga_mayor = []
liga_menor = []

for i in range(len(futbol_equipos)):
    equipo = futbol_equipos[i]
    
    if equipo["Puntos"] >= 3:
        liga_mayor.append(equipo)
    else:
        liga_menor.append(equipo)
        
    if equipo["Puntos"] >= 9:
        print(f"El ganador es: {equipo['Nombre']}")

print("Equipos en liga mayor", liga_mayor)
print("Equipos en liga menor", liga_menor)