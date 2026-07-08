equipos = [
    {
        "nombre": "Dragons",
        "victorias": 8,
        "derrotas": 2
    },
    {
        "nombre": "Titans",
        "victorias": 4,
        "derrotas": 6
    },
    {
        "nombre": "Phoenix",
        "victorias": 6,
        "derrotas": 4
    },
    {
        "nombre": "Warriors",
        "victorias": 3,
        "derrotas": 7
    },
    {
        "nombre": "Legends",
        "victorias": 9,
        "derrotas": 1
    }
]


def clasificar_equipos(equipos):

    for equipo in equipos:

        if equipo["victorias"] >= 6:
            print(f'{equipo["nombre"]}: Clasifica a los playoffs.')
        else:
            print(f'{equipo["nombre"]}: No clasifica a los playoffs.')


clasificar_equipos(equipos)