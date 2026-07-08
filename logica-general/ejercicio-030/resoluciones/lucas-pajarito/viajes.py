itinerario = [
    {
        "paso": 1,
        "instruccion": "Presentar el pasaporte en el mostrador de la aerolínea."
    },
    {
        "paso": 2,
        "instruccion": "Registrar el equipaje."
    },
    {
        "paso": 3,
        "instruccion": "Pasar por el control de seguridad."
    },
    {
        "paso": 4,
        "instruccion": "Esperar en la sala de abordaje."
    },
    {
        "paso": 5,
        "instruccion": "Abordar el avión cuando se anuncie el vuelo."
    }
]


def mostrar_itinerario(itinerario):

    print("=== INSTRUCCIONES DEL VIAJE ===")

    for paso in itinerario:
        print(f'Paso {paso["paso"]}: {paso["instruccion"]}')


mostrar_itinerario(itinerario)