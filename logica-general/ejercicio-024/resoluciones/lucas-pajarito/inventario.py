motos = [
    {
        "marca": "Yamaha",
        "modelo": "FZ25",
        "año": 2022,
        "estado_motor": "Excelente"
    },
    {
        "marca": "Honda",
        "modelo": "CB190R",
        "año": 2020,
        "estado_motor": "Bueno"
    },
    {
        "marca": "Suzuki",
        "modelo": "Gixxer 150",
        "año": 2019,
        "estado_motor": "Regular"
    },
    {
        "marca": "KTM",
        "modelo": "200 Duke",
        "año": 2018,
        "estado_motor": "Malo"
    },
    {
        "marca": "Bajaj",
        "modelo": "Pulsar NS200",
        "año": 2021,
        "estado_motor": "Bueno"
    }
]


def revisar_motor(motos):

    for moto in motos:

        if moto["estado_motor"] == "Excelente" or moto["estado_motor"] == "Bueno":
            print(f'{moto["marca"]} {moto["modelo"]}: Motor apto para seguir en uso.')
        else:
            print(f'{moto["marca"]} {moto["modelo"]}: Se recomienda cambiar el motor.')


revisar_motor(motos)