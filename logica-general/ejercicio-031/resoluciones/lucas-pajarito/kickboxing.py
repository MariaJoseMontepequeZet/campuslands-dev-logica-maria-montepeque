peleadores = [
    {
        "nombre": "Carlos Pérez",
        "categoria": "Peso Ligero",
        "edad": 22
    },
    {
        "nombre": "Luis Gómez",
        "categoria": "Peso Medio",
        "edad": 25
    },
    {
        "nombre": "Andrés Ruiz",
        "categoria": "Peso Pesado",
        "edad": 28
    },
    {
        "nombre": "Miguel Torres",
        "categoria": "Peso Ligero",
        "edad": 21
    },
    {
        "nombre": "Daniel Castro",
        "categoria": "Peso Medio",
        "edad": 24
    }
]


def mostrar_peleadores(peleadores):

    print("=== LISTA DE PELEADORES ===")

    for peleador in peleadores:

        print(f'Nombre: {peleador["nombre"]}')
        print(f'Categoría: {peleador["categoria"]}')
        print(f'Edad: {peleador["edad"]} años')
        print("-----------------------------")


mostrar_peleadores(peleadores)
