peliculas = [
    {
        "titulo": "Interestelar",
        "duracion": 169
    },
    {
        "titulo": "Avatar",
        "duracion": 162
    },
    {
        "titulo": "The Matrix",
        "duracion": 136
    },
    {
        "titulo": "Dune",
        "duracion": 155
    },
    {
        "titulo": "El Marciano",
        "duracion": 144
    }
]


def calcular_tiempo_reproduccion(peliculas):

    total_minutos = 0

    print("=== PELÍCULAS DE CIENCIA FICCIÓN ===")

    for pelicula in peliculas:

        total_minutos += pelicula["duracion"]

        print(f'Título: {pelicula["titulo"]}')
        print(f'Duración: {pelicula["duracion"]} minutos')
        print("-------------------------------")

    total_horas = total_minutos // 60
    minutos_restantes = total_minutos % 60
    promedio = total_minutos / len(peliculas)

    print(f'Tiempo total: {total_horas} horas y {minutos_restantes} minutos')
    print(f'Duración promedio: {promedio:.2f} minutos')


calcular_tiempo_reproduccion(peliculas)