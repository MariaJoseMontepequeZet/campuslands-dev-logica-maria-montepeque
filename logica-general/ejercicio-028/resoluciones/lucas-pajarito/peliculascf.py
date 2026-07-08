peliculas = [
    {
        "titulo": "Interestelar",
        "paso": 1,
        "accion": "Seleccionar la película del catálogo."
    },
    {
        "titulo": "Interestelar",
        "paso": 2,
        "accion": "Verificar la conexión a internet."
    },
    {
        "titulo": "Interestelar",
        "paso": 3,
        "accion": "Presionar el botón de reproducir."
    },
    {
        "titulo": "Interestelar",
        "paso": 4,
        "accion": "Disfrutar la película."
    },
    {
        "titulo": "Interestelar",
        "paso": 5,
        "accion": "Calificar la película al finalizar."
    }
]


def mostrar_flujo(peliculas):

    print("=== FLUJO PARA VER UNA PELÍCULA DE CIENCIA FICCIÓN ===")

    for pelicula in peliculas:
        print(f'Paso {pelicula["paso"]}: {pelicula["accion"]}')


mostrar_flujo(peliculas)