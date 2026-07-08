autos = [
    {
        "marca": "Bugatti",
        "modelo": "Chiron",
        "velocidad_maxima": 420
    },
    {
        "marca": "Koenigsegg",
        "modelo": "Jesko",
        "velocidad_maxima": 483
    },
    {
        "marca": "Ferrari",
        "modelo": "LaFerrari",
        "velocidad_maxima": 350
    },
    {
        "marca": "McLaren",
        "modelo": "Speedtail",
        "velocidad_maxima": 403
    },
    {
        "marca": "Rimac",
        "modelo": "Nevera",
        "velocidad_maxima": 412
    }
]


def buscar_auto(autos, marca_buscar):

    encontrado = False

    for auto in autos:

        if auto["marca"].lower() == marca_buscar.lower():
            print("=== AUTO ENCONTRADO ===")
            print(f'Marca: {auto["marca"]}')
            print(f'Modelo: {auto["modelo"]}')
            print(f'Velocidad máxima: {auto["velocidad_maxima"]} km/h')
            encontrado = True
            break

    if not encontrado:
        print("No se encontró un auto con esa marca.")


buscar_auto(autos, "Bugatti")