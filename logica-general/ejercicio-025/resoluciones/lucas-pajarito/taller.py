vehiculos = [
    {
        "propietario": "Carlos Pérez",
        "vehiculo": "Toyota Corolla",
        "problema": "Cambio de aceite",
        "prioridad": "Baja"
    },
    {
        "propietario": "Ana López",
        "vehiculo": "Honda Civic",
        "problema": "Frenos desgastados",
        "prioridad": "Alta"
    },
    {
        "propietario": "Luis Gómez",
        "vehiculo": "Mazda 3",
        "problema": "Revisión del motor",
        "prioridad": "Media"
    },
    {
        "propietario": "María Ruiz",
        "vehiculo": "Nissan Sentra",
        "problema": "Cambio de llantas",
        "prioridad": "Baja"
    },
    {
        "propietario": "José Ramírez",
        "vehiculo": "Kia Sportage",
        "problema": "Falla en la dirección",
        "prioridad": "Alta"
    }
]


def ordenar_prioridades(vehiculos):

    for vehiculo in vehiculos:

        if vehiculo["prioridad"] == "Alta":
            print(f'{vehiculo["vehiculo"]}: Atención inmediata.')
        elif vehiculo["prioridad"] == "Media":
            print(f'{vehiculo["vehiculo"]}: Atender después de las prioridades altas.')
        else:
            print(f'{vehiculo["vehiculo"]}: Puede esperar su turno.')


ordenar_prioridades(vehiculos)