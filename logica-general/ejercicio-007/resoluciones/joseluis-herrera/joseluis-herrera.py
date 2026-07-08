artistas_validos = ["Don Omar", "Daddy Yankee", "Bad Bunny", "Rosalía"]

playlist = [
    {"titulo": "Danza Kuduro", "artista": "Don Omar"},
    {"titulo": "Gasolina", "artista": "Daddy Yankee"},
    {"titulo": "Canción Fantasma", "artista": "Un Artista Desconocido"}, 
    {"titulo": "Safaera", "artista": "Bad Bunny"}
]

inconsistencias_detectadas = 0


for cancion in playlist:
    
    if cancion["artista"] not in artistas_validos:
        print(f"¡INCONSISTENCIA encontrada!")
        print(f"La canción '{cancion['titulo']}' tiene un artista no registrado: '{cancion['artista']}'")
        
        inconsistencias_detectadas += 1


if inconsistencias_detectadas == 0:
    print("No se encontraron inconsistencias en la playlist.")
else:
    print(f"Se encontraron {inconsistencias_detectadas}.")