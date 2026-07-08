playlist = [
    {
        "titulo": "Blinding Lights",
        "artista": "The Weeknd",
        "duracion": 200
    },
    {
        "titulo": "Shape of You",
        "artista": "",
        "duracion": 233
    },
    {
        "titulo": "Believer",
        "artista": "Imagine Dragons",
        "duracion": 0
    },
    {
        "titulo": "Levitating",
        "artista": "Dua Lipa",
        "duracion": 203
    },
    {
        "titulo": "",
        "artista": "Coldplay",
        "duracion": 245
    }
]


def detectar_inconsistencias(playlist):

    for cancion in playlist:

        if cancion["titulo"] == "":
            print("Error: La canción no tiene un título registrado.")

        elif cancion["artista"] == "":
            print(f'{cancion["titulo"]}: No tiene un artista registrado.')

        elif cancion["duracion"] <= 0:
            print(f'{cancion["titulo"]}: La duración es inválida.')

        else:
            print(f'{cancion["titulo"]}: Información correcta.')


detectar_inconsistencias(playlist)