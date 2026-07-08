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


def calcular_promedio_velocidad(autos):

    suma_velocidades = 0

    print("=== AUTOS HIPERDEPORTIVOS ===")

    for auto in autos:

        suma_velocidades += auto["velocidad_maxima"]

        print(f'Marca: {auto["marca"]}')
        print(f'Modelo: {auto["modelo"]}')
        print(f'Velocidad máxima: {auto["velocidad_maxima"]} km/h')
        print("------------------------------")

    promedio = suma_velocidades / len(autos)

    print(f'Promedio de velocidad máxima: {promedio:.2f} km/h')


calcular_promedio_velocidad(autos)