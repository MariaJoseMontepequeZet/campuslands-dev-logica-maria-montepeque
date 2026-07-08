reactivos = [
    {
        "nombre": "Ácido Clorhídrico",
        "cantidad": 12,
        "stock_minimo": 8
    },
    {
        "nombre": "Hidróxido de Sodio",
        "cantidad": 5,
        "stock_minimo": 6
    },
    {
        "nombre": "Etanol",
        "cantidad": 15,
        "stock_minimo": 10
    },
    {
        "nombre": "Sulfato de Cobre",
        "cantidad": 3,
        "stock_minimo": 5
    },
    {
        "nombre": "Agua Destilada",
        "cantidad": 20,
        "stock_minimo": 10
    }
]


def revisar_inventario(reactivos):

    print("=== INVENTARIO DE REACTIVOS ===")

    for reactivo in reactivos:

        print(f'Reactivo: {reactivo["nombre"]}')
        print(f'Cantidad disponible: {reactivo["cantidad"]}')
        print(f'Stock mínimo: {reactivo["stock_minimo"]}')

        if reactivo["cantidad"] >= reactivo["stock_minimo"]:
            print("Estado: Inventario suficiente.")

        else:
            print("Estado: Es necesario reabastecer el inventario.")

        print("--------------------------------------")


revisar_inventario(reactivos)