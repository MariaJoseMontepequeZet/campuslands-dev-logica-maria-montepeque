viajes = [
    {
        "destino": "Antigua Guatemala",
        "hotel": 850,
        "transporte": 250,
        "alimentacion": 300
    },
    {
        "destino": "Panajachel",
        "hotel": 600,
        "transporte": 200,
        "alimentacion": 250
    },
    {
        "destino": "Tikal",
        "hotel": 950,
        "transporte": 450,
        "alimentacion": 400
    },
    {
        "destino": "Monterrico",
        "hotel": 700,
        "transporte": 300,
        "alimentacion": 350
    },
    {
        "destino": "Semuc Champey",
        "hotel": 800,
        "transporte": 500,
        "alimentacion": 450
    }
]


def calcular_costo_viaje(viajes):

    print("=== COSTO TOTAL DE LOS VIAJES ===")

    for viaje in viajes:

        total = viaje["hotel"] + viaje["transporte"] + viaje["alimentacion"]

        print(f'Destino: {viaje["destino"]}')
        print(f'Hotel: Q{viaje["hotel"]}')
        print(f'Transporte: Q{viaje["transporte"]}')
        print(f'Alimentación: Q{viaje["alimentacion"]}')
        print(f'Total del viaje: Q{total}')
        print("---------------------------------")


calcular_costo_viaje(viajes)