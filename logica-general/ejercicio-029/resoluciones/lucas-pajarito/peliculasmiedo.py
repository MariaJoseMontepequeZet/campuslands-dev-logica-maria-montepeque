peliculas = [
    {
        "titulo": "El Conjuro",
        "estado": "Pendiente"
    },
    {
        "titulo": "It",
        "estado": "Reproduciendo"
    },
    {
        "titulo": "La Monja",
        "estado": "Pausada"
    },
    {
        "titulo": "Insidious",
        "estado": "Finalizada"
    },
    {
        "titulo": "Scream",
        "estado": "Pendiente"
    }
]


def mostrar_estado_peliculas(peliculas):

    print("=== ESTADO DE LAS PELÍCULAS ===")

    for pelicula in peliculas:

        if pelicula["estado"] == "Pendiente":
            print(f'{pelicula["titulo"]}: La película aún no ha comenzado.')

        elif pelicula["estado"] == "Reproduciendo":
            print(f'{pelicula["titulo"]}: La película se está reproduciendo.')

        elif pelicula["estado"] == "Pausada":
            print(f'{pelicula["titulo"]}: La reproducción está en pausa.')

        else:
            print(f'{pelicula["titulo"]}: La película ya finalizó.')


mostrar_estado_peliculas(peliculas)