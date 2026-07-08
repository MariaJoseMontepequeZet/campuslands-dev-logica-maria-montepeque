equipos = [
    {
        "nombre": "Tigres FS",
        "partidos_jugados": 8,
        "victorias": 6,
        "empates": 1,
        "derrotas": 1,
        "puntos": 19
    },
    {
        "nombre": "Leones FS",
        "partidos_jugados": 8,
        "victorias": 5,
        "empates": 2,
        "derrotas": 1,
        "puntos": 17
    },
    {
        "nombre": "Águilas FS",
        "partidos_jugados": 8,
        "victorias": 4,
        "empates": 1,
        "derrotas": 3,
        "puntos": 13
    },
    {
        "nombre": "Panteras FS",
        "partidos_jugados": 8,
        "victorias": 3,
        "empates": 2,
        "derrotas": 3,
        "puntos": 11
    },
    {
        "nombre": "Lobos FS",
        "partidos_jugados": 8,
        "victorias": 2,
        "empates": 1,
        "derrotas": 5,
        "puntos": 7
    }
]


def mostrar_ranking(equipos):

    equipos.sort(key=lambda equipo: equipo["puntos"], reverse=True)

    print("=== RANKING DE FÚTBOL SALA ===")

    for posicion, equipo in enumerate(equipos, start=1):
        print(f"Top {posicion}: {equipo['nombre']} - {equipo['puntos']} puntos")


mostrar_ranking(equipos)