jugadores = [
    {
        "nombre": "Juan",
        "puntos": 21
    },
    {
        "nombre": "Pedro",
        "puntos": 18
    },
    {
        "nombre": "Luis",
        "puntos": 25
    },
    {
        "nombre": "Carlos",
        "puntos": 16
    },
    {
        "nombre": "Miguel",
        "puntos": 22
    }
]


def comparar_jugadores(jugadores):

    print("=== COMPARACIÓN DE JUGADORES ===")

    mayor = jugadores[0]

    for jugador in jugadores:

        print(f'Jugador: {jugador["nombre"]}')
        print(f'Puntos: {jugador["puntos"]}')
        print("----------------------------")

        if jugador["puntos"] > mayor["puntos"]:
            mayor = jugador

    print(f'El jugador con mayor puntuación es {mayor["nombre"]} con {mayor["puntos"]} puntos.')


comparar_jugadores(jugadores)