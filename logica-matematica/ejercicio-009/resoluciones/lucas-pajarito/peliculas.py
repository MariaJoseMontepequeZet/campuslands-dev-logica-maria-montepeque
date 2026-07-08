peliculas = [
    {
        "titulo": "El Conjuro",
        "calificacion": 9.2
    },
    {
        "titulo": "It",
        "calificacion": 8.5
    },
    {
        "titulo": "La Monja",
        "calificacion": 7.8
    },
    {
        "titulo": "Insidious",
        "calificacion": 8.9
    },
    {
        "titulo": "Scream",
        "calificacion": 8.1
    }
]


def calcular_promedio_calificaciones(peliculas):

    suma_calificaciones = 0

    print("=== PELÍCULAS DE MIEDO ===")

    for pelicula in peliculas:

        suma_calificaciones += pelicula["calificacion"]

        print(f'Título: {pelicula["titulo"]}')
        print(f'Calificación: {pelicula["calificacion"]}')
        print("------------------------------")

    promedio = suma_calificaciones / len(peliculas)

    print(f'Promedio de calificaciones: {promedio:.2f}')


calcular_promedio_calificaciones(peliculas)