juegos = [
    {
        "nombre": "Valorant",
        "categoria": "FPS Táctico",
        "clasificacion": "Competitivo"
    },
    {
        "nombre": "League of Legends",
        "categoria": "MOBA",
        "clasificacion": "Competitivo"
    },
    {
        "nombre": "Rocket League",
        "categoria": "Deportes",
        "clasificacion": "Competitivo"
    },
    {
        "nombre": "Counter-Strike 2",
        "categoria": "FPS",
        "clasificacion": "Competitivo"
    },
    {
        "nombre": "EA Sports FC 25",
        "categoria": "Deportes",
        "clasificacion": "Competitivo"
    }
]


def mostrar_clasificacion(juegos):

    print("=== CLASIFICACIÓN DE JUEGOS COMPETITIVOS ===")

    for indice, juego in enumerate(juegos, start=1):

        print(f"Juego {indice}")
        print(f'Nombre: {juego["nombre"]}')
        print(f'Categoría: {juego["categoria"]}')
        print(f'Clasificación: {juego["clasificacion"]}')
        print("------------------------------")


mostrar_clasificacion(juegos)