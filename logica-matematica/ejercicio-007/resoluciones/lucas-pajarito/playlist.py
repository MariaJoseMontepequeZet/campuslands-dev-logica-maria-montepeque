playlist = [
    {
        "titulo": "Blinding Lights",
        "artista": "The Weeknd",
        "duracion": 200
    },
    {
        "titulo": "Shape of You",
        "artista": "Ed Sheeran",
        "duracion": 233
    },
    {
        "titulo": "Believer",
        "artista": "Imagine Dragons",
        "duracion": 204
    },
    {
        "titulo": "Levitating",
        "artista": "Dua Lipa",
        "duracion": 203
    },
    {
        "titulo": "Viva La Vida",
        "artista": "Coldplay",
        "duracion": 242
    }
]


def calcular_duracion_playlist(playlist):

    total_segundos = 0

    print("=== PLAYLIST MUSICAL ===")

    for cancion in playlist:

        total_segundos += cancion["duracion"]

        print(f'Título: {cancion["titulo"]}')
        print(f'Artista: {cancion["artista"]}')
        print(f'Duración: {cancion["duracion"]} segundos')
        print("------------------------------")

    promedio = total_segundos / len(playlist)

    minutos = total_segundos // 60
    segundos = total_segundos % 60

    print(f'Duración total: {minutos} minutos y {segundos} segundos')
    print(f'Duración promedio: {promedio:.2f} segundos')


calcular_duracion_playlist(playlist)