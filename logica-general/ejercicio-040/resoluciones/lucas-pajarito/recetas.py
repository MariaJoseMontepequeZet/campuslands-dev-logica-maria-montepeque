comidas = [
    {
        "nombre": "Hamburguesa Clásica",
        "categoria": "Hamburguesa",
        "disponible": True
    },
    {
        "nombre": "Hot Dog Especial",
        "categoria": "Hot Dog",
        "disponible": False
    },
    {
        "nombre": "Tacos al Pastor",
        "categoria": "Tacos",
        "disponible": True
    },
    {
        "nombre": "Pizza Personal",
        "categoria": "Pizza",
        "disponible": True
    },
    {
        "nombre": "Burrito Mixto",
        "categoria": "Burrito",
        "disponible": False
    }
]


def seleccionar_comidas(comidas):

    print("=== MENÚ DE COMIDA URBANA ===")

    for comida in comidas:

        print(f'Platillo: {comida["nombre"]}')
        print(f'Categoría: {comida["categoria"]}')

        if comida["disponible"]:
            print("Estado: Disponible para la venta.")

        else:
            print("Estado: No disponible.")

        print("--------------------------------")


seleccionar_comidas(comidas)