cola_soldadura = [
    {"nombre": "Mateo", "equipo": "Estructuras", "puntos": 88},
    {"nombre": "Alan", "equipo": "Mexico", "puntos": 122},
    {"nombre": "Carlos", "equipo": "Colombia", "puntos": 45},
    {"nombre": "Sofía", "equipo": "Mexico", "puntos": 150}
]

def gestionar_turnos_soldadura(cola):
    turno = 1
    
    while len(cola) > 0:
        # Extraemos al primer soldador en la fila (FIFO)
        soldador = cola.pop(0)
        nombre = soldador["nombre"]
        taller = soldador["equipo"]
        complejidad_pieza = soldador["puntos"]
        
        print(f"\n[TURNO {turno}]: Atendiendo a {nombre} de la delegación {taller}")
        
        # Evaluar tiempo estimado de ocupación de la máquina según la pieza
        if complejidad_pieza >= 100:
            tiempo_estimado = 45
            print(f" -> Pieza de Alta Complejidad ({complejidad_pieza} pts).")
        else:
            tiempo_estimado = 20
            print(f" -> Pieza de Complejidad Estándar ({complejidad_pieza} pts).")
            
        print(f" -> Estado: Soldando... Máquina ocupada por {tiempo_estimado} minutos.")
        turno += 1
        
    print("\n=== Todos los turnos del día han sido procesados con éxito ===")

gestionar_turnos_soldadura(cola_soldadura)